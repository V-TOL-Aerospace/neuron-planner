import { L } from "./interface_leaflet";
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
    static HELP_KEY = 'base';

    #visible:boolean;
    #map:L.Map;
    #features:L.Layer[];
    #hidden_features:L.Layer[];
    #on_remove:CallableFunction;
    #on_change:CallableFunction;
    #on_move:CallableFunction;

    #dom:HTMLDivElement;
    #dom_buttons_visibility:HTMLButtonElement[];

    static _altitude_ratio = 0.3048;   //Alt = [DOM Value] * Ratio

    //Add two sets of icons, one for each size button
    static _button_sizes = [
        'mission-feature-title-button',
        'mission-feature-title-button-small'
    ];

    constructor(map:L.Map) {
        super('mission-feature');

        this.#visible = true;
        this.#features = [];
        this.#hidden_features = [];
        this.#map = map;
        this.#dom_buttons_visibility = [];
        this.#dom = null;
        this.set_remove_callback(null);
        this.set_change_callback(null);
        this.set_move_callback(null);
    }

    _trigger_on_changed() {
        if(this.#on_change)
            this.#on_change(this);
    }

    _add_layer_to_map(m:L.Layer) {
        if(this.#map) {
            if(this.#visible) {
                m.addTo(this.#map);

                // //XXX: Forbidden work to change the hue of the marker (must be done after adding to map)
                // //@ts-ignore
                // if(icon_adj && m._icon) {
                //     //@ts-ignore
                //     m._icon.classList.add(icon_adj);
                // }

                this.#features.push(m);
            } else {
                this.#hidden_features.push(m);
            }
            // m.on('remove', this._feature_removed.bind(this));
        } else {
            console.error('Error: no map reference set');
        }
    }

    _remove_layer_from_map(m:L.Layer) {
        let index_visible = this.#features.indexOf(m);
        if(index_visible !== -1) {
            this.#features.splice(index_visible, 1);
            m.remove();
        }

        let index_hidden = this.#hidden_features.indexOf(m);
        if(index_hidden !== -1) {
            this.#features.splice(index_hidden, 1);
            //XXX: These already do not exist on the map, so no need to remove!
        }
    }

    #update_visibility_dom() {
        if(this.#dom) {
            if(this.#visible) {
                this.#dom.classList.remove('mission-feature-hidden');
            } else {
                this.#dom.classList.add('mission-feature-hidden');
            }
        }
    }

    #update_visibility_icons() {
        for(let but of this.#dom_buttons_visibility) {
            const fa_size = this.#get_button_size_class(but.className);
            but.innerHTML = '';
            let bvi = document.createElement("i");
            bvi.className = 'fas ' + (this.#visible ? 'fa-eye-slash' : 'fa-eye') + fa_size;
            but.appendChild(bvi);
        }
    }

    #get_button_size_class(button_class:string) {
        return  button_class.includes('small') ? " fa-2xs" : "";
    }

    _get_dom(text:string="Mission Feature") {
        this.#dom = document.createElement("div");
        this.#dom.className = 'mission-feature';

        let title = document.createElement("div");
        title.className = 'mission-feature-title';

        let t = document.createElement("div");
        t.className = 'mission-feature-title-text';
        t.appendChild(document.createTextNode(text));
        title.appendChild(t);

        let d = document.createElement("div");
        d.className = 'mission-feature-title-button-container';

        this.#dom_buttons_visibility = [];
        for(const button_class of NeuronFeatureBase._button_sizes) {
            const fa_size = this.#get_button_size_class(button_class);

            let b0 = document.createElement("button");
            b0.className = button_class;
            b0.title = "Zoom to feature";
            b0.onclick = this.zoom_to_feature.bind(this);
            let b0i = document.createElement("i");
            b0i.className = 'fas fa-location-crosshairs' + fa_size;
            b0.appendChild(b0i);
            d.appendChild(b0);

            let bv = document.createElement("button");
            bv.className = button_class;
            bv.title = "Toggle feature visibility";
            bv.onclick = this.toggle_visibility.bind(this);
            d.appendChild(bv);
            this.#dom_buttons_visibility.push(bv);

            let b1 = document.createElement("button");
            b1.className = button_class;
            b1.title = "Move up";
            b1.onclick = this.#request_move.bind(this, -1);
            let b1i = document.createElement("i");
            b1i.className = 'fas fa-arrow-up' + fa_size;
            b1.appendChild(b1i);
            d.appendChild(b1);

            let b2 = document.createElement("button");
            b2.className = button_class;
            b2.title = "Move down";
            b2.onclick = this.#request_move.bind(this, 1);
            let b2i = document.createElement("i");
            b2i.className = 'fas fa-arrow-down' + fa_size;
            b2.appendChild(b2i);
            d.appendChild(b2);

            let b4 = document.createElement("button");
            b4.className = button_class;
            b4.title = "Help";
            b4.onclick = this.show_help.bind(this);
            let b4i = document.createElement("i");
            b4i.className = 'fas fa-question' + fa_size;
            b4.appendChild(b4i);
            d.appendChild(b4);

            let b3 = document.createElement("button");
            b3.className = button_class;
            b3.title = "Remove";
            b3.onclick = this.remove_feature.bind(this);
            let b3i = document.createElement("i");
            b3i.className = 'fas fa-close' + fa_size;
            b3.appendChild(b3i);
            d.appendChild(b3);
        }
        title.appendChild(d);

        this.#update_visibility_icons();
        this.#update_visibility_dom();

        this.#dom.appendChild(title);

        return this.#dom;
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

    toggle_visibility() {
        this.#visible = !this.#visible;
        if(this.#visible) {
            //Show layers
            this.#features = [].concat(this.#hidden_features);
            this.#hidden_features = [];

            for(let feature of this.#features)
                feature.addTo(this.#map);
        } else {
            //Hide layers
            this.#hidden_features = [].concat(this.#features);
            this.#features = [];

            for(let feature of this.#hidden_features)
                feature.remove();
        }

        this.#update_visibility_icons();
        this.#update_visibility_dom();
    }

    zoom_to_feature() {
        const group = L.featureGroup(this.#features);
        this.#map.fitBounds(group.getBounds(), {
            padding: [20, 20]
        });
    }


    show_help() {
        //XXX: Implement this per inherited feature
        //XXX: Explicitly do use "base" key for the base feature
        window.neuron_map.show_map_help(true);
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
            (object.type == NeuronFeatureBase.TYPE) &&
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
