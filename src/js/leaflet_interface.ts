import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

// delete L.Icon.Default.prototype._getIconUrl;
//XXX: Fix the image paths loaded by leaflet
L.Icon.Default.mergeOptions({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
});

//require('leaflet/dist/images/layers.png')
//require('leaflet/dist/images/layers-2x.png')

export class LeafletContextMenuContextItem {
    relatedTarget: any;
}

export { L };