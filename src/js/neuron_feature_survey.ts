import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronInterfacePoint } from "./neuron_interfaces";
import { CreateGrid, StartPosition } from "./neuron_tools_survey"
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export class NeuronFeatureSurvey extends NeuronFeaturePolygon {
    #waypoints:L.Marker[];

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        super(map, corners, on_remove, on_change);
        this.#waypoints = [];
        this._set_on_change_internal(this.update_survey.bind(this));
        this.update_survey();
    }

    #add_waypoint(point:NeuronInterfacePoint, name:string = "Survey Waypoint") {
        let m = L.marker([point.latitude, point.longitude], {
            // draggable: true,
            autoPan: true,
        })

        // const menu_items = [
        //     new LeafletContextMenuItem("Move forward", "fa-arrow-left", this.move_corner_forwards.bind(this)),
        //     new LeafletContextMenuItem("Move backward", "fa-arrow-right", this.move_corner_backwards.bind(this)),
        //     null,
        //     new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_corner.bind(this)),
        // ]
        m.bindPopup(create_popup_context_dom(name, [], m));


        //TODO: review: Could also use "dragend"?
        // m.on("drag", this.update_polygon.bind(this));
        // m.on("click", this.#select_corner_by_event.bind(this));
        // m.on("dblclick", this.#remove_point_by_event.bind(this));

        this.#waypoints.push(m);
        this._add_feature_to_map(m);
    }

    update_survey() {
        this.#clean_waypoints();

        //TODO: Calculate spacing or? distance from sidelap
        const altitude = 100;
        const distance = 20;
        const spacing = 20;
        const angle = 0.0;
        const overshoot1 = 70.0;
        const overshoot2 = 70.0;
        const startpos = StartPosition.TopLeft;
        const minLaneSeparation = 1;
        const leadin = 0.0;

        const waypoints = CreateGrid(
            this.get_corners_as_points(),
            altitude,
            distance,
            spacing,
            angle,
            overshoot1,
            overshoot2,
            startpos,
            minLaneSeparation,
            leadin
        )

        for(let i = 0; i < waypoints.length; i++) {
            // const p = polygon[i];
            this.#add_waypoint(waypoints[i], `Survey Waypoint (#${i})`);
        }
    }

    #clean_waypoints() {
        for(const wp of this.#waypoints) {
            wp.remove();
        }
        this.#waypoints = [];
    }

    remove_feature() {
        this.#clean_waypoints();

        super.remove_feature();
    }

    get_path_coords() {
        return this.#waypoints.map(x => NeuronInterfacePoint.from_leaflet(x.getLatLng()));
    }
}
