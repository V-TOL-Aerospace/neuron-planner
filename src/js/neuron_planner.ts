import { NeuronFeatureBase, NeuronFeatureBaseData } from "./neuron_feature_base";
import { NeuronFeaturePoint, NeuronFeaturePointData } from "./neuron_feature_point";
import { NeuronFeaturePolygon, NeuronFeaturePolygonData } from "./neuron_feature_polygon";
import { NeuronFeatureSurvey, NeuronFeatureSurveyData } from "./neuron_feature_survey";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { NeuronMap } from "./neuron_map";
import { kml_download_from_points, kml_load_file, NeuronKMLData } from "./neuron_tools_kml";
import { download_file, get_filename } from "./neuron_tools_files"
import { L } from "./leaflet_interface"

const zeroPad = (num:number, places:number) => String(num).padStart(places, '0');

enum NeuronPlannerOptionKeys {
    MISSION_SPEED = 'fp-stats-options-speed',
}

type MissionFeatureData = (
    NeuronFeatureBaseData |
    NeuronFeaturePointData |
    NeuronFeaturePolygonData |
    NeuronFeatureSurveyData
);

type MissionFeature = (
    NeuronFeatureBase |
    NeuronFeaturePoint |
    NeuronFeaturePolygon |
    NeuronFeatureSurvey
);

export interface NeuronPlannerMissionData {
    version:string,
    type:string,
    mission_items:MissionFeatureData[]  //
    waypoints: NeuronInterfacePointData[]
}

export interface MissionBiref {
    type:string,
    description:string,
    components:string[],
    time_transit:string,
    time_duration:string
}

export class NeuronPlanner {
    static TYPE = 'NeuronPlanner';
    static VERSION = '48a24a80-d243-11ec-918e-9fd28348efc7';

    #map:NeuronMap;

    #plan_element:HTMLElement;
    #option_elements:Map<string,HTMLInputElement>;
    #stats_element:HTMLElement;
    #mission_items:MissionFeature[];
    #on_change_callbacks:Map<number,CallableFunction>;
    #last_callback_id:number;
    #clearing_mission:boolean;

    #last_mission_altitude:number;


    constructor(plan_element_name:string, stats_element_name:string, map:NeuronMap = null) {
        this.#map = map;

        this.#plan_element = document.getElementById(plan_element_name);
        this.#stats_element = document.getElementById(stats_element_name);
        this.#option_elements = new Map();

        let option_element_names = [
            NeuronPlannerOptionKeys.MISSION_SPEED,
        ]
        for(const n of option_element_names) {
            const e = <HTMLInputElement>document.getElementById(n);
            e.onchange = this.update_mission_stats.bind(this);
            this.#option_elements.set(n, e);
        }

        this.#mission_items = [];
        this.#on_change_callbacks = new Map();
        this.#last_callback_id = 0;
        this.#last_mission_altitude = 0.0;
        this.#clearing_mission = false;
    }

    get_mission_as_json() {
        let mission_data:MissionFeatureData[] = [];
        for(const item of this.#mission_items)
            mission_data.push(item.to_json());

        return mission_data;
    }

    static isObjectOfDataType(object: any): object is NeuronPlannerMissionData {
        let is_valid =
            (object.type == NeuronPlanner.TYPE) ||
            (object.version == NeuronPlanner.VERSION);

        return is_valid;
    }

    set_mission_from_json(j:NeuronPlannerMissionData) {
        if(!NeuronPlanner.isObjectOfDataType(j))
            throw new Error("Invalid version during import of NeuronPlannerMissionData");

        if(j.mission_items && j.mission_items.length) {
            this.#add_mission_features_from_json(j.mission_items);
        } else if(j.waypoints && j.waypoints.length) {
            console.warn("No mission items found, importing waypoints instead!");
            this.#add_waypoint_features_from_json(j.waypoints);
        }

        this.fit_mission_on_map();
    }

    #add_mission_features_from_json(mission_items:MissionFeatureData[]) {
        let features:NeuronFeatureBase[] = [];

        for(const item of mission_items) {
            let feature:NeuronFeatureBase = null;

            if(NeuronFeatureBase.isObjectOfDataType(item)) {
                feature = NeuronFeatureBase.from_json(item, this.#map.get_leaflet_map());
            } else if(NeuronFeaturePoint.isObjectOfDataType(item)) {
                feature = NeuronFeaturePoint.from_json(item, this.#map.get_leaflet_map());
            } else if(NeuronFeaturePolygon.isObjectOfDataType(item)) {
                let p = NeuronFeaturePolygon.from_json(item, this.#map.get_leaflet_map());
                p.set_planner(this);
                feature = p;
            } else if(NeuronFeatureSurvey.isObjectOfDataType(item)) {
                feature = NeuronFeatureSurvey.from_json(item, this.#map.get_leaflet_map());
            } else {
                console.warn("Unable to import mission item");
                console.warn(item);
            }

            if(feature)
                features.push(feature);
        }

        this.add_mission_items(features);
    }

    #add_waypoint_features_from_json(waypoints:NeuronInterfacePointData[]) {
        let features:NeuronFeatureBase[] = [];

        for(const item of waypoints) {
            let feature:NeuronFeatureBase = null;

            if(NeuronInterfacePoint.isObjectOfDataType(item)) {
                const point = NeuronInterfacePoint.from_json(item);
                feature = new NeuronFeaturePoint(this.#map.get_leaflet_map(), point);
            } else {
                console.warn("Unable to import waypoint item");
                console.warn(item);
            }

            if(feature)
                features.push(feature);
        }

        this.add_mission_items(features);
    }

    async save_mission_file() {
        let j:NeuronPlannerMissionData = {
            version: NeuronPlanner.VERSION,
            type: NeuronPlanner.TYPE,
            mission_items: this.get_mission_as_json(),
            waypoints: this.get_mission_as_points().map(x => x.to_json())
        }

        const file = new Blob(
            [JSON.stringify(j, null, 4)],
            {
                type: 'application/json'
            }
        );

        const filename = get_filename('json');
        await download_file(filename, file);
    }

    async load_mission_file(file:Blob) {
        const j = <NeuronPlannerMissionData>JSON.parse(await file.text());
        this.set_mission_from_json(j);
    }

    fit_mission_on_map() {
        //Try to fit all the features on screen
        if(this.#map) {
            let m = this.#map.get_leaflet_map();
            if(m) {
                let features:L.Layer[] = [];
                for(const item of this.#mission_items)
                    features.push(...item.get_features());
                if(features.length) {
                    let fg = L.featureGroup(features);
                    m.fitBounds(fg.getBounds(), {
                        padding: [20, 20]
                    });
                }
            }
        }
    }

    update_mission_brief() {
        const brief = this.get_mission_brief();

        // var tab = window.open('about:blank', '_blank');
        // // tab.document.write(html); // where 'html' is a variable containing your HTML
        // tab.document.head.title = "Neuron Planner Mission Brief";
        // let title = tab.document.createElement('h1');
        // title.appendChild(tab.document.createTextNode("Mission Brief"));
        let dprint = document.getElementById("print-section");
        dprint.innerHTML = '';
        let title = document.createElement('h1');
        title.appendChild(document.createTextNode("Mission Brief"));
        dprint.appendChild(title);

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

        dprint.appendChild(table);
    }

    get_mission_brief() {
        let brief:MissionBiref[] = [];
        const steps = this.get_mission_as_points();
        if(steps.length) {
            //Get the flight speed and lock it to at least 0.1m/s
            const s = this.get_option(NeuronPlannerOptionKeys.MISSION_SPEED);
            const flight_speed = Math.max(s ? Number.parseFloat(s) : 0.0, 0.1);

            let time_takeoff = "---";
            let takeoff_point = steps[0];
            if(takeoff_point.altitude != 0) {
                takeoff_point = new NeuronInterfacePoint(steps[0].latitude, steps[0].longitude, 0.0);
                const takeoff_coords = [takeoff_point, steps[0]];
                const takeoff_distance = NeuronPlanner.flight_distance_from_coords(takeoff_coords);
                time_takeoff = "+" + NeuronPlanner.flight_time_from_duration(takeoff_distance/flight_speed);
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
            for(const item of this.#mission_items) {
                let path = item.get_path_coords();

                let time_transit = "---";
                if(path.length && point_last) {
                    const transit_coords = [point_last, path[0]];
                    const transit_distance = NeuronPlanner.flight_distance_from_coords(transit_coords);
                    time_transit = "+" + NeuronPlanner.flight_time_from_duration(transit_distance/flight_speed);
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

                        const step_distance = NeuronPlanner.flight_distance_from_coords(path);
                        const step_duration = "+" + NeuronPlanner.flight_time_from_duration(step_distance/flight_speed);
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
                const land_distance = NeuronPlanner.flight_distance_from_coords(land_coords);
                time_land = "+" + NeuronPlanner.flight_time_from_duration(land_distance/flight_speed);
            }

            let stepn:MissionBiref = {
                type: NeuronFeaturePoint.NAME,
                description: "Land at location",
                components: [land_point ? land_point.toString() : "---"],
                time_duration: time_land,
                time_transit: "---"
            };
            brief.push(stepn);

            const total_distance = NeuronPlanner.flight_distance_from_coords(steps);
            const total_time = NeuronPlanner.flight_time_from_duration(total_distance/flight_speed);

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

    export_mission_kml() {
        kml_download_from_points(this.get_mission_as_points());
    }

    set_map(map:NeuronMap) {
        this.#map = map;
    }

    get_option(key:NeuronPlannerOptionKeys) {
        return this.#option_elements.has(key) ? this.#option_elements.get(key).value : null;
    }

    #run_on_mission_change(){
        for(const cb of this.#on_change_callbacks.values())
            cb();

        this.update_mission_stats();
    }

    on_mission_change(cb:CallableFunction): CallableFunction {
        const id = this.#last_callback_id++;
        this.#on_change_callbacks.set(id, cb);

        return this.#remove_on_mission_change.bind(this, id);
    }

    #remove_on_mission_change(key:number) {
        if(this.#on_change_callbacks.has(key)) {
            this.#on_change_callbacks.delete(key);
        }
    }

    #mission_item_changed(item:NeuronFeatureBase) {
        this.#run_on_mission_change();
    }

    #array_move(arr:any[], old_index:number, new_index:number) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
    };

    #move_mission_item(item:NeuronFeatureBase, direction:number) {
        let ind = this.#mission_items.indexOf(item);
        if(ind >= 0) {
            //Move index and clamp to array size
            let new_ind = ind + (direction > 0 ? 1 : -1)
            new_ind = Math.max(Math.min(new_ind, (this.#mission_items.length - 1)), 0);
            this.#array_move(this.#mission_items, ind, new_ind);

            this.update();
            this.#run_on_mission_change();
        } else {
            console.warn("Unknown mission item, cannot move");
        }
    }

    get_last_item_altitude() {
        return this.#last_mission_altitude;
    }

    #on_add_mission_item_updates() {
        this.update();
        this.#run_on_mission_change();
    }

    #add_mission_item(item:NeuronFeatureBase, index:number = -1, run_update:boolean = true) {
        item.set_remove_callback(this.remove_mission_item.bind(this));
        item.set_change_callback(this.#mission_item_changed.bind(this));
        item.set_move_callback(this.#move_mission_item.bind(this));
        if(index < 0 || index >= this.#mission_items.length) {
            this.#mission_items.push(item);
        } else {
            this.#mission_items.splice(index, 0, item);
        }

        if(run_update) {
            this.#on_add_mission_item_updates();
        }
    }

    add_mission_item(item:NeuronFeatureBase, index:number = -1) {
        this.#add_mission_item(item, index)
    }

    add_mission_items(items:NeuronFeatureBase[], index:number = -1) {
        let count = 0;
        for(const item of items) {
            const new_ind = index == -1 ?
                -1 :    //add to end
                index + count;
            this.#add_mission_item(item, new_ind, false);
            count ++;
        }

        if(items.length)
            this.#on_add_mission_item_updates();
    }

    remove_mission_item(item:NeuronFeatureBase) {
        // console.log(`Mission item removed: ${item}`);
        let index = this.#mission_items.indexOf(item);
        if(index >= 0) {
            this.#mission_items.splice(index, 1);
        } else {
            console.warn("Unknown mission item, cannot remove!")
        }

        if(!this.#clearing_mission) {
            this.update();
            this.#run_on_mission_change();
        }
    }

    clear_mission() {
        this.#clearing_mission = true;
        while(this.#mission_items.length > 0)
            this.#mission_items[0].remove_feature();
        this.#clearing_mission = false;

        //Do this in bulk at the end
        this.update();
        this.#run_on_mission_change();
    }

    update_mission_plan() {
        this.#plan_element.innerHTML = '';

        // let count = 0;
        for(const i of this.#mission_items) {
            // count++;

            // const dom = document.createElement('div');
            // dom.appendChild(document.createTextNode(`Step #${count}: ${i.constructor.name}`));

            this.#plan_element.appendChild(i.get_dom());
        }
    }

    #kml_loaded(result:NeuronKMLData) {
        // console.log("Got file result:");
        // console.log(result);
        let features:NeuronFeatureBase[] = [];

        for(const p of result.markers) {
            p.altitude = this.get_last_item_altitude();
            const f = new NeuronFeaturePoint(this.#map.get_leaflet_map(), p);
            features.push(f);
        }

        for(const p of result.polygons) {
            const f = new NeuronFeaturePolygon(this.#map.get_leaflet_map(), p);
            f.set_planner(this);    //XXX: Enable functions for upscaling polygon
            features.push(f);
        }

        this.add_mission_items(features);
        this.fit_mission_on_map();
    }

    replace_polygon_with_survey(old_item:NeuronFeaturePolygon) {
        const ind = this.#mission_items.indexOf(old_item);
        if(ind >= 0) {
            const survey = new NeuronFeatureSurvey(this.#map.get_leaflet_map(), old_item.get_corners_as_points());
            old_item.remove_feature();
            this.add_mission_item(survey, ind);
        } else {
            console.warn("Unknown mission feature, cannot replace");
        }
    }

    import_features_from_files(files:Blob[]) {
        for(const file of files) {
            kml_load_file(file, this.#kml_loaded.bind(this));
        }
    }

    update_mission_stats() {
        const coords = this.get_mission_as_points();
        this.#last_mission_altitude = coords.length ?
            coords[coords.length - 1].altitude :
            0.0;

        let total_distance = NeuronPlanner.flight_distance_from_coords(coords);
        const dist_km = total_distance / 1000;

        //Get the flight speed and lock it to at least 0.1m/s
        const s = this.get_option(NeuronPlannerOptionKeys.MISSION_SPEED);
        const flight_speed = Math.max(s ? Number.parseFloat(s) : 0.0, 0.1);
        const total_time = total_distance/flight_speed;

        this.#stats_element.innerHTML = '';

        const s1 = document.createElement('div');
        s1.appendChild(document.createTextNode(`Waypoints: ${coords.length}`));
        this.#stats_element.appendChild(s1);

        const s2 = document.createElement('div');
        s2.appendChild(document.createTextNode(`Distance: ${(dist_km).toFixed(2)} km`));
        this.#stats_element.appendChild(s2);

        const s3 = document.createElement('div');
        s3.appendChild(document.createTextNode(`Time: ${NeuronPlanner.flight_time_from_duration(total_time)}`));
        this.#stats_element.appendChild(s3);
    }

    static flight_distance_from_coords(coords:NeuronInterfacePoint[]) {
        //XXX:  Total distance calculated with the haversine method
        //      This is a shortcut and is probably ok for small distances
        //      but we should definitely look at a propper earth model to
        //      do it properly in the future

        let total_distance = 0.0;
        for (var i = 0; i < coords.length - 1; i++) {
            const p1 = coords[i];
            const p2 = coords[i+1];
            const u1 = p1.to_UTM();
            const u2 = p2.to_UTM(u1.zone);
            const d = u1.GetDistance2D(u2);
            //Do some sneaky stuff to support altitude as well
            const altd = Math.pow(Math.abs(p1.altitude - p2.altitude), 2);
            total_distance += Math.sqrt(Math.pow(d,2) + altd);
        }

        return total_distance;
    }

    static flight_time_from_duration(duration:number) {
        const t_h = Math.floor(duration / 3600);
        const t_m = Math.floor(duration % 3600 / 60);
        const t_s = Math.floor(duration % 3600 % 60);

        return `${zeroPad(t_h,2)}:${zeroPad(t_m,2)}:${zeroPad(t_s,2)}`;
    }

    reset() {
        this.update();
    }

    update() {
        this.update_mission_plan();
        this.update_mission_stats();
        // this.update_mission_brief();
    }

    get_mission_as_points() {
        let coords:NeuronInterfacePoint[] = [];

        for(const i of this.#mission_items)
            coords = coords.concat(i.get_path_coords());

        return coords;
    }
}
