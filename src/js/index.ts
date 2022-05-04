import { NeuronMap } from './map';
import { NeuronMapPoint } from './map_point';
import {NeuronAdvMode} from './adv_mode';

import "../css/theme.css";
import "../css/index.css";

/// <reference types="webpack/module" />
console.log(`Loaded V-TOL Neuron, packed with Webpack v${import.meta.webpack}`); // without reference declared above, TypeScript will throw an error

declare global {
    interface Window {
        neuron_map: NeuronMap;
        neuron_adv_mode: NeuronAdvMode;
    }
}

window.neuron_map = new NeuronMap('fp-map-interactive');
window.neuron_adv_mode = new NeuronAdvMode('fp-map-advanced');

let load_app_data = async () => {
    window.neuron_map.reset();

    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition( async (location) => {
        window.neuron_map.set_location(new NeuronMapPoint(location.coords.latitude, location.coords.longitude));
    });
}

document.addEventListener('DOMContentLoaded', load_app_data, false);
