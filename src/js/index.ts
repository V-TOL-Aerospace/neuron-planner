import { NeuronMap } from './map';
import { NeuronMapPoint } from './map_point';
import {NeuronAdvMode} from './adv_mode';

/// <reference types="webpack/module" />
console.log(import.meta.webpack); // without reference declared above, TypeScript will throw an error

let neuron_map = new NeuronMap('fp-map-interactive');
let neuron_adv_mode = new NeuronAdvMode('fp-map-advanced');

let load_app_data = async () => {
    neuron_map.reset();

    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition( async (location) => {
        neuron_map.set_location(new NeuronMapPoint(location.coords.latitude, location.coords.longitude));
    });
}

document.addEventListener('DOMContentLoaded', load_app_data, false);
