import { L } from "./leaflet_interface";

export class NeuronFeatureBase {
    #map:L.Map;
    #features:L.Layer[];
    #on_remove:CallableFunction;

    constructor(map:L.Map, on_remove:CallableFunction=null) {
        this.#features = [];
        this.#map = map;
        this.set_remove_callback(on_remove);
    }

    set_remove_callback(on_remove:CallableFunction) {
        this.#on_remove = on_remove;
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
}
