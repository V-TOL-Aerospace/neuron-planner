import { NeuronOptions } from './neuron_options';
import { app_elements_ignore_help_subs, app_element_prefix_help, InterfaceAppElements, InterfaceSummaryTabName, NeuronInterfacePoint } from './neuron_interfaces';
import { NeuronPlanner } from './neuron_planner';
import { NeuronMap } from './neuron_map';
import { NeuronBrief } from './neuron_brief';
import { NeuronStatistics } from './neuron_statistics';
import { NeuronHelp } from './neuron_help';
import { mm_to_px } from './neuron_tools_common';
import { neuron_load_dom_icons } from './interface_fontawesome'
import { get_supported_kmx_types } from './neuron_tools_kml'
import { NeuronSettings } from './neuron_settings';

import "../css/index.css";

declare global {
    interface Window {
        neuron_planner: NeuronPlanner;
        neuron_map: NeuronMap;
        neuron_brief: NeuronBrief;
        neuron_statistics: NeuronStatistics;
        neuron_settings:NeuronSettings;
        neuron_help: NeuronHelp;
        neuron_set_panel_view: (panel_name:InterfaceSummaryTabName) => void;
    }
}

console.log(`--== Neuron Planner by V-TOL Aerospace ==--`);

//Initialize all of our options
NeuronOptions.init();

//Print-specific variables to store for later
const print_size_with_margin_mm = {
    width: 190,   /* 210 */
    height: 277/2,   /* 297 */
}
const print_size_with_margin_px = {
    width: mm_to_px(print_size_with_margin_mm.width),
    height: mm_to_px(print_size_with_margin_mm.height)
}

//Application helpers
window.neuron_set_panel_view = (tab:InterfaceSummaryTabName) => {
    let el = <HTMLInputElement>document.getElementById(tab);
    if(el)
        el.checked = true;
}

//Application variables
window.neuron_planner = new NeuronPlanner(InterfaceAppElements.PLAN);
window.neuron_map = new NeuronMap(InterfaceAppElements.MAP, InterfaceAppElements.HELP, window.neuron_planner);
window.neuron_brief = new NeuronBrief(window.neuron_planner, InterfaceAppElements.BRIEF);
window.neuron_statistics = new NeuronStatistics(window.neuron_planner, window.neuron_brief, InterfaceAppElements.STATS);
window.neuron_settings = new NeuronSettings(InterfaceAppElements.OPTIONS);
window.neuron_help = new NeuronHelp(app_element_prefix_help, app_elements_ignore_help_subs);

/** Toggles the initial application loading splash screen
 * @param  {boolean} show Sets the application to show the loader splash screen if true.
 */
function show_loader(show:boolean) {
    const el_loader = document.getElementById(InterfaceAppElements.LOADER);
    const el_app = document.getElementById(InterfaceAppElements.APP);
    el_loader.style.display = show ? 'flex' : 'none';
    el_app.style.display = show ? 'none' : 'flex';
}

/**Handles the logic for dragging over files onto the application/map screen. This prevents the browser from doing something weird during drag.
 * @param  {DragEvent} event event that triggered the drag-over
 */
function dragOverHandler(event:DragEvent) {
    // console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    event.preventDefault();
}

let _dragdrop_counter = 0;
/**Handles the logic for dragging over files onto the application/map screen. This reveals the drag-drop text overlay.
 * @param  {DragEvent} event event that triggered the drag-over
 */
 function dragEnterHandler(event:DragEvent) {
    let el = document.getElementById(InterfaceAppElements.DRAGDROP);
    el.style.display = 'flex';
    _dragdrop_counter++;
}

/**Handles the logic for dragging over files onto the application/map screen. This hides the drag-drop text overlay.
 * @param  {DragEvent} event event that triggered the drag-over
 */
 function dragLeaveHandler(event:DragEvent) {
    let el = document.getElementById(InterfaceAppElements.DRAGDROP);
    _dragdrop_counter--;
    if(_dragdrop_counter <= 0)
        el.style.display = 'none';
}

/** Handles the logic for dragging and dropping files onto the application/map screen. This allows drag-drop import of mission and KMx files
 * @param  {DragEvent} event event that triggered the drag-drop
 */
function dragDropHandler(event:DragEvent) {
    event.preventDefault();

    let el = document.getElementById(InterfaceAppElements.DRAGDROP);
    _dragdrop_counter--;
    if(_dragdrop_counter <= 0)
        el.style.display = 'none';

    const kmx_types = get_supported_kmx_types();
    for(const file of event.dataTransfer.items) {
        if(file.type == 'application/json') {
            window.neuron_planner.load_mission_file(file.getAsFile());
        } else if (kmx_types.includes(file.type)) {
            window.neuron_planner.import_features_from_kmx(file.getAsFile());
        }
    }
}

/** Performs the initial load and setup of the application. This should be run after the document has been loaded.
 */
async function load_app_data() {
    //Do the FA switch-out for our DOM icons
    neuron_load_dom_icons();

    //Need to do this next, because many of the following need to known their final size on reset
    show_loader(false);

    window.neuron_planner.reset();
    window.neuron_map.reset();
    window.neuron_statistics.reset();
    window.neuron_settings.reset();
    window.neuron_brief.reset();
    window.neuron_help.reset();

    window.neuron_planner.set_map(window.neuron_map);
    window.neuron_planner.on_mission_change(window.neuron_statistics.update_statistics.bind(window.neuron_statistics));

    let el_app = document.getElementById(InterfaceAppElements.APP);
    el_app.ondrop = dragDropHandler;
    el_app.ondragover = dragOverHandler;
    el_app.ondragenter = dragEnterHandler;
    el_app.ondragleave = dragLeaveHandler;

    //Update the map location if we can get the user's current location
    navigator.geolocation.getCurrentPosition( async (location) => {
        window.neuron_map.set_location(new NeuronInterfacePoint(location.coords.latitude, location.coords.longitude));
    });
}

/** Prepares the page layout to take a print-friendly form
 * @param  {Event} event (unused)
 */
function handle_before_print(event:Event) {
    //Turn off the map tools
    window.neuron_map.toggle_map_tools(false);
    //Turn off the map tools
    window.neuron_map.show_map_help(false);
    //Set the size of the map, and reset it to fit the new size
    const map = document.getElementById(InterfaceAppElements.MAP);
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
}

/** Prepares the page layout to take the normal application form
 * @param  {Event} event (unused)
 */
function handle_after_print(event:Event) {
    //Turn off the map tools
    window.neuron_map.toggle_map_tools(true);
    //Set the size of the map, and reset it to fit the new size
    const map = document.getElementById(InterfaceAppElements.MAP);
    map.style.width = `auto`;
    map.style.height = `auto`;
    window.neuron_map.reset();
    //Position all visible elements on the map
    // window.neuron_planner.fit_mission_on_map();
}

document.addEventListener('DOMContentLoaded', load_app_data, false);
window.addEventListener('beforeprint', handle_before_print);
window.addEventListener('afterprint', handle_after_print);
