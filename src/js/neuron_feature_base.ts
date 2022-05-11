import { L } from "./leaflet_interface";
import { NeuronInterfacePoint, NeuronUUID} from "./neuron_interfaces";

export class NeuronFeatureBase {
    #map:L.Map;
    #features:L.Layer[];
    #on_remove:CallableFunction;
    #on_change:CallableFunction;
    #on_move:CallableFunction;

    constructor(map:L.Map, on_remove:CallableFunction=null, on_change:CallableFunction=null, on_move:CallableFunction=null) {
        this.#features = [];
        this.#map = map;
        this.set_remove_callback(on_remove);
        this.set_change_callback(on_change);
        this.set_move_callback(on_move);
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

        let b1 = document.createElement("button");
        b1.className = 'mission-feature-title-button';
        b1.onclick = this.#request_move.bind(this, -1);
        let b1i = document.createElement("i");
        b1i.className = 'fas fa-arrow-up';
        b1.appendChild(b1i);
        title.appendChild(b1);

        let b2 = document.createElement("button");
        b2.className = 'mission-feature-title-button';
        b2.onclick = this.#request_move.bind(this, 1);
        let b2i = document.createElement("i");
        b2i.className = 'fas fa-arrow-down';
        b2.appendChild(b2i);
        title.appendChild(b2);

        let b3 = document.createElement("button");
        b3.className = 'mission-feature-title-button';
        b3.onclick = this.remove_feature.bind(this);
        let b3i = document.createElement("i");
        b3i.className = 'fas fa-close';
        b3.appendChild(b3i);
        title.appendChild(b3);

        dom.appendChild(title);

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
        if(min != null)
            dom.min = min.toString();
        if(max != null)
            dom.max = max.toString();
        dom.value = value.toString();
        dom.className = 'mission-feature-content-value';
        dom.onchange = on_change;
        return dom;
    }

    _create_dom_input_range(value:number, on_change:any, min:number, max:number, step:number=null) {
        let dom = document.createElement("input");
        dom.type = "range";
        dom.min = min.toString();
        dom.max = max.toString();
        if(step == null)
            step = (max - min) / 100;
        dom.step = step.toString();
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
