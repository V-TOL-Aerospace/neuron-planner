import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export interface NeuronFeaturePointData {
    version:string,
    type:string,
    point:NeuronInterfacePointData
}

export class NeuronFeaturePoint extends NeuronFeatureBase {
    static override NAME = "Waypoint";
    static override TYPE = "NeuronFeaturePoint";
    static override VERSION = '66102a60-d243-11ec-8c53-d9ce4e8a3b58';

    #marker:L.Marker;
    #point:NeuronInterfacePoint;
    #dom:HTMLDivElement;
    #dom_lat:HTMLInputElement;
    #dom_lon:HTMLInputElement;
    #dom_alt:HTMLInputElement;

    constructor(map:L.Map, point:NeuronInterfacePoint=null) {
        super(map);

        this.#marker = null;
        this.#point = null;
        this.#dom = null;
        this.#dom_lat = null;
        this.#dom_lon = null;

        if(point)
            this.set_point(point);
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
            })

            this.#marker.on("drag", this.#update_position_from_event.bind(this));
            this.#marker.on("dblclick", this.#remove_point_by_event.bind(this));

            const menu_items = [
                new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_context.bind(this)),
            ]
            this.#marker.bindPopup(create_popup_context_dom("Waypoint", menu_items, this.#marker));

            this._add_feature_to_map(this.#marker);
        }

        this.#internal_set_point(point);
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

            if(this.#dom_alt)
                this.#dom_alt.value = point.altitude.toString();
        }

        this._trigger_on_changed();
    }

    #update_latitude_from_dom() {
        if(this.#point)
            this.#point.latitude = this.#dom_lat.valueAsNumber;

        this.#internal_set_point(this.#point, true, false);
    }

    #update_longitude_from_dom() {
        if(this.#point)
            this.#point.longitude = this.#dom_lon.valueAsNumber;

        this.#internal_set_point(this.#point, true, false);
    }

    #update_altitude_from_dom() {
        if(this.#point)
            this.#point.altitude = this.#dom_alt.valueAsNumber;

        this.#internal_set_point(this.#point, true, false);
    }

    override remove_feature() {
        if(this.#marker)
            this.#marker.remove();

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

            const t2 = "Altitude for the waypoint in meters relative to take-off location ground level";
            this.#dom_alt = this._create_dom_input_number(this.#point ? this.#point.altitude : 0.0, this.#update_altitude_from_dom.bind(this));
            this.#dom_alt.title = t2;
            c.appendChild(this._create_dom_label("Altitude:", this.#dom_alt, t2));
            c.appendChild(this.#dom_alt);

            this.#dom.append(c);
        }

        return this.#dom;
    }

    static override isObjectOfDataType(object: any): object is NeuronFeaturePointData {
        let is_valid =
            (object.type == NeuronFeaturePoint.TYPE) ||
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
