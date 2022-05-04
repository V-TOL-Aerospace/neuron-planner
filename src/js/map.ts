import {NeuronMapPolygon} from "./map_polygon";
import {NeuronMapPoint} from "./map_point";

import * as L from "leaflet";
import 'leaflet/dist/leaflet.css';

export class NeuronMap {
    #map:L.Map;
    #element_name:string;
    #map_items:NeuronMapPolygon[];

    constructor(map_element_name:string) {
        this.#map = null;
        this.#element_name = map_element_name;
        this.#map_items = []
    }

    set_location(location:NeuronMapPoint, zoom=13) {
        if(this.#map) {
            this.#map.setView([location.latitude, location.longitude], zoom);
        }
    }

    zoom_to(feature_group:L.FeatureGroup) {
        if(this.#map) {
            this.#map.fitBounds(feature_group.getBounds());
        }
    }

    add_feature(feature:L.Layer) {
        if(this.#map) {
            feature.addTo(this.#map);
        }
    }

    add_features(features:L.Layer[]) {
        for(const f of features)
            this.add_feature(f);
    }

    create_polygon_in_view() {
        if(this.#map) {
            const b = this.#map.getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;

            const l = [
                new NeuronMapPoint(sw.lat +     dy / 4, sw.lng +     dx / 4),
                new NeuronMapPoint(sw.lat + 3 * dy / 4, sw.lng +     dx / 4),
                new NeuronMapPoint(sw.lat + 3 * dy / 4, sw.lng + 3 * dx / 4),
                new NeuronMapPoint(sw.lat +     dy / 4, sw.lng + 3 * dx / 4)
            ];
            const p = new NeuronMapPolygon(this.#map, l);
            this.#map_items.push(p);
            // const features = p.get_features();
            // const group = new this.#leaflet.featureGroup(features);

            // this.add_features(features);
            //this.zoom_to(group);
        }
    }

	reset() {
		if(!this.#map) {
			this.#map = L.map(this.#element_name);
			const ref = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1Ijoia3llbW9ydG9uIiwiYSI6ImNreXBlczMxaTA5angyem55cnRwZno1enMifQ.ddD6u3a-KBq39DYMi8o_hw'
			});
			ref.addTo(this.#map);	//TODO: Lock this token to the generate a new token for Neuron

            //Set an initial zoom
            this.set_location(new NeuronMapPoint(-27.4771033, 153.0301422), 11);
		} else {
			//Already have a map, so just force a re-render
			this.#map.invalidateSize();
		}
	}
}
