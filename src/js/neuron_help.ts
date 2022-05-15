
export class NeuronHelp {
    #help_element_name:string;
    #help_element_ignore_subs:string[];

    #controller :AbortController;

    static key_hover_start:string = "mouseenter";
    static key_hover_end:string = "mouseleave";

    static class_highlight:string = "help-highlight";

    constructor(help_element_name:string, ignore_sub_keys:string[] = []) {
        this.#help_element_name = help_element_name;
        this.#controller = new AbortController();
        this.#help_element_ignore_subs = ignore_sub_keys;
    }

    #add_hover(trigger_element:HTMLElement, target_element:HTMLElement) {
        console.log('mouse entered');
        target_element.classList.add(NeuronHelp.class_highlight);
    }

    #remove_hover(trigger_element:HTMLElement, target_element:HTMLElement) {
        target_element.classList.remove(NeuronHelp.class_highlight);
        console.log('mouse exit');
    }

    #configure_linked_element_callbacks(trigger_element:HTMLElement) {
        if(trigger_element.id) {
            const target_element_ids = trigger_element.id.split(this.#help_element_name + '-');
            const target_element_id = target_element_ids.length > 1 ? target_element_ids[1] : null;
            let target_element = target_element_id ? document.getElementById(target_element_id) : null;

            if(target_element) {
                console.log(`Adding help hover display for ${trigger_element.id} -> ${target_element_id}`)

                trigger_element.addEventListener(NeuronHelp.key_hover_start, this.#add_hover.bind(this, trigger_element, target_element));
                trigger_element.addEventListener(NeuronHelp.key_hover_end, this.#remove_hover.bind(this, trigger_element, target_element));
            } else {
                throw new Error("Unable to identify target element with ID: " + target_element_id);
            }
        } else {
            throw new Error("Unable to link element without ID!");
        }
    }

    stop() {
        // this.#undo_listeners();
        this.#controller.abort();
    }

    reset() {
        this.stop();

        //Go through all the elements we can find and add in our hover callbacks
        const section_elements = Array.from(document.querySelectorAll("section"));
        //Filter to any elements that have out key plus some extra stuff that could be the ID we need
        let help_elements = section_elements.filter(
            x => x.id.includes(this.#help_element_name) && (x.id.length > this.#help_element_name.length)
        );

        //Iteratively filter to remove any unwanted sub-IDs
        for(const i of this.#help_element_ignore_subs)
            help_elements = help_elements.filter(x => !x.id.includes(`${this.#help_element_name}-${i}-`))

        //Add the hover function to remaining elements
        for(let e of help_elements)
            this.#configure_linked_element_callbacks(e);
    }
}
