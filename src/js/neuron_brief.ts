// import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronFeatureWaypoint } from "./neuron_feature_waypoint";
// import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronFeatureSurvey } from "./neuron_feature_survey";
import { NeuronInterfacePoint } from "./neuron_interfaces";
import { NeuronOptions, NeuronOptionsNumber } from "./neuron_options";

import { MissionFeature, NeuronPlanner } from "./neuron_planner";
import { flight_distance_from_coords, flight_time_from_duration } from "./neuron_tools_common";
import { NeuronFeaturePoint } from "./neuron_feature_point";
import { NeuronFeaturePolygon } from "./neuron_feature_polygon";

//Defines an listing of key component fields to be displayed on the mission brief
export interface MissionBriefComponent {
    field1:string,
    field2:string,
    field3:string
}

//Defines an summary for a set of specific feature, or part of a specific mission feature
export interface MissionBriefItem {
    type:string,
    description:string,
    components:MissionBriefComponent[],
    time_transit:string,
    time_duration:string
}

//Defines an summary for a set of mission features in an itemized list
export interface MissionSummary {
    brief:MissionBriefItem[],
    total_duration:number,
    total_distance:number,
    total_images:number
}

export class NeuronBrief {
    #planner:NeuronPlanner;
    #brief_element:HTMLElement;
    #brief_element_name:string;

    /** Creates a NeuronBrief object that controls the generation of the mission brief functions of the app
     * @param  {NeuronPlanner} planner NeuronPlanner to use for accessing the current mission plan
     * @param  {string} brief_element_name Identifier for the document element to use when generating a brief
     */
    constructor(planner:NeuronPlanner, brief_element_name:string) {
        this.#planner = planner;
        this.#brief_element = null;
        this.#brief_element_name = brief_element_name
    }

    /** Resets the internal state of this class and prepares any relevant variables
     */
    reset() {
        this.#brief_element = document.getElementById(this.#brief_element_name);
    }

    /** Generates and updates the mission brief element in the document with the current mission brief details
     */
    update_mission_brief() {
        const mission_features = this.#planner.get_mission_items();
        const notables = this.get_mission_notables(mission_features);
        const summary = this.get_mission_summary(mission_features);

        this.#brief_element.innerHTML = '';
        let title = document.createElement('h1');
        title.appendChild(document.createTextNode("Mission Brief"));
        this.#brief_element.appendChild(title);


        let table = document.createElement('div');
        table.className = 'brief-table';

        if(notables.length) {
            let t1 = document.createElement('h2');
            t1.className = 'brief-table-title';
            t1.appendChild(document.createTextNode("Points of Interest"));
            table.appendChild(t1);

            const headings = [
                "Item",
                "Type",
                "Description",
                "Features",
                "",
                "",
                "",
                "",
            ]

            for(const h of headings) {
                let th = document.createElement('div');
                th.className = 'brief-table-header';
                th.appendChild(document.createTextNode(h));
                table.appendChild(th);
            }

            let count = 0;
            for(const item of notables) {
                count++;
                //XXX: Check item.type for special cases of bold tallies
                const content = [
                    item.type ? count.toString() : "",
                    item.type,
                    item.description,
                    item.components.length ? item.components[0].field1 : "—",
                    item.components.length ? item.components[0].field2 : "—",
                    item.components.length ? item.components[0].field3 : "—",
                    "",
                    ""
                ];

                const ind_values_start = 3;
                for(let j=0; j<content.length; j++) {
                    let td = document.createElement('div');
                    td.appendChild(document.createTextNode(content[j]));
                    if((j == 0) || (j >= ind_values_start))
                        td.classList.add('brief-table-entry-right');
                    if(!item.type)
                        td.classList.add('brief-table-entry-bold');
                    td.classList.add('brief-table-entry');
                    table.appendChild(td);
                }

                //Handle case of multiple components (skipped if one or less)
                for(let i = 1; i<item.components.length; i++) {
                    const content = [
                        "",
                        "",
                        "",
                        item.components[i].field1,
                        item.components[i].field2,
                        item.components[i].field3,
                        "",
                        ""
                    ]

                    for(const h of content) {
                        let td = document.createElement('div');
                        td.appendChild(document.createTextNode(h));
                        td.className = 'brief-table-entry-right brief-table-entry';
                        table.appendChild(td);
                    }
                }
            }
        }

        if(summary.brief.length) {
            let t2 = document.createElement('h2');
            t2.className = 'brief-table-title';
            t2.appendChild(document.createTextNode("Flight Plan"));
            table.appendChild(t2);

            const headings = [
                "Step",
                "Type",
                "Description",
                "Features",
                "",
                "",
                "Transit",
                "Duration",
            ]

            // let table = document.createElement('div');
            // table.className = 'brief-table';
            for(const h of headings) {
                let th = document.createElement('div');
                th.className = 'brief-table-header';
                th.appendChild(document.createTextNode(h));
                table.appendChild(th);
            }

            let count = 0;
            for(const item of summary.brief) {
                count++;
                //XXX: Check item.type for special cases of bold tallies
                const content = [
                    item.type ? count.toString() : "",
                    item.type,
                    item.description,
                    item.components.length ? item.components[0].field1 : "—",
                    item.components.length ? item.components[0].field2 : "—",
                    item.components.length ? item.components[0].field3 : "—",
                    item.time_transit,
                    item.time_duration
                ];

                const ind_values_start = 3;
                for(let j=0; j<content.length; j++) {
                    let td = document.createElement('div');
                    td.appendChild(document.createTextNode(content[j]));
                    if((j == 0) || (j >= ind_values_start))
                        td.classList.add('brief-table-entry-right');
                    if(!item.type)
                        td.classList.add('brief-table-entry-bold');
                    td.classList.add('brief-table-entry');
                    table.appendChild(td);
                }

                //Handle case of multiple components (skipped if one or less)
                for(let i = 1; i<item.components.length; i++) {
                    const content = [
                        "",
                        "",
                        "",
                        item.components[i].field1,
                        item.components[i].field2,
                        item.components[i].field3,
                        "",
                        ""
                    ]

                    for(const h of content) {
                        let td = document.createElement('div');
                        td.appendChild(document.createTextNode(h));
                        td.className = 'brief-table-entry-right brief-table-entry';
                        table.appendChild(td);
                    }
                }
            }
        }

        this.#brief_element.appendChild(table);

        if(!notables.length && !summary.brief.length){
            let td = document.createElement('div');
            td.appendChild(document.createTextNode("No mission brief available."));
            this.#brief_element.appendChild(td);
        }
    }

    /** Breaks down a NeuronInterfacePoint location into set field components for the mission summary
     * @param  {NeuronInterfacePoint} point Point to split into summary fields
     */
    static get_components_from_point(point:NeuronInterfacePoint) {
        return <MissionBriefComponent>{
            field1: point.toStringLatitude(),
            field2: point.toStringLongitude(),
            field3: point.toStringAltitude(),
        }
    }

    /** Generates a list of mission brief items for non-flyable mission features
     * @param  {MissionFeature[]} mission_features List of features to analyze.
     */
    get_mission_notables(mission_features:MissionFeature[]) {
        let notables:MissionBriefItem[] = [];

        for(const item of mission_features) {
            let step:MissionBriefItem = null;

            if(!item.is_flyable()) {
                if(item instanceof NeuronFeaturePoint) {
                    const point = item.get_point();
                    step = {
                        type: NeuronFeaturePoint.NAME,
                        description: (point && point.tag) ? point.tag : "Point of interest",
                        components: [point ? NeuronBrief.get_components_from_point(point) : {
                            field1: "",
                            field2: "",
                            field3: "",
                        }],
                        time_duration: "",
                        time_transit: ""
                    };
                // } else if(item instanceof NeuronFeaturePolygon) {
                } else if(item instanceof NeuronFeaturePolygon) {
                    const corners = item.get_corners_as_points();
                    const tag = item.get_label();
                    step = {
                        type: NeuronFeaturePolygon.NAME,
                        description: (tag) ? tag : "Area of interest",
                        components: corners.map(x => NeuronBrief.get_components_from_point(x)),
                        time_duration: "",
                        time_transit: "",
                    };
                }
            }

           if(step)
                notables.push(step);
        }

        return notables;
    }

    /** Generates a mission summary for a set of mission features
     * @param  {MissionFeature[]} mission_features List of features to analyze.
     */
    get_mission_summary(mission_features:MissionFeature[]) {
        let summary:MissionSummary = {
            brief: [],
            total_distance: 0,
            total_duration: 0,
            total_images: 0
        }
        const steps = this.#planner.get_mission_as_points();
        let takeoff_duration = 0;
        let land_duration = 0;
        let extra_mission_duration = 0;
        let takeoff_distance = 0;
        let land_distance = 0;

        if(steps.length) {
            //Get the flight speed and lock it to at least 0.1m/s
            const s = NeuronOptions.get_option_number(NeuronOptionsNumber.MISSION_SPEED);
            const flight_speed = Math.max(s ? s : 0.0, 0.1);

            let point_last = null;
            // let time_takeoff = "—";
            let takeoff_point = steps[0];
            if(takeoff_point.altitude != 0) {
                takeoff_point = new NeuronInterfacePoint(steps[0].latitude, steps[0].longitude, 0.0);
                const takeoff_coords = [takeoff_point, steps[0]];
                takeoff_distance = flight_distance_from_coords(takeoff_coords);
                takeoff_duration = takeoff_distance/flight_speed;
                point_last = takeoff_point;
                // time_takeoff = "+" + flight_time_from_duration(takeoff_duration);
            }

            let step0:MissionBriefItem = {
                type: NeuronFeatureWaypoint.NAME,
                description: "Take-off at location",
                components: [NeuronBrief.get_components_from_point(takeoff_point)],
                time_duration: "—",
                time_transit: "—",
            };

            summary.brief.push(step0);

            for(const item of mission_features) {
                let path = item.get_path_coords();

                let time_transit = "—";
                if(path.length && point_last) {
                    const transit_coords = [point_last, path[0]];
                    const transit_distance = flight_distance_from_coords(transit_coords);
                    time_transit = "+" + flight_time_from_duration(transit_distance/flight_speed);
                }

                let step:MissionBriefItem = null;
                if(item.is_flyable()) {
                    if(item instanceof NeuronFeatureWaypoint) {
                        const wait = item.get_wait_duration();
                        extra_mission_duration += wait;
                        const image_count = item.get_image_count();
                        step = {
                            type: NeuronFeatureWaypoint.NAME,
                            description: "Fly to location" + (image_count ? ' and capture image' : ''),
                            components: path.map(x => NeuronBrief.get_components_from_point(x)),
                            time_duration: wait > 0 ? "+" + flight_time_from_duration(wait) : "—",
                            time_transit: time_transit
                        };
                        summary.total_images += image_count;
                    } else if(item instanceof NeuronFeatureSurvey) {
                        let corners = item.get_corners_as_points();
                        const step_distance = flight_distance_from_coords(path);
                        const step_duration = "+" + flight_time_from_duration(step_distance/flight_speed);
                        step = {
                            type: NeuronFeatureSurvey.NAME,
                            description: "Survey area with bounds",
                            components: corners.map(x => NeuronBrief.get_components_from_point(x)),
                            time_duration: step_duration,
                            time_transit: time_transit,
                        };
                        summary.total_images += item.get_image_count();
                    }
                }

                if(path.length)
                    point_last = path[path.length - 1];

                if(step)
                summary.brief.push(step);
            }

            let time_land = "—";
            let land_point = point_last;
            let land_component:MissionBriefComponent = {
                field1: "—",
                field2: "—",
                field3: "—"
            };
            if(land_point && land_point.altitude != 0) {
                land_point = new NeuronInterfacePoint(point_last.latitude, point_last.longitude, 0.0);
                land_component = NeuronBrief.get_components_from_point(land_point);
                const land_coords = [point_last, land_point];
                land_distance = flight_distance_from_coords(land_coords);
                land_duration = land_distance/flight_speed;
                time_land = "+" + flight_time_from_duration(land_duration);
            }

            let step_n:MissionBriefItem = {
                type: NeuronFeatureWaypoint.NAME,
                description: "Land at location",
                components: [land_component],
                time_duration: time_land,
                time_transit: "—"
            };
            summary.brief.push(step_n);

            summary.total_distance = flight_distance_from_coords(steps) + takeoff_distance + land_distance;
            const total_transit_duration = summary.total_distance/flight_speed;
            summary.total_duration = total_transit_duration + takeoff_duration + land_duration + extra_mission_duration;
            const total_time = flight_time_from_duration(summary.total_duration);

            let step_total_time:MissionBriefItem= {
                type: "",
                description: "",
                components: [{
                    field1: "",
                    field2: "",
                    field3: "",
                }],
                time_transit: "Duration:",
                time_duration: total_time,
            };
            summary.brief.push(step_total_time);

            let step_total_distance:MissionBriefItem = {
                type: "",
                description: "",
                components: [{
                    field1: "",
                    field2: "",
                    field3: "",
                }],
                time_transit: "Distance:",
                time_duration: `${(summary.total_distance / 1000).toFixed(2)}km`,
            };
            summary.brief.push(step_total_distance);

            let step_total_images:MissionBriefItem = {
                type: "",
                description: "",
                components: [{
                    field1: "",
                    field2: "",
                    field3: "",
                }],
                time_transit: "Images:",
                time_duration: summary.total_images > 0 ? summary.total_images.toString() : "—",
            };
            summary.brief.push(step_total_images);
        }

        return summary;
    }
}
