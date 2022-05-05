import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint } from "./neuron_interface_point";
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export class NeuronFeaturePoint extends NeuronFeatureBase {
    #marker:L.Marker;
    #point:NeuronInterfacePoint;

    constructor(map:L.Map, point:NeuronInterfacePoint=null, on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        super(map, on_remove, on_change);

        this.#marker = null;
        this.#point = null;
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

    remove_feature() {
        if(this.#marker)
            this.#marker.remove();

        super.remove_feature();
    }

    #update_position_from_event(event:L.LeafletEvent) {
        this.#internal_set_point(NeuronInterfacePoint.from_leaflet(event.target.getLatLng()));
    }

    set_point(point:NeuronInterfacePoint) {
        if(!this.#marker) {
            this.#marker = L.marker(point.to_leaflet(),{
                draggable: true,
                autoPan: true,
                // @ts-ignore
                // contextmenu: true,
                // contextmenuWidth: 140,
                // contextmenuItems: [{
                //     text: 'Delete',
                //     icon: 'img/v_icons/v_exit_icon.png',
                //     callback: this.remove_point_by_context.bind(this)
                // }]
            })

            const menu_items = [
                new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_context.bind(this)),
            ]
            this.#marker.bindPopup(create_popup_context_dom("Waypoint", menu_items, this.#marker));

            //TODO: review: Could also use "dragend"?
            this.#marker.on("drag", this.#update_position_from_event.bind(this));
            // m.on("dblclick", this.remove_point_by_event.bind(this));
            // m.on("contextmenu", this.remove_point_by_event.bind(this));

            this._add_feature_to_map(this.#marker);
        } else {
            this.#marker.setLatLng(point.to_leaflet());
        }

        this.#internal_set_point(point);
    }

    #internal_set_point(point:NeuronInterfacePoint) {
        this.#point = point;
        this._trigger_on_changed();
    }

    get_path_coords() {
        return this.#point ? [this.#point] : [];
    }
}
