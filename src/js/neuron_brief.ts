import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronFeaturePoint } from "./neuron_feature_point";
import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronFeatureSurvey } from "./neuron_feature_survey";
import { NeuronInterfacePoint } from "./neuron_interfaces";

import { NeuronPlanner } from "./neuron_planner";
import { NeuronStatistics, NeuronStatisticsOptionKeys } from "./neuron_statistics";
import { flight_distance_from_coords, flight_time_from_duration } from "./neuron_tools_common";

// const zeroPad = (num:number, places:number) => String(num).padStart(places, '0');

export interface MissionBiref {
    type:string,
    description:string,
    components:string[],
    time_transit:string,
    time_duration:string
}

export class NeuronBrief {
    // static TYPE = 'NeuronBrief';
    // static VERSION = 'bb92b580-d319-11ec-8818-bfb4bc4aa250';

    #planner:NeuronPlanner;
    #stats:NeuronStatistics;
    #brief_element:HTMLElement;
    #brief_element_name:string;

    constructor(planner:NeuronPlanner, stats:NeuronStatistics, brief_element_name:string) {
        this.#planner = planner;
        this.#stats = stats;
        this.#brief_element = null;
        this.#brief_element_name = brief_element_name
    }

    reset() {
        this.#brief_element = document.getElementById(this.#brief_element_name);
    }

    update_mission_brief() {
        const brief = this.get_mission_brief();

        // var tab = window.open('about:blank', '_blank');
        // // tab.document.write(html); // where 'html' is a variable containing your HTML
        // tab.document.head.title = "Neuron Planner Mission Brief";
        // let title = tab.document.createElement('h1');
        // title.appendChild(tab.document.createTextNode("Mission Brief"));
        this.#brief_element.innerHTML = '';
        let title = document.createElement('h1');
        title.appendChild(document.createTextNode("Mission Brief"));
        this.#brief_element.appendChild(title);

        if(brief.length) {
            const headings = [
                "Step",
                "Type",
                "Description",
                "Features",
                "Transit",
                "Duration",
            ]

            let table = document.createElement('div');
            table.className = 'brief-table';
            for(const h of headings) {
                let th = document.createElement('div');
                th.className = 'brief-table-entry brief-table-entry-header';
                th.appendChild(document.createTextNode(h));
                table.appendChild(th);
            }

            // for(let j = 0; j < row_step; j++) {
            //     if(i + j >= rows.length)
            //         break;

            //     table.appendChild(rows[i + j]);
            // }


            let count = 0;
            for(const item of brief) {
                count++;
                //XXX: Check item.type for special cases of bold tallies
                const content = [
                    item.type ? count.toString() : "",
                    item.type,
                    item.description,
                    item.components.length ? item.components[0] : "---",
                    item.time_transit,
                    item.time_duration
                ]

                for(const h of content) {
                    let td = document.createElement('div');
                    td.appendChild(document.createTextNode(h));
                    td.className = 'brief-table-entry' + (item.type ? "" : " brief-table-entry-header");
                    table.appendChild(td);
                }

                //Handle case of multiple components (skipped if one or less)
                for(let i = 1; i<item.components.length; i++) {
                    const content = [
                        "",
                        "",
                        "",
                        item.components[i],
                        "",
                        ""
                    ]

                    for(const h of content) {
                        let td = document.createElement('div');
                        td.appendChild(document.createTextNode(h));
                        td.className = 'brief-table-entry';
                        table.appendChild(td);
                    }
                }
            }

            this.#brief_element.appendChild(table);
        } else {
            let td = document.createElement('div');
            td.appendChild(document.createTextNode("No mission plan available."));
            this.#brief_element.appendChild(td);
        }
    }

    get_mission_brief() {
        let brief:MissionBiref[] = [];
        const steps = this.#planner.get_mission_as_points();
        if(steps.length) {
            //Get the flight speed and lock it to at least 0.1m/s
            const s = this.#stats.get_option(NeuronStatisticsOptionKeys.MISSION_SPEED);
            const flight_speed = Math.max(s ? s : 0.0, 0.1);

            let time_takeoff = "---";
            let takeoff_point = steps[0];
            if(takeoff_point.altitude != 0) {
                takeoff_point = new NeuronInterfacePoint(steps[0].latitude, steps[0].longitude, 0.0);
                const takeoff_coords = [takeoff_point, steps[0]];
                const takeoff_distance = flight_distance_from_coords(takeoff_coords);
                time_takeoff = "+" + flight_time_from_duration(takeoff_distance/flight_speed);
            }

            let step0:MissionBiref = {
                type: NeuronFeaturePoint.NAME,
                description: "Take-off at location",
                components: [takeoff_point.toString()],
                time_duration: time_takeoff,
                time_transit: "---",
            };

            brief.push(step0);

            let point_last = null;
            for(const item of this.#planner.get_mission_items()) {
                let path = item.get_path_coords();

                let time_transit = "---";
                if(path.length && point_last) {
                    const transit_coords = [point_last, path[0]];
                    const transit_distance = flight_distance_from_coords(transit_coords);
                    time_transit = "+" + flight_time_from_duration(transit_distance/flight_speed);
                }

                let step:MissionBiref = null;
                //XXX: Ignore mission items with no points
                // if(item instanceof NeuronFeatureBase) {
                // } else
                if(item instanceof NeuronFeaturePoint) {
                    if(path.length) {
                        step = {
                            type: NeuronFeaturePoint.NAME,
                            description: "Fly to location",
                            components: path.map(x => x.toString()),
                            time_duration: "---",
                            time_transit: time_transit
                        };
                    }
                // } else if(item instanceof NeuronFeaturePolygon) {
                } else if(item instanceof NeuronFeatureSurvey) {
                    let corners = item.get_corners_as_points();
                    if(path.length) {

                        const step_distance = flight_distance_from_coords(path);
                        const step_duration = "+" + flight_time_from_duration(step_distance/flight_speed);
                        step = {
                            type: NeuronFeatureSurvey.NAME,
                            description: "Survey area with bounds",
                            components: corners.map(x => x.toString()),
                            time_duration: step_duration,
                            time_transit: time_transit,
                        };
                    }
                } else {
                    // console.warn("Unable to add mission item to brief");
                    // console.warn(item);
                }

                if(path.length)
                    point_last = path[path.length - 1];

                if(step)
                    brief.push(step);
            }

            let time_land = "---";
            let land_point = point_last;
            if(land_point && land_point.altitude != 0) {
                land_point = new NeuronInterfacePoint(point_last.latitude, point_last.longitude, 0.0);
                const land_coords = [point_last, land_point];
                const land_distance = flight_distance_from_coords(land_coords);
                time_land = "+" + flight_time_from_duration(land_distance/flight_speed);
            }

            let stepn:MissionBiref = {
                type: NeuronFeaturePoint.NAME,
                description: "Land at location",
                components: [land_point ? land_point.toString() : "---"],
                time_duration: time_land,
                time_transit: "---"
            };
            brief.push(stepn);

            const total_distance = flight_distance_from_coords(steps);
            const total_time = flight_time_from_duration(total_distance/flight_speed);

            let step_total_time:MissionBiref= {
                type: "",
                description: "",
                components: [""],
                time_transit: "Total:",
                time_duration: total_time
            };
            brief.push(step_total_time);
        }

        return brief;
    }
}