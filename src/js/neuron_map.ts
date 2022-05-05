import {NeuronFeatureBase} from "./neuron_feature_base";
import {NeuronFeaturePoint} from "./neuron_feature_point";
import {NeuronFeaturePolygon} from "./neuron_feature_polygon";

import { NeuronPlanner } from "./neuron_planner";

import {NeuronInterfacePoint} from "./neuron_interface_point";
import { L } from "./leaflet_interface";


export class NeuronMap {
    #planner:NeuronPlanner
    #map:L.Map;
    #path:L.Polyline;
    #element_name:string;

    constructor(map_element_name:string, planner:NeuronPlanner) {
        this.#planner = planner;
        this.#map = null;
        this.#element_name = map_element_name;

        this.#planner.on_mission_change(this.update_path.bind(this));
    }

    set_location(location:NeuronInterfacePoint, zoom=13) {
        if(this.#map) {
            this.#map.setView(location.to_leaflet(), zoom);
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

    on_double_click(event:L.LeafletMouseEvent) {
        //Click modifier handlers
        //CTRL+Click: Add new waypoint
        // if(event.originalEvent.ctrlKey) {
            //...
        // } else {
            const l = NeuronInterfacePoint.from_leaflet(event.latlng);
            const p = new NeuronFeaturePoint(this.#map, l);
            this.#planner.add_mission_item(p);
        // }
    }

    create_polygon_in_view() {
        if(this.#map) {
            const b = this.#map.getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;

            const l = [
                new NeuronInterfacePoint(sw.lat +     dy / 4, sw.lng +     dx / 4),
                new NeuronInterfacePoint(sw.lat + 3 * dy / 4, sw.lng +     dx / 4),
                new NeuronInterfacePoint(sw.lat + 3 * dy / 4, sw.lng + 3 * dx / 4),
                new NeuronInterfacePoint(sw.lat +     dy / 4, sw.lng + 3 * dx / 4)
            ];
            const p = new NeuronFeaturePolygon(this.#map, l);
            this.#planner.add_mission_item(p);
            // const features = p.get_features();
            // const group = new this.#leaflet.featureGroup(features);

            // this.add_features(features);
            //this.zoom_to(group);
        }
    }

    update_path() {
        if(this.#path) {
            const path_points = this.#planner.get_mission_coords().map(x => x.to_leaflet());
            this.#path.setLatLngs(path_points);
        }
    }

	reset() {
		if(!this.#map) {
			this.#map = L.map(this.#element_name, {
                doubleClickZoom: false,
            });
			const ref = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				//attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1Ijoia3llbW9ydG9uIiwiYSI6ImNreXBlczMxaTA5angyem55cnRwZno1enMifQ.ddD6u3a-KBq39DYMi8o_hw'
			});
			ref.addTo(this.#map);	//TODO: Lock this token to the generate a new token for Neuron
            this.#map.on("dblclick", this.on_double_click.bind(this));

            //Set an initial zoom
            this.set_location(new NeuronInterfacePoint(-27.4771033, 153.0301422), 11);
		} else {
			//Already have a map, so just force a re-render
			this.#map.invalidateSize();
		}

        if(!this.#path) {
            this.#path = L.polyline([], {color: 'orange'}).addTo(this.#map);
        }
	}
}
