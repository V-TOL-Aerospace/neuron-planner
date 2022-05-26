import { NeuronOptions } from './neuron_options';
import { NeuronInterfacePoint } from './neuron_interfaces';
import { NeuronPlanner } from './neuron_planner';
import { NeuronMap } from './neuron_map';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import "../css/theme.css";  //XXX: Load this first so other definitions can use it
import "../css/index.css";
import "../css/map.css";
import "../css/plan.css";
import "../css/responsive.css"; //XXX: Load this last so it gets applied after all other definitions

import { NeuronBrief } from './neuron_brief';
import { mm_to_px } from './neuron_tools_common';
import { NeuronStatistics } from './neuron_statistics';
import { NeuronHelp } from './neuron_help';

/// <reference types="webpack/module" />
console.log(`Loaded V-TOL Neuron, packed with Webpack v${import.meta.webpack}`); // without reference declared above, TypeScript will throw an error

//Initialize all of our options
NeuronOptions.init();

declare global {
    interface Window {
        neuron_planner: NeuronPlanner;
        neuron_map: NeuronMap;
        neuron_brief: NeuronBrief;
        neuron_statistics: NeuronStatistics;
        neuron_help: NeuronHelp;
    }
}

const element_name_plan = 'fp-plan';
const element_prefix_stats = 'fp-stats';
const element_name_map = 'fp-map-interactive';
const element_name_help = 'fp-map-help';
const element_name_brief = 'print-section';
const element_prefix_help = 'help';
const elements_ignore_help = [
    'fp-mission'
]

const print_size_with_margin_mm = {
    width: 190,   /* 210 */
    height: 277/2,   /* 297 */
}
const print_size_with_margin_px = {
    width: mm_to_px(print_size_with_margin_mm.width),
    height: mm_to_px(print_size_with_margin_mm.height)
}

window.neuron_planner = new NeuronPlanner(element_name_plan);
window.neuron_map = new NeuronMap(element_name_map, element_name_help, window.neuron_planner);
window.neuron_statistics = new NeuronStatistics(window.neuron_planner, element_prefix_stats);
window.neuron_brief = new NeuronBrief(window.neuron_planner, element_name_brief);
window.neuron_help = new NeuronHelp(element_prefix_help, elements_ignore_help);

let load_app_data = async () => {
    window.neuron_planner.reset();
    window.neuron_map.reset();
    window.neuron_statistics.reset();
    window.neuron_brief.reset();
    window.neuron_help.reset();

    window.neuron_planner.set_map(window.neuron_map);
    window.neuron_planner.on_mission_change(window.neuron_statistics.update_statistics.bind(window.neuron_statistics));

    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition( async (location) => {
        window.neuron_map.set_location(new NeuronInterfacePoint(location.coords.latitude, location.coords.longitude));
    });


}

document.addEventListener('DOMContentLoaded', load_app_data, false);
window.addEventListener('beforeprint', (event) => {
    //Turn off the map tools
    window.neuron_map.toggle_map_tools(false);
    //Turn off the map tools
    window.neuron_map.show_map_help(false);
    //Set the size of the map, and reset it to fit the new size
    const map = document.getElementById(element_name_map);
    // map.style.width = `${print_size_with_margin_mm.width}mm`;
    // map.style.height = `${print_size_with_margin_mm.height}mm`;
    // window.neuron_map.reset();
    //Position all visible elements on the map
    const side_pad = 50;

    let pl = side_pad;
    let pr = side_pad;
    if(print_size_with_margin_px.width > map.offsetWidth) {
        const diff = print_size_with_margin_px.width - map.offsetWidth;
        pr = -diff + side_pad;
    } else {
        pr = side_pad + (map.offsetWidth - print_size_with_margin_px.width);
    }

    let pt = side_pad;
    let pb = side_pad;
    if(print_size_with_margin_px.height > map.offsetHeight) {
        const diff = print_size_with_margin_px.height - map.offsetHeight;
        pb = -diff + side_pad;
    } else {
        pb = side_pad + (map.offsetHeight - print_size_with_margin_px.height);
    }

    window.neuron_planner.fit_mission_on_map(true, pl, pt, pr, pb);

    //Generate the brief
    window.neuron_brief.update_mission_brief();
});

window.addEventListener('afterprint', (event) => {
    //Turn off the map tools
    window.neuron_map.toggle_map_tools(true);
    //Set the size of the map, and reset it to fit the new size
    const map = document.getElementById(element_name_map);
    map.style.width = `auto`;
    map.style.height = `auto`;
    window.neuron_map.reset();
    //Position all visible elements on the map
    // window.neuron_planner.fit_mission_on_map();
});
