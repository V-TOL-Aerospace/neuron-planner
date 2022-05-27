import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem, get_neuron_icon } from "./leaflet_interface";
import { NeuronHelp } from "./neuron_help";
import { NeuronOptions } from "./neuron_options";

export interface NeuronFeaturePointData {
    version:string,
    type:string,
    point:NeuronInterfacePointData,
    wait_duration:number,
    capture_image:boolean,
    ground_resolution:number,
}

export class NeuronFeatureWaypoint extends NeuronFeatureBase {
    static override NAME = "Waypoint";
    static override TYPE = "NeuronFeatureWaypoint";
    static override VERSION = '1066fce0-dd80-11ec-b085-f96e36263ede';
    static override HELP_KEY = 'waypoint';

    #marker:L.Marker;
    #point:NeuronInterfacePoint;
    #dom:HTMLDivElement;
    #dom_lat:HTMLInputElement;
    #dom_lon:HTMLInputElement;
    #dom_alt:HTMLInputElement;
    #dom_hdg:HTMLInputElement;
    #dom_wait:HTMLInputElement;
    #dom_capture:HTMLInputElement;
    #dom_ground_resolution:HTMLInputElement;

    #wait_duration:number;
    #capture_image:boolean;
    #ground_resolution:number;

    #unsub_option_cb:CallableFunction;

    static _gsd_ratio = 0.01;   //GSD = [DOM Value] * Ratio

    constructor(map:L.Map, point:NeuronInterfacePoint=null) {
        super(map);

        this.#marker = null;
        this.#point = null;
        this.#dom = null;
        this.#dom_lat = null;
        this.#dom_lon = null;
        this.#dom_alt = null;
        this.#dom_hdg = null;
        this.#dom_wait = null;
        this.#dom_capture = null;
        this.#dom_ground_resolution = null;

        this.#wait_duration = 0;
        this.#capture_image = false;
        this.#ground_resolution = 0;

        if(point)
            this.set_point(point);

        this.#unsub_option_cb = NeuronOptions.add_callback(this.#options_changed.bind(this));
    }

    set_options_subscriber() {
        if(this.#unsub_option_cb)
            this.#unsub_option_cb();

        this.#unsub_option_cb = NeuronOptions.add_callback(this.#options_changed.bind(this));
    }

    #options_changed() {
        //Give preference to update altitude from current ground resolution if we're capturing an image
        if(this.#capture_image) {
            this.set_ground_resolution(this.#ground_resolution);
        } else {
            this.#internal_set_point(this.#point, false, false, true);  //Only use this to trigger calcs, don't update other marker details
        }
    }

    remove_point_by_context(context:L.Marker) {
        if(this.#marker == context) {
            this.remove_feature();
        } else {
            console.warn("Call to remove unknown marker context");
        }
    }

    #remove_point_by_event(event:L.LeafletEvent) {
        this.remove_point_by_context(event.target);
    }

    #update_position_from_event(event:L.LeafletEvent) {
        let point = NeuronInterfacePoint.from_leaflet(event.target.getLatLng());
        if (this.#point)
            point.altitude = this.#point.altitude;
        this.#internal_set_point(point);
    }

    set_point(point:NeuronInterfacePoint) {
        if(!this.#marker) {
            this.#marker = L.marker(point.to_leaflet(),{
                draggable: true,
                autoPan: true,
                icon: get_neuron_icon('neuron-marker-waypoint')
            })

            this.#marker.on("drag", this.#update_position_from_event.bind(this));
            this.#marker.on("dblclick", this.#remove_point_by_event.bind(this));

            const menu_items = [
                new LeafletContextMenuItem("Show in plan", "fa-bars", this.show_on_plan.bind(this)),
                null,
                new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_context.bind(this)),
            ]
            this.#marker.bindPopup(create_popup_context_dom("Waypoint", menu_items, this.#marker));

            this._add_layer_to_map(this.#marker);
        }

        this.#internal_set_point(point);
    }

    show_on_plan() {
        if(this.#dom) {
            this.#dom.scrollIntoView();
            this.#dom.classList.remove('mission-feature-highlight-remove');
            this.#dom.classList.add('mission-feature-highlight');
            setTimeout(this.#remove_dom_highlight.bind(this), 1000);
        }
    }

    #remove_dom_highlight() {
        if(this.#dom) {
            this.#dom.classList.remove('mission-feature-highlight');
            this.#dom.classList.add('mission-feature-highlight-remove');
        }
    }

    #internal_set_point(point:NeuronInterfacePoint, update_marker:boolean = true, update_dom:boolean=true, update_calcs:boolean=true) {
        this.#point = point;

        if(update_marker && this.#marker)
            this.#marker.setLatLng(point.to_leaflet());

        if(update_dom) {
            if(this.#dom_lat)
                this.#dom_lat.value = point.latitude.toString();

            if(this.#dom_lon)
                this.#dom_lon.value = point.longitude.toString();

            if(this.#dom_alt)
                this.#dom_alt.value = (point.altitude / NeuronFeatureBase._altitude_ratio).toString();

            if(this.#dom_hdg)
                this.#dom_hdg.value = point.heading.toString();
        }

        if(update_calcs) {
            let resolution = NeuronOptions.get_camera().get_ground_resolution(this.#point.altitude);
            if(resolution) {
                if(this.#dom_ground_resolution)
                    this.#dom_ground_resolution.value = (resolution / NeuronFeatureWaypoint._gsd_ratio).toString();

                this.#set_ground_resolution(resolution, false, false);
            }
        }

        this._trigger_on_changed();
    }

    get_wait_duration() {
        return this.#wait_duration;
    }

    set_wait_duration(wait_duration:number) {
        this.#wait_duration = wait_duration;

        if(this.#dom_wait)
            this.#dom_wait.value = this.#wait_duration.toString();

        this._trigger_on_changed();
    }

    get_image_count() {
        return this.#capture_image ? 1 : 0;
    }

    get_capture_image() {
        return this.#capture_image;
    }

    set_capture_image(capture_image:boolean) {
        this.#capture_image = capture_image;

        if(this.#dom_capture)
            this.#dom_capture.checked = this.#capture_image;

        this._trigger_on_changed();
    }

    #update_latitude_from_dom() {
        if(this.#point && this.#dom_lat)
            this.#point.latitude = this.#dom_lat.valueAsNumber;

        this.#internal_set_point(this.#point, true, false, true);
    }

    #update_longitude_from_dom() {
        if(this.#point && this.#dom_lon)
            this.#point.longitude = this.#dom_lon.valueAsNumber;

        this.#internal_set_point(this.#point, true, false, true);
    }

    #update_altitude_from_dom() {
        if(this.#point && this.#dom_alt)
            this.#point.altitude = this.#dom_alt.valueAsNumber * NeuronFeatureBase._altitude_ratio;

        this.#internal_set_point(this.#point, true, false, true);
    }

    #update_heading_from_dom() {
        if(this.#point && this.#dom_hdg)
            this.#point.heading = this.#dom_hdg.valueAsNumber;

        this.#internal_set_point(this.#point, true, false);
    }

    #update_wait_duration_from_dom() {
        this.#wait_duration = this.#dom_wait.valueAsNumber;

        this._trigger_on_changed();
    }

    #update_capture_image_from_dom() {
        this.#capture_image = this.#dom_capture.checked;

        this._trigger_on_changed();
    }

    #update_ground_resolution_from_dom() {
        this.#set_ground_resolution(this.#dom_ground_resolution.valueAsNumber * NeuronFeatureWaypoint._gsd_ratio);
    }

    override show_help() {
        window.neuron_map.show_map_help(true, `${NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeatureWaypoint.HELP_KEY}`);
    }

    override remove_feature() {
        if(this.#marker)
            this._remove_layer_from_map(this.#marker);

        super.remove_feature();
    }

    override get_path_coords() {
        return this.#point ? [this.#point] : [];
    }

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Waypoint");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            const t0 = "Latitude location for the waypoint in decimal degrees";
            this.#dom_lat = this._create_dom_input_number(this.#point ? this.#point.latitude : 0.0, this.#update_latitude_from_dom.bind(this), -90, 90, 0.0002);
            this.#dom_lat.title = t0;
            c.appendChild(this._create_dom_label("Latitude:", this.#dom_lat, t0));
            c.appendChild(this.#dom_lat);

            const t1 = "Longitude location for the waypoint in decimal degrees";
            this.#dom_lon = this._create_dom_input_number(this.#point ? this.#point.longitude : 0.0, this.#update_longitude_from_dom.bind(this), -180, 180, 0.0002);
            this.#dom_lon.title = t1;
            c.appendChild(this._create_dom_label("Longitude:", this.#dom_lon, t1));
            c.appendChild(this.#dom_lon);

            const t2 = "Altitude for the waypoint in feet relative to take-off location ground level";
            this.#dom_alt = this._create_dom_input_number((this.#point ? this.#point.altitude : 0.0) / NeuronFeatureBase._altitude_ratio, this.#update_altitude_from_dom.bind(this));
            this.#dom_alt.title = t2;
            c.appendChild(this._create_dom_label("Altitude:", this.#dom_alt, t2));
            c.appendChild(this.#dom_alt);

            const t3 = "Heading for the waypoint in degrees relative to North";
            this.#dom_hdg = this._create_dom_input_number((this.#point ? this.#point.heading : 0.0), this.#update_heading_from_dom.bind(this), -180, 180);
            this.#dom_hdg.title = t3;
            c.appendChild(this._create_dom_label("Heading:", this.#dom_hdg, t3));
            c.appendChild(this.#dom_hdg);

            const t4 = "Duration in seconds for the aircraft to hold position at the waypoint";
            this.#dom_wait = this._create_dom_input_number(this.#wait_duration, this.#update_wait_duration_from_dom.bind(this), 0);
            this.#dom_wait.title = t4;
            c.appendChild(this._create_dom_label("Wait:", this.#dom_wait, t4));
            c.appendChild(this.#dom_wait);

            const t5 = "Capture an image when the aircraft arrives at the waypoint";
            this.#dom_capture = this._create_dom_input_checkbox(this.#capture_image, this.#update_capture_image_from_dom.bind(this));
            this.#dom_capture.title = t5;
            c.appendChild(this._create_dom_label("Capture:", this.#dom_capture, t5));
            c.appendChild(this.#dom_capture);

            const t18 = "Ground sampling distance, or ground resolution, in centimeters per pixel";
            this.#dom_ground_resolution = this._create_dom_input_number(this.#ground_resolution / NeuronFeatureWaypoint._gsd_ratio, this.#update_ground_resolution_from_dom.bind(this), 0, null, 0.2);
            this.#dom_ground_resolution.title = t18;
            c.appendChild(this._create_dom_label("GSD:", this.#dom_ground_resolution, t18));
            c.appendChild(this.#dom_ground_resolution);

            this.#dom.append(c);
        }

        return this.#dom;
    }

    set_ground_resolution(ground_resolution:number) {
        this.#set_ground_resolution(ground_resolution);
    }

    #set_ground_resolution(ground_resolution:number, update_calcs:boolean = true, trigger_callbacks:boolean = true) {
        this.#ground_resolution = ground_resolution;

        if(update_calcs) {
            let altitude = NeuronOptions.get_camera().get_distance(this.get_ground_resolution());

            if( altitude && altitude != this.#point.altitude) {
                this.#point.altitude = altitude;
                this.#internal_set_point(this.#point, true, true, false);
            }
        }

        if(trigger_callbacks)
            this._trigger_on_changed();
    };


    get_ground_resolution() {
        return this.#ground_resolution;
    };

    static override isObjectOfDataType(object: any): object is NeuronFeaturePointData {
        let is_valid =
            (object.type == NeuronFeatureWaypoint.TYPE) &&
            (object.version == NeuronFeatureWaypoint.VERSION);

        return is_valid;
    }

    static override from_json(j:NeuronFeaturePointData, map:L.Map) {
        //XXX: Implement this per inherited feature
        if(!NeuronFeatureWaypoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeaturePoint`);

        const point = NeuronInterfacePoint.from_json(j.point);
        const p = new NeuronFeatureWaypoint(map, point);
        p.set_wait_duration(Number.isNaN(j.wait_duration) ? 0.0 : j.wait_duration);
        p.set_capture_image(Boolean(j.capture_image));
        p.set_ground_resolution(Number.isNaN(j.ground_resolution) ? 0.0 : j.ground_resolution); //Also triggers update of calculations
        return p;
    }

    override to_json() {
        //XXX: Implement this per inherited feature
        return <NeuronFeaturePointData>{
            version: NeuronFeatureWaypoint.VERSION,
            type: NeuronFeatureWaypoint.TYPE,
            point: this.#point.to_json(),
            wait_duration: this.#wait_duration,
            capture_image: this.#capture_image,
            ground_resolution: this.#ground_resolution,
        }
    }
}
