import { NeuronMap } from './neuron_map';
import { NeuronInterfacePoint } from './neuron_interfaces';
import {NeuronAdvMode} from './adv_mode';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import "../css/theme.css";
import "../css/index.css";
import "../css/map.css";
import { NeuronPlanner } from './neuron_planner';

/// <reference types="webpack/module" />
console.log(`Loaded V-TOL Neuron, packed with Webpack v${import.meta.webpack}`); // without reference declared above, TypeScript will throw an error

declare global {
    interface Window {
        neuron_planner: NeuronPlanner;
        neuron_map: NeuronMap;
        neuron_adv_mode: NeuronAdvMode;
    }
}

window.neuron_planner = new NeuronPlanner('fp-plan', 'fp-stats');
window.neuron_map = new NeuronMap('fp-map-interactive', window.neuron_planner);
window.neuron_adv_mode = new NeuronAdvMode('fp-map-advanced');

let load_app_data = async () => {
    window.neuron_planner.reset();
    window.neuron_map.reset();

    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition( async (location) => {
        window.neuron_map.set_location(new NeuronInterfacePoint(location.coords.latitude, location.coords.longitude));
    });
}

document.addEventListener('DOMContentLoaded', load_app_data, false);
