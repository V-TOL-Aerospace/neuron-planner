import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export class NeuronFeaturePoint extends NeuronFeatureBase {
    #marker:L.Marker;
    #point:NeuronInterfacePoint;
    #dom:HTMLDivElement;
    #dom_lat:HTMLInputElement;
    #dom_lon:HTMLInputElement;
    #dom_alt:HTMLInputElement;

    constructor(map:L.Map, point:NeuronInterfacePoint=null, on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        super(map, on_remove, on_change);

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

            //TODO: review: Could also use "dragend"?
            this.#marker.on("drag", this.#update_position_from_event.bind(this));
            this.#marker.on("dblclick", this.#remove_point_by_event.bind(this));

            const menu_items = [
                new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_context.bind(this)),
            ]
            this.#marker.bindPopup(create_popup_context_dom("Waypoint", menu_items, this.#marker));

            this._add_feature_to_map(this.#marker);
        } else {
            this.#marker.setLatLng(point.to_leaflet());
        }

        this.#internal_set_point(point);
    }

    #internal_set_point(point:NeuronInterfacePoint, update_dom:boolean=true) {
        this.#point = point;

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

        this.#internal_set_point(this.#point, false);
    }

    #update_longitude_from_dom() {
        if(this.#point)
            this.#point.longitude = this.#dom_lon.valueAsNumber;

        this.#internal_set_point(this.#point, false);
    }

    #update_altitude_from_dom() {
        if(this.#point)
            this.#point.altitude = this.#dom_alt.valueAsNumber;

        this.#internal_set_point(this.#point, false);
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

            let input_lat_label = document.createElement("div");
            input_lat_label.className = 'mission-feature-content-item';
            input_lat_label.appendChild(document.createTextNode("Latitude:"));
            c.appendChild(input_lat_label);

            this.#dom_lat = document.createElement("input");
            this.#dom_lat.type = "number";
            this.#dom_lat.min = "-90";
            this.#dom_lat.max = "90";
            this.#dom_lat.value = (this.#point ? this.#point.latitude : 0.0).toString();
            this.#dom_lat.className = 'mission-feature-content-item';
            this.#dom_lat.onchange = this.#update_latitude_from_dom.bind(this);
            c.appendChild(this.#dom_lat);

            let input_lon_label = document.createElement("div");
            input_lon_label.className = 'mission-feature-content-item';
            input_lon_label.appendChild(document.createTextNode("Longitude:"));
            c.appendChild(input_lon_label);

            this.#dom_lon = document.createElement("input");
            this.#dom_lon.type = "number";
            this.#dom_lon.min = "-90";
            this.#dom_lon.max = "90";
            this.#dom_lon.value = (this.#point ? this.#point.longitude : 0.0).toString();
            this.#dom_lon.className = 'mission-feature-content-item';
            this.#dom_lon.onchange = this.#update_longitude_from_dom.bind(this);
            c.appendChild(this.#dom_lon);

            let input_alt_label = document.createElement("div");
            input_alt_label.className = 'mission-feature-content-item';
            input_alt_label.appendChild(document.createTextNode("Altitude:"));
            c.appendChild(input_alt_label);

            this.#dom_alt = document.createElement("input");
            this.#dom_alt.type = "number";
            this.#dom_alt.min = "0";
            this.#dom_alt.value = (this.#point ? this.#point.altitude : 0.0).toString();
            this.#dom_alt.className = 'mission-feature-content-item';
            this.#dom_alt.onchange = this.#update_altitude_from_dom.bind(this);
            c.appendChild(this.#dom_alt);

            this.#dom.append(c);
        }

        return this.#dom;
    }
}
