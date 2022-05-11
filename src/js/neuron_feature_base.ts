import { L } from "./leaflet_interface";
import { NeuronInterfacePoint, NeuronUUID} from "./neuron_interfaces";

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

    _get_dom(title:string="Mission Feature") {
        let dom = document.createElement("div");
        dom.className = 'mission-feature';

        let t = document.createElement("div");
        t.className = 'mission-feature-title';
        t.appendChild(document.createTextNode(title));

        //TODO: Movement controls and remove buttons

        dom.appendChild(t);

        return dom;
    }


    _create_dom_labelled_input(text:string, input:(HTMLInputElement|HTMLSelectElement), label_first:boolean=true) {
        let dom = document.createElement("div");
        dom.className = 'mission-feature-content-item';

        if (!input.id)
            input.id = NeuronUUID();

        let l = document.createElement("label");
        l.className = 'mission-feature-content-label';
        l.htmlFor = input.id;
        l.appendChild(document.createTextNode(text));

        if(label_first) {
            dom.appendChild(l);
            dom.appendChild(input);
        } else {
            dom.appendChild(input);
            dom.appendChild(l);
        }
        return dom;
    }

    _create_dom_input_number(value:number, on_change:any, min:number = null, max:number = null) {
        let dom = document.createElement("input");
        dom.type = "number";
        if(min)
            dom.min = min.toString();
        if(max)
            dom.max = max.toString();
        dom.value = value.toString();
        dom.className = 'mission-feature-content-value';
        dom.onchange = on_change;
        return dom;
    }

    _create_dom_input_checkbox(checked:boolean, on_change:any) {
        let dom = document.createElement("input");
        dom.type = "checkbox";
        dom.checked = checked;
        dom.className = 'mission-feature-content-value';
        dom.onchange = on_change;
        return dom;
    }

    _create_dom_input_select(options:string[], labels:string[], on_change:any, selected_option:string=null) {
        let dom = document.createElement("select");

        if(options.length != labels.length)
            throw new Error(`Options list does not match labels list (${options.length} != ${labels.length})`);

        //Create and append the options
        for (let i = 0; i < options.length; i++) {
            let option = document.createElement("option");
            option.value = options[i];
            option.text = labels[i];
            if(selected_option && selected_option==options[i])
                option.selected = true;
            dom.appendChild(option);
        }
        dom.className = 'mission-feature-content-value';
        dom.onchange = on_change;
        return dom;
    }


    set_remove_callback(on_remove:CallableFunction) {
        this.#on_remove = on_remove;
    }

    set_change_callback(on_change:CallableFunction) {
        this.#on_change = on_change;
    }

    get_features() {
        return this.#features;
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
}
