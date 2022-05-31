import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem, get_neuron_map_marker } from "./interface_leaflet";
import { NeuronHelp } from "./neuron_help";
import { NeuronPlanner } from "./neuron_planner";
import { NeuronIcons } from "./interface_fontawesome";

export interface NeuronFeaturePointData {
    version:string,
    type:string,
    point:NeuronInterfacePointData
}

export class NeuronFeaturePoint extends NeuronFeatureBase {
    static override NAME = "Point";
    static override TYPE = "NeuronFeaturePoint";
    static override VERSION = 'cd512a90-dd55-11ec-8a8a-23c90341eb99';
    static override HELP_KEY = 'point';

    #planner:NeuronPlanner;
    #marker:L.Marker;
    #point:NeuronInterfacePoint;
    #dom:HTMLDivElement;
    #dom_label:HTMLInputElement;
    #dom_lat:HTMLInputElement;
    #dom_lon:HTMLInputElement;
    #dom_alt:HTMLInputElement;
    #dom_convert_waypoint:HTMLButtonElement;

    constructor(map:L.Map, point:NeuronInterfacePoint=null, planner:NeuronPlanner = null) {
        super(map);

        this.#marker = null;
        this.#point = null;
        this.#dom = null;
        this.#dom_label = null;
        this.#dom_lat = null;
        this.#dom_lon = null;
        this.#dom_alt = null;
        this.#dom_convert_waypoint = null;

        this.set_planner(planner);

        if(point)
            this.set_point(point);
    }

    get_point() {
        return this.#point;
    }

    set_planner(planner:NeuronPlanner) {
        this.#planner = planner;
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
                icon: get_neuron_map_marker('neuron-marker-poi')
            })

            this.#marker.on("drag", this.#update_position_from_event.bind(this));
            this.#marker.on("dblclick", this.#remove_point_by_event.bind(this));

            const menu_items = [
                new LeafletContextMenuItem("Show in plan", NeuronIcons.PLAN_LIST, this.show_on_plan.bind(this)),
                null,
                new LeafletContextMenuItem("Remove", NeuronIcons.DELETE, this.remove_point_by_context.bind(this)),
            ]
            this.#marker.bindPopup(create_popup_context_dom("Point", menu_items, this.#marker));

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

    #internal_set_point(point:NeuronInterfacePoint, update_marker:boolean = true, update_dom:boolean=true) {
        this.#point = point;

        if(update_marker && this.#marker)
            this.#marker.setLatLng(point.to_leaflet());

        if(update_dom) {
            if(this.#dom_lat)
                this.#dom_lat.value = point.latitude.toString();

            if(this.#dom_lon)
                this.#dom_lon.value = point.longitude.toString();
        }

        this._trigger_on_changed();
    }

    #update_latitude_from_dom() {
        if(this.#point)
            this.#point.latitude = this.#dom_lat.valueAsNumber;

        this.#internal_set_point(this.#point, true, false);
    }

    #update_tag_from_dom() {
        if(this.#point)
            this.#point.tag = this.#dom_label.value;

        this.#internal_set_point(this.#point, true, false);
    }

    #update_longitude_from_dom() {
        if(this.#point)
            this.#point.longitude = this.#dom_lon.valueAsNumber;

        this.#internal_set_point(this.#point, true, false);
    }

    #update_altitude_from_dom() {
        if(this.#point)
            this.#point.altitude = this.#dom_alt.valueAsNumber * NeuronFeatureBase._altitude_ratio;

        this.#internal_set_point(this.#point, true, false);
    }


    override show_help() {
        window.neuron_map.show_map_help(true, `${NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeaturePoint.HELP_KEY}`);
    }

    override remove_feature() {
        if(this.#marker)
            this._remove_layer_from_map(this.#marker);

        super.remove_feature();
    }

    override get_path_coords():NeuronInterfacePoint[] {
        return [];
    }

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Point");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            const t01 = "Convert this point to a waypoint feature";
            this.#dom_convert_waypoint = this._create_dom_input_button("Waypoint", this.#convert_to_waypoint.bind(this));
            this.#dom_convert_waypoint.title = t01;
            c.appendChild(this._create_dom_label("Convert to:", this.#dom_convert_waypoint, t01));
            c.appendChild(this.#dom_convert_waypoint);

            const t3 = "Text label for identification of the point";
            this.#dom_label = this._create_dom_input_textbox((this.#point ? this.#point.tag : ""), this.#update_tag_from_dom.bind(this));
            this.#dom_label.title = t3;
            c.appendChild(this._create_dom_label("Label:", this.#dom_label, t3));
            c.appendChild(this.#dom_label);

            const t0 = "Latitude location for the point in decimal degrees";
            this.#dom_lat = this._create_dom_input_number(this.#point ? this.#point.latitude : 0.0, this.#update_latitude_from_dom.bind(this), -90, 90, 0.0002);
            this.#dom_lat.title = t0;
            c.appendChild(this._create_dom_label("Latitude:", this.#dom_lat, t0));
            c.appendChild(this.#dom_lat);

            const t1 = "Longitude location for the point in decimal degrees";
            this.#dom_lon = this._create_dom_input_number(this.#point ? this.#point.longitude : 0.0, this.#update_longitude_from_dom.bind(this), -180, 180, 0.0002);
            this.#dom_lon.title = t1;
            c.appendChild(this._create_dom_label("Longitude:", this.#dom_lon, t1));
            c.appendChild(this.#dom_lon);

            const t2 = "Altitude for the point in feet relative to take-off location ground level";
            this.#dom_alt = this._create_dom_input_number((this.#point ? this.#point.altitude : 0.0) / NeuronFeatureBase._altitude_ratio, this.#update_altitude_from_dom.bind(this));
            this.#dom_alt.title = t2;
            c.appendChild(this._create_dom_label("Altitude:", this.#dom_alt, t2));
            c.appendChild(this.#dom_alt);

            this.#dom.append(c);
        }

        return this.#dom;
    }

    #convert_to_waypoint() {
        if(this.#planner) {
            this.#planner.replace_point_with_waypoint(this);
        } else {
            console.warn("Planner not set, cannot convert point feature!");
        }
    }

    static override isObjectOfDataType(object: any): object is NeuronFeaturePointData {
        let is_valid =
            (object.type == NeuronFeaturePoint.TYPE) &&
            (object.version == NeuronFeaturePoint.VERSION);

        return is_valid;
    }

    static override from_json(j:NeuronFeaturePointData, map:L.Map) {
        //XXX: Implement this per inherited feature
        if(!NeuronFeaturePoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeaturePoint`);

        const point = NeuronInterfacePoint.from_json(j.point);
        return new NeuronFeaturePoint(map, point);
    }

    override to_json() {
        //XXX: Implement this per inherited feature
        return <NeuronFeaturePointData>{
            version: NeuronFeaturePoint.VERSION,
            type: NeuronFeaturePoint.TYPE,
            point: this.#point.to_json()
        }
    }
}
