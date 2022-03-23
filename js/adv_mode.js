class NeuronAdvMode {
    #element;
    
    constructor(element_name) {
        this.#element = document.getElementById(element_name);
        this.#element.style.display = 'none';
    }

	toggle_visible() {
        this.#element.style.display = this.#element.style.display == 'none' ? 'block' : 'none';
	}

	reset() {
	}
}
