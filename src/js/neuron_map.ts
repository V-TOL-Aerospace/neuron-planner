import {NeuronFeatureBase} from "./neuron_feature_base";
import {NeuronFeaturePoint} from "./neuron_feature_point";
import {NeuronFeaturePolygon} from "./neuron_feature_polygon";

import { NeuronPlanner } from "./neuron_planner";

import {NeuronInterfacePoint} from "./neuron_interfaces";
import { L } from "./leaflet_interface";
import { NeuronFeatureSurvey } from "./neuron_feature_survey";

interface NeuronMapLayers {
    [id: string]: L.TileLayer;
}

export class NeuronMap {
    #planner:NeuronPlanner
    #map:L.Map;
    #map_layer_control:L.Control.Layers;
    #map_zoom_control:L.Control.Zoom;
    #path:L.Polyline;
    #map_element_name:string;
    #help_element_name:string;
    #map_element:HTMLElement;
    #help_element:HTMLElement;
    #map_layers:NeuronMapLayers;

    constructor(map_element_name:string, help_element_name:string, planner:NeuronPlanner) {
        this.#planner = planner;
        this.#map = null;
        this.#map_layer_control = null;
        this.#map_zoom_control = null;
        this.#map_layers = null;
        this.#map_element = null;
        this.#help_element = null;
        this.#map_element_name = map_element_name;
        this.#help_element_name = help_element_name;

        this.#planner.on_mission_change(this.update_path.bind(this));
    }

    show_map_help(show:boolean) {

        if(show) {
            this.#map_element.style.display = 'none';
            this.#help_element.style.display = 'block';
        } else {
            this.#map_element.style.display = 'block';
            this.#help_element.style.display = 'none';
            this.reset();
        }
    }

    toggle_map_help() {
        this.show_map_help(this.#map_element.style.display != 'none');
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
            const path_points = this.#planner.get_mission_as_points().map(x => x.to_leaflet());
            this.#path.setLatLngs(path_points);
        }
    }

    toggle_map_tools(show:boolean) {

        if(this.#map) {

            if(!this.#map_zoom_control) {
                this.#map.zoomControl;
            }

            if(!show && this.#map_zoom_control) {
                this.#map_zoom_control.remove();
                this.#map_zoom_control = null;
            } else if(!this.#map_zoom_control) {
                this.#map_zoom_control = L.control.zoom();
                this.#map_zoom_control.addTo(this.#map);
            }

            if(!show && this.#map_layer_control) {
                this.#map_layer_control.remove();
                this.#map_layer_control = null;
            } else if(!this.#map_layer_control) {
                this.#map_layer_control = L.control.layers(this.#map_layers); //, otherLayers...
                this.#map_layer_control.addTo(this.#map);
            }
        }
    }

	reset() {
        this.#map_element = document.getElementById(this.#map_element_name);
        this.#help_element = document.getElementById(this.#help_element_name);

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

            this.#map_layers = {
                Street: tiles_grey,
                Satellite: tiles_satellite
            };

			this.#map = L.map(this.#map_element_name, {
                doubleClickZoom: false,
                layers: [
                    tiles_grey,
                    tiles_satellite
                ],
                zoomControl: false
            });
            this.toggle_map_tools(true);
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
