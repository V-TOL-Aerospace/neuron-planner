import { L } from "./leaflet_interface";
import { NeuronInterfacePoint } from "./neuron_interfaces";

export class NeuronFeatureBase {
    #map:L.Map;
    #features:L.Layer[];
    #on_remove:CallableFunction;
    #on_change:CallableFunction;

    constructor(map:L.Map, on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        this.#features = [];
        this.#map = map;
        this.set_remove_callback(on_remove);
        this.set_change_callback(on_change);
    }

    set_remove_callback(on_remove:CallableFunction) {
        this.#on_remove = on_remove;
    }

    set_change_callback(on_change:CallableFunction) {
        this.#on_change = on_change;
    }

    _trigger_on_changed() {
        if(this.#on_change)
            this.#on_change(this);
    }

    _add_feature_to_map(m:L.Layer) {
        if(this.#map) {
            m.addTo(this.#map);
            this.#features.push(m);
            m.on('remove', this._feature_removed.bind(this));
        } else {
            console.error('Error: no map reference set');
        }
    }

    _feature_removed(event:L.LayerEvent) {
        let index = this.#features.indexOf(event.target);
        if(index !== -1) {
            this.#features.splice(index, 1);
        }
    }

    remove_feature() {
        //Handle remove callback
        if(this.#on_remove)
            this.#on_remove(this);
    }

    get_features() {
        return this.#features;
    }

    get_path_coords() {
        //XXX: Implement this per inherited feature
        const coords:NeuronInterfacePoint[] = [];
        return coords;
    }
}
