import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { NeuronIcons, neuron_get_icon } from "./interface_fontawesome";
// @ts-ignore
//import * as ContextMenu from "leaflet-contextmenu";
// import 'leaflet-contextmenu/dist/leaflet.contextmenu.css';\
// @ts-ignore
// import * as FileLoader from 'leaflet-filelayer'

// delete L.Icon.Default.prototype._getIconUrl;
//XXX: Fix the image paths loaded by leaflet

const default_icon_options = {
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
}
L.Icon.Default.mergeOptions(default_icon_options);

export function get_neuron_map_icon_html(class_name:string, name?:string) {
    return  `<div class="${class_name}-container"><img class="${class_name}-img" src="img/icons/poi-marker.png"/>` +
            `<span class="${class_name}-txt">${name}</span><div>`;
}

export function get_neuron_map_marker(class_name:string, name?:string) {
    if(!name) {
        return new L.Icon({
            ...L.Icon.Default.prototype.options,
            className: class_name
        });
    }

    return new L.DivIcon({
        className: class_name,
        html: get_neuron_map_icon_html(class_name, name),
    });
}

//require('leaflet/dist/images/layers.png')
//require('leaflet/dist/images/layers-2x.png')

//const cm = ContextMenu;
// const fl = FileLoader;

export { L };

export class LeafletContextMenuItem {
    text:string = "";
    icon:NeuronIcons;
    callback: (contextTarget:L.Marker) => void;

    /** Creates a LeafletContextMenuItem object for use when creating consistent popup context menus
     * @param  {string=} text Text to display on on the context menu item
     * @param  {NeuronIcons} icon Icon to display next to the context menu item
     * @param  {(contextTarget:L.Marker)=>null} callback Callback to run when the context menu item is clicked
     */
    constructor(text:string = "", icon:NeuronIcons = null, callback:(contextTarget:L.Marker) => void = null) {
        this.text = text;
        this.icon = icon;

        if(callback)
            this.callback = callback;
    }
}

/** Creates a consistent popup context menu for a leaflet marker
 * @param  {string} popup_title Title to put at the top of the popup
 * @param  {LeafletContextMenuItem[]} context_items List of context menu items to load in
 * @param  {L.Marker} marker_context Marker context to use when calling the context menu item callbacks (passed as argument)
 */
export function create_popup_context_dom(popup_title:string = "Marker", context_items:LeafletContextMenuItem[] = [], marker_context:L.Marker = null) {
    let dom = document.createElement("div");
    dom.className = 'neuron-marker-popup';

    let t = document.createElement("div");
    t.className = 'neuron-marker-popup-title';
    t.appendChild(document.createTextNode(popup_title));
    dom.appendChild(t);

    for(const i of context_items) {
        if(i) {
            let d = document.createElement("div");
            d.className = 'neuron-marker-popup-item';

            if(i.icon) {
                for(let ic of neuron_get_icon(i.icon)) {
                    ic.classList.add('neuron-marker-popup-icon');
                    d.appendChild(ic);
                }
                // let o = document.createElement('i');
                // o.className = `fas ${i.icon} neuron-marker-popup-icon`;
                // o.appendChild(document.createTextNode(i.text));
                // d.appendChild(o);
            }

            let s = document.createElement('span');
            s.className = 'neuron-marker-popup-item-text';
            s.appendChild(document.createTextNode(i.text));
            d.appendChild(s);

            if(i.callback) {
                d.onclick = function() {
                    return i.callback(marker_context);
                };
            }

            dom.appendChild(d);
        } else {
            let d = document.createElement("hr");
            d.className = 'neuron-marker-popup-break';
            dom.appendChild(d);
        }
    }

    return dom;
}
