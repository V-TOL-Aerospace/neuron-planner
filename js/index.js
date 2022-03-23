//import {NeuronMap} from './map.js';

window.neuron_map = new NeuronMap('fp-map-interactive');
window.neuron_adv_mode = new NeuronAdvMode('fp-map-advanced');

window.load_app_data = async () => {
    window.neuron_map.reset(true);

    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition( async (location) => {
        window.neuron_map.set_location(new NeuronMapPoint(location.coords.latitude, location.coords.longitude));
    });
}

document.addEventListener('DOMContentLoaded', load_app_data, false);