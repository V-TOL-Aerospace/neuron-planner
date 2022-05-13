import {NeuronFeatureBase} from "./neuron_feature_base";
import {NeuronFeaturePoint} from "./neuron_feature_point";
import {NeuronFeaturePolygon} from "./neuron_feature_polygon";

import { NeuronPlanner } from "./neuron_planner";

import {NeuronInterfacePoint} from "./neuron_interfaces";
import { L } from "./leaflet_interface";
import { NeuronFeatureSurvey } from "./neuron_feature_survey";


export class NeuronMap {
    #planner:NeuronPlanner
    #map:L.Map;
    #map_layer_control:L.Control.Layers;
    #path:L.Polyline;
    #element_name:string;

    constructor(map_element_name:string, planner:NeuronPlanner) {
        this.#planner = planner;
        this.#map = null;
        this.#map_layer_control = null;
        this.#element_name = map_element_name;

        this.#planner.on_mission_change(this.update_path.bind(this));
    }

    get_leaflet_map() {
        return this.#map;
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
            l.altitude = this.#planner.get_last_item_altitude();
            const p = new NeuronFeaturePoint(this.#map, l);
            this.#planner.add_mission_item(p);
        // }
    }

    create_waypoint_in_view() {
        if(this.#map) {
            const b = this.#map.getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;

            const p = new NeuronFeaturePoint(this.#map, new NeuronInterfacePoint(
                sw.lat + dy / 2,
                sw.lng + dx / 2,
                this.#planner.get_last_item_altitude()
            ));
            this.#planner.add_mission_item(p);
        }
    }

    #get_poly_bounds_from_view() {
        let bounds:NeuronInterfacePoint[] = [];
        if(this.#map) {
            const b = this.#map.getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;

            bounds = [
                new NeuronInterfacePoint(sw.lat +     dy / 4, sw.lng +     dx / 4),
                new NeuronInterfacePoint(sw.lat + 3 * dy / 4, sw.lng +     dx / 4),
                new NeuronInterfacePoint(sw.lat + 3 * dy / 4, sw.lng + 3 * dx / 4),
                new NeuronInterfacePoint(sw.lat +     dy / 4, sw.lng + 3 * dx / 4)
            ];
        }

        return bounds;
    }

    create_polygon_in_view() {
        const bounds = this.#get_poly_bounds_from_view();

        if(this.#map && bounds.length) {
            const p = new NeuronFeaturePolygon(this.#map, bounds);
            p.set_planner(this.#planner);
            this.#planner.add_mission_item(p);
        }
    }

    create_survey_in_view() {
        const bounds = this.#get_poly_bounds_from_view();

        if(this.#map && bounds.length) {
            const p = new NeuronFeatureSurvey(this.#map, bounds);
            p.update_altitude(this.#planner.get_last_item_altitude());
            this.#planner.add_mission_item(p);
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
			const tiles_grey = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1Ijoia3llbW9ydG9uIiwiYSI6ImNsMzJneXAybDAzcWwzY3BhNjB4OHJqMnoifQ.fue3o8Y3wWH4y_Wi50oUXw'
			});
			const tiles_satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/satellite-v9',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: 'pk.eyJ1Ijoia3llbW9ydG9uIiwiYSI6ImNsMzJneXAybDAzcWwzY3BhNjB4OHJqMnoifQ.fue3o8Y3wWH4y_Wi50oUXw'
			});

            const layers = {
                "Street": tiles_grey,
                "Satellite": tiles_satellite
            };

			this.#map = L.map(this.#element_name, {
                doubleClickZoom: false,
                layers: [
                    tiles_grey,
                    tiles_satellite
                ]
            });
            this.#map_layer_control = L.control.layers(layers); //, otherLayers...
            this.#map_layer_control.addTo(this.#map);
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
