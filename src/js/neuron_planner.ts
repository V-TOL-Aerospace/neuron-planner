import { NeuronFeatureBase, NeuronFeatureBaseData } from "./neuron_feature_base";
import { NeuronFeaturePoint, NeuronFeaturePointData } from "./neuron_feature_point";
import { NeuronFeaturePolygon, NeuronFeaturePolygonData } from "./neuron_feature_polygon";
import { NeuronFeatureSurvey, NeuronFeatureSurveyData } from "./neuron_feature_survey";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { NeuronMap } from "./neuron_map";
import { kmz_download_from_neuron_data, kml_load_file, NeuronKMLData } from "./neuron_tools_kml";
import { download_file, get_filename } from "./neuron_tools_files"
import { L } from "./leaflet_interface"

export type MissionFeatureData = (
    NeuronFeatureBaseData |
    NeuronFeaturePointData |
    NeuronFeaturePolygonData |
    NeuronFeatureSurveyData
);

export type MissionFeature = (
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

export interface MissionBrief {
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
    #mission_items:MissionFeature[];
    #on_change_callbacks:Map<number,CallableFunction>;
    #last_callback_id:number;
    #clearing_mission:boolean;

    #last_mission_altitude:number;

    #plan_element_name:string;

    constructor(plan_element_name:string, map:NeuronMap = null) {
        this.#map = map;

        this.#plan_element = null;
        this.#plan_element_name = plan_element_name;

        this.#mission_items = [];
        this.#on_change_callbacks = new Map();
        this.#last_callback_id = 0;
        this.#last_mission_altitude = 0.0;
        this.#clearing_mission = false;
    }

    get_mission_items() {
        return this.#mission_items;
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

    async fit_mission_on_map(allow_animate:boolean=true, pad_left:number=50,pad_top:number=50,pad_right:number=50,pad_bottom:number=50) {
        return new Promise(resolve => {
            //Try to fit all the features on screen
            if(this.#map) {
                let m = this.#map.get_leaflet_map();
                if(m) {
                    let features:L.Layer[] = [];
                    for(const item of this.#mission_items)
                        features.push(...item.get_features());

                    if(features.length) {
                        let fg = L.featureGroup(features);
                        const old_snap = m.options.zoomSnap;
                        m.options.zoomSnap = 0;
                        let cb = (ev:L.LayerEvent) => {
                            // console.log(`Zoom ended at ${m.getZoom()}, disabling thing~`);
                            m.options.zoomSnap = old_snap;
                            m.off('moveend', cb);
                            resolve(true);
                        }
                        //XXX:  we use moveend here because the map always moves to
                        //      fit bounds, but it doesn't always zoom to fit bounds
                        m.on('moveend', cb);
                        m.fitBounds(fg.getBounds(), {
                            paddingTopLeft: [pad_left, pad_top],
                            paddingBottomRight: [pad_right, pad_bottom],
                            animate: allow_animate,
                            // duration: 0.001
                        });

                        // } else {
                        //     console.log("Zoom not needed!");
                        //     resolve(true);
                        // }
                    } else {
                        // console.log("No objects to zoom too!");
                        resolve(true);
                    }
                } else {
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        });
    }

    export_mission_kml() {
        let polygons:NeuronInterfacePoint[][] = [];
        for(const i of this.#mission_items) {
            if(i instanceof NeuronFeaturePolygon) {
                polygons.push(i.get_corners_as_points());
            }
        }

        kmz_download_from_neuron_data(this.get_mission_as_points(), polygons);
    }

    set_map(map:NeuronMap) {
        this.#map = map;
    }

    #run_on_mission_change(){
        const coords = this.get_mission_as_points();
        this.#last_mission_altitude = coords.length ?
            coords[coords.length - 1].altitude :
            0.0;

        for(const cb of this.#on_change_callbacks.values())
            cb();
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

    update() {
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
            f.set_planner(this);    //XXX: Enable functions for up-scaling polygon
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

    reset() {
        //Collect our DOM elements
        this.#plan_element = document.getElementById(this.#plan_element_name);

        //Update the planner
        this.update();
        this.#run_on_mission_change();
    }

    get_mission_as_points() {
        let coords:NeuronInterfacePoint[] = [];

        for(const i of this.#mission_items)
            coords = coords.concat(i.get_path_coords());

        return coords;
    }
}
