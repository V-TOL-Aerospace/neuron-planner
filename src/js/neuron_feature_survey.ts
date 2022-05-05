import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronInterfacePoint } from "./neuron_interface_point";
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export class NeuronFeatureSurvey extends NeuronFeaturePolygon {
    #waypoints:L.Marker[];

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        super(map, corners, on_remove, on_change);
        this.#waypoints = [];
        this._set_on_change_internal(this.update_survey.bind(this));
        this.update_survey();
    }

    update_survey() {
        this.#clean_waypoints();

        const polygon = this.get_polygon();
        if(polygon) {
            let count = 1;

            const b = polygon.getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;

            const point = new NeuronInterfacePoint(sw.lat + dy / 2, sw.lng + dx / 2);

            let m = L.marker([point.latitude, point.longitude], {
                // draggable: true,
                autoPan: true,
            })

            // const menu_items = [
            //     new LeafletContextMenuItem("Move forward", "fa-arrow-left", this.move_corner_forwards.bind(this)),
            //     new LeafletContextMenuItem("Move backward", "fa-arrow-right", this.move_corner_backwards.bind(this)),
            //     null,
            //     new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_corner.bind(this)),
            // ]
            m.bindPopup(create_popup_context_dom(`Survey Waypoint (#${count})`, [], m));


            //TODO: review: Could also use "dragend"?
            // m.on("drag", this.update_polygon.bind(this));
            // m.on("click", this.#select_corner_by_event.bind(this));
            // m.on("dblclick", this.#remove_point_by_event.bind(this));

            this.#waypoints.push(m);
            this._add_feature_to_map(m);
        }
    }

    #clean_waypoints() {
        for(const wp of this.#waypoints) {
            wp.remove();
        }
        this.#waypoints = [];
    }

    remove_feature() {
        this.#clean_waypoints();

        super.remove_feature();
    }

    get_path_coords() {
        return this.#waypoints.map(x => NeuronInterfacePoint.from_leaflet(x.getLatLng()));
    }
}
