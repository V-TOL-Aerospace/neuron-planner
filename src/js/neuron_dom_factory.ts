import { NeuronUID } from "./neuron_tools_common";

export class NeuronDOMFactory {
    #prefix:string;

    constructor (css_prefix:string) {
        this.#prefix = css_prefix;
    }

    _create_dom_label(text:string, input:(HTMLInputElement|HTMLSelectElement|HTMLButtonElement|HTMLOutputElement), description:string = null, hide_label:boolean=false) {
        // let dom = document.createElement("div");
        // dom.className = `${this.#prefix}-content-item';

        if (!input.id)
            input.id = NeuronUID();

        let l = document.createElement("label");
        l.className = `${this.#prefix}-content-label`;
        l.htmlFor = input.id;
        if(description)
            l.title = description;
        if(hide_label)
            l.style.visibility = 'hidden';

        l.appendChild(document.createTextNode(text));

        // if(label_first) {
        //     dom.appendChild(l);
        //     dom.appendChild(input);
        // } else {
        //     dom.appendChild(input);
        //     dom.appendChild(l);
        // }
        return l;
    }

    _create_dom_output(value:string=null) {
        let dom = document.createElement("output");
        dom.className = `${this.#prefix}-content-value ${this.#prefix}-content-value-right`;
        if(value != null)
            dom.value = value;
        return dom;
    }

    _create_dom_input_file(on_change:any, accepts:string = null) {
        let dom = document.createElement("input");
        dom.type = "file";
        if(accepts != null)
            dom.accept = accepts;
        dom.className = `${this.#prefix}-content-value`;
        dom.onchange = on_change;
        return dom;
    }

    _create_dom_input_button(text:string, on_change:any) {
        let dom = document.createElement("button");
        dom.className = `${this.#prefix}-content-value ${this.#prefix}-content-value-center`;
        dom.onclick = on_change;
        dom.appendChild(document.createTextNode(text));
        return dom;
    }

    _create_dom_input_number(value:number, on_change:any, min:number = null, max:number = null, step:number=null) {
        let dom = document.createElement("input");
        dom.type = "number";
        if(min != null)
            dom.min = min.toString();
        if(max != null)
            dom.max = max.toString();
        if(step != null)
            dom.step = step.toString();
        dom.value = value.toString();
        dom.className = `${this.#prefix}-content-value ${this.#prefix}-content-value-right`;
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
        dom.className = `${this.#prefix}-content-value ${this.#prefix}-content-value-right`;
        dom.onchange = on_change;
        return dom;
    }

    _create_dom_input_checkbox(checked:boolean, on_change:any) {
        let dom = document.createElement("input");
        dom.type = "checkbox";
        dom.checked = checked;
        dom.className = `${this.#prefix}-content-value ${this.#prefix}-content-value-right`;
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
        dom.className = `${this.#prefix}-content-value`;
        dom.onchange = on_change;
        return dom;
    }
}