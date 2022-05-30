import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';
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

export function get_neuron_icon(class_name:string) {
    return new L.Icon({
        ...L.Icon.Default.prototype.options,
        className: class_name
    });
}

//require('leaflet/dist/images/layers.png')
//require('leaflet/dist/images/layers-2x.png')

//const cm = ContextMenu;
// const fl = FileLoader;

export { L };

export class LeafletContextMenuItem {
    text:string = "";
    icon:string = "";
    callback: (contextTarget:L.Marker) => null;

    constructor(text:string = "", fa_icon:string = "", callback:(contextTarget:L.Marker) => null = null) {
        this.text = text;
        this.icon = fa_icon;

        if(callback)
            this.callback = callback;
    }
}

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
                let o = document.createElement('i');
                o.className = `fas ${i.icon} neuron-marker-popup-icon`;
                o.appendChild(document.createTextNode(i.text));
                d.appendChild(o);
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
