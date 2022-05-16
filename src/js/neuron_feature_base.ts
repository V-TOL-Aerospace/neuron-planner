import { L } from "./leaflet_interface";
import { NeuronDOMFactory } from "./neuron_dom_factory";
import { NeuronInterfacePoint} from "./neuron_interfaces";

export interface NeuronFeatureBaseData {
    version:string,
    type:string
}

export class NeuronFeatureBase extends NeuronDOMFactory {
    //XXX: Override this in any inherited classes
    static NAME = "[BASE FEATURE]";
    static TYPE = "NeuronFeatureBase";
    static VERSION = '5caf31f0-d243-11ec-bbb3-df25a4f645e3';

    #map:L.Map;
    #features:L.Layer[];
    #on_remove:CallableFunction;
    #on_change:CallableFunction;
    #on_move:CallableFunction;

    constructor(map:L.Map) {
        super('mission-feature');

        this.#features = [];
        this.#map = map;
        this.set_remove_callback(null);
        this.set_change_callback(null);
        this.set_move_callback(null);
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

    _get_dom(text:string="Mission Feature") {
        let dom = document.createElement("div");
        dom.className = 'mission-feature';

        let title = document.createElement("div");
        title.className = 'mission-feature-title';

        let t = document.createElement("div");
        t.className = 'mission-feature-title-text';
        t.appendChild(document.createTextNode(text));
        title.appendChild(t);

        //Add two sets of icons, one for each size button
        const button_sizes = [
            'mission-feature-title-button',
            'mission-feature-title-button-small'
        ];

        for(const but_class of button_sizes) {
            const fa_size = but_class.includes('small') ? " fa-2xs" : "";

            let b0 = document.createElement("button");
            b0.className = but_class;
            b0.title = "Zoom to feature";
            b0.onclick = this.zoom_to_feature.bind(this);
            let b0i = document.createElement("i");
            b0i.className = 'fas fa-location-crosshairs' + fa_size;
            b0.appendChild(b0i);
            title.appendChild(b0);

            let b1 = document.createElement("button");
            b1.className = but_class;
            b1.title = "Move up";
            b1.onclick = this.#request_move.bind(this, -1);
            let b1i = document.createElement("i");
            b1i.className = 'fas fa-arrow-up' + fa_size;
            b1.appendChild(b1i);
            title.appendChild(b1);

            let b2 = document.createElement("button");
            b2.className = but_class;
            b2.title = "Move down";
            b2.onclick = this.#request_move.bind(this, 1);
            let b2i = document.createElement("i");
            b2i.className = 'fas fa-arrow-down' + fa_size;
            b2.appendChild(b2i);
            title.appendChild(b2);

            let b3 = document.createElement("button");
            b3.className = but_class;
            b3.title = "Remove";
            b3.onclick = this.remove_feature.bind(this);
            let b3i = document.createElement("i");
            b3i.className = 'fas fa-close' + fa_size;
            b3.appendChild(b3i);
            title.appendChild(b3);
        }

        dom.appendChild(title);

        return dom;
    }


    // _create_dom_labelled_input(text:string, input:(HTMLInputElement|HTMLSelectElement|HTMLButtonElement), label_first:boolean=true, hide_label:boolean=false) {
    //     let dom = document.createElement("div");
    //     dom.className = 'mission-feature-content-item';

    //     if (!input.id)
    //         input.id = NeuronUID();

    //     let l = document.createElement("label");
    //     l.className = 'mission-feature-content-label';
    //     l.htmlFor = input.id;
    //     l.appendChild(document.createTextNode(text));
    //     if(hide_label)
    //         l.style.visibility = 'hidden';

    //     if(label_first) {
    //         dom.appendChild(l);
    //         dom.appendChild(input);
    //     } else {
    //         dom.appendChild(input);
    //         dom.appendChild(l);
    //     }
    //     return dom;
    // }

    #request_move(direction:number = 0) {
        if(this.#on_move && direction != 0)
            this.#on_move(this, direction);
    }


    set_remove_callback(on_remove:CallableFunction) {
        this.#on_remove = on_remove;
    }

    set_change_callback(on_change:CallableFunction) {
        this.#on_change = on_change;
    }

    set_move_callback(on_move:CallableFunction) {
        this.#on_move = on_move;
    }

    get_features() {
        return this.#features;
    }

    zoom_to_feature() {
        const group = L.featureGroup(this.#features);
        this.#map.fitBounds(group.getBounds(), {
            padding: [20, 20]
        });
    }

    remove_feature() {
        //XXX: Implement this per inherited feature
        if(this.#on_remove)
            this.#on_remove(this);
    }

    get_path_coords() {
        //XXX: Implement this per inherited feature
        const coords:NeuronInterfacePoint[] = [];
        return coords;
    }

    get_dom() {
        //XXX: Implement this per inherited feature
        return this._get_dom();
    }

    static isObjectOfDataType(object: any): object is NeuronFeatureBaseData {
        let is_valid =
            (object.type == NeuronFeatureBase.TYPE) ||
            (object.version == NeuronFeatureBase.VERSION);

        return is_valid;
    }

    static from_json(j:NeuronFeatureBaseData, map:L.Map) {
        //XXX: Implement this per inherited feature
        if(!NeuronFeatureBase.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeatureBase`);

        return new NeuronFeatureBase(map);
    }

    to_json() {
        //XXX: Implement this per inherited feature
        return <NeuronFeatureBaseData>{
            version: NeuronFeatureBase.VERSION,
            type: NeuronFeatureBase.TYPE
        }
    }
}
