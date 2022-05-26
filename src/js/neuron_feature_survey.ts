import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { CreateGrid, GridPointTags, StartPosition } from "./neuron_tools_survey"
import { L, create_popup_context_dom } from "./leaflet_interface";
import { NeuronOptions, NeuronOptionsNumber } from "./neuron_options";
import { flight_distance_from_coords, flight_time_from_duration } from "./neuron_tools_common";
import { NeuronHelp } from "./neuron_help";

export interface NeuronFeatureSurveyData {
    version:string,
    type:string,
    corners:NeuronInterfacePointData[],
    altitude:number,
    distance:number,
    spacing:number,
    angle:number,
    overshoot1:number,
    overshoot2:number,
    startpos:number,
    minLaneSeparation:number,
    leadin:number,
    sidelap:number,
    overlap:number,
    ground_resolution:number
}

interface NeuronFeatureSurveyLane {
    start:NeuronInterfacePoint,
    end:NeuronInterfacePoint
}

export class NeuronFeatureSurvey extends NeuronFeaturePolygon {
    static override NAME = "Survey";
    static override TYPE = "NeuronFeatureSurvey";
    static override VERSION = '70bb75e0-d5a0-11ec-aaa0-9f86362bde1a';
    static override HELP_KEY = 'survey';

    #waypoints:NeuronInterfacePoint[];
    #mappoints:L.Marker[];

    #altitude:number;
    #distance:number;
    #spacing:number;
    #angle:number;
    #overshoot1:number;
    #overshoot2:number;
    #startpos:StartPosition;
    #minLaneSeparation:number;
    #leadin:number;

    #sidelap:number;
    #overlap:number;
    #ground_resolution:number;

    #show_waypoints:boolean;

    #dom:HTMLDivElement;
    #dom_corner_count:HTMLOutputElement;
    #dom_waypoint_count:HTMLOutputElement;
    #dom_segment_duration:HTMLOutputElement;
    #dom_photo_count:HTMLOutputElement;
    //Display parameters
    #dom_show_waypoints:HTMLInputElement;
    #dom_show_corners:HTMLInputElement;
    //Survey parameters
    #dom_altitude:HTMLInputElement;
    #dom_distance:HTMLInputElement;
    #dom_spacing:HTMLInputElement;
    #dom_angle:HTMLInputElement;
    #dom_angle_slider:HTMLInputElement;
    #dom_overshoot1:HTMLInputElement;
    #dom_overshoot2:HTMLInputElement;
    #dom_startpos:HTMLSelectElement;
    #dom_minLaneSeparation:HTMLInputElement;
    #dom_leadin:HTMLInputElement;
    //Capture parameters
    #dom_sidelap:HTMLInputElement;
    #dom_overlap:HTMLInputElement;
    #dom_ground_resolution:HTMLInputElement;

    #update_timer:NodeJS.Timeout;
    #update_interval:number;
    #unsub_option_cb:CallableFunction;


    static _gsd_ratio = 0.01;   //GSD = [DOM Value] * Ratio
    static _xlap_ratio = 0.01;   //Sidelap = [DOM Value] * Ratio

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], show_waypoints=false) {
        super(map, corners);
        this.#waypoints = [];
        this.#mappoints = [];
        this.#update_timer = null;
        this.#update_interval = 50; //ms

        this.#dom = null;
        this.#dom_corner_count = null;
        this.#dom_waypoint_count = null;
        this.#dom_segment_duration = null;
        this.#dom_photo_count = null;

        this.#dom_show_corners = null;
        this.#dom_show_waypoints = null;
        this.#dom_altitude = null;
        this.#dom_distance = null;
        this.#dom_spacing = null;
        this.#dom_angle = null;
        this.#dom_angle_slider = null;
        this.#dom_overshoot1 = null;
        this.#dom_overshoot2 = null;
        this.#dom_startpos = null;
        this.#dom_minLaneSeparation = null;
        this.#dom_leadin = null;

        this.#dom_sidelap = null;
        this.#dom_overlap = null;
        this.#dom_ground_resolution = null;

        this.#show_waypoints = show_waypoints;
        this.#altitude = 100;
        this.#distance = 50;
        this.#spacing = 0;
        this.#angle = 0.0;
        this.#overshoot1 = 0.0;
        this.#overshoot2 = 0.0;
        this.#startpos = StartPosition.TopLeft;
        this.#minLaneSeparation = 0;
        this.#leadin = 0.0;

        this.#sidelap = 0.7;
        this.#overlap = 0.7;
        this.#ground_resolution = 0.0;

        this._set_on_change_internal(this.update_survey.bind(this));
        this.#_update_survey(false);

        this.#unsub_option_cb = NeuronOptions.add_callback(this.#options_changed.bind(this));
    }

    set_options_subscriber() {
        if(this.#unsub_option_cb)
            this.#unsub_option_cb();

        this.#unsub_option_cb = NeuronOptions.add_callback(this.#options_changed.bind(this));
    }

    #options_changed() {
        //Update our variables, and then the survey if there was a change
        if(this.#calculate_and_update_capture_variables())
            this.update_survey();
    }

    #add_waypoint(point:NeuronInterfacePoint, name:string = "Survey Waypoint") {
        if(this.#show_waypoints) {
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

            // m.on("drag", this.update_polygon.bind(this));
            // m.on("click", this.#select_corner_by_event.bind(this));
            // m.on("dblclick", this.#remove_point_by_event.bind(this));
            this._add_layer_to_map(m);
            this.#mappoints.push(m);
        }

        this.#waypoints.push(point);
    }

    update_show_waypoints(show_waypoints:boolean) {
        this.#show_waypoints = show_waypoints;
        this.update_survey();
    }

    set_altitude(altitude:number) {
        this.#set_altitude(altitude, true);
    }

    #set_altitude(altitude:number, update_calcs:boolean=true) {
        this.#altitude = altitude;

        if(update_calcs) {
            let resolution = NeuronOptions.get_camera().get_ground_resolution(this.#altitude);
            if(resolution) {
                if(this.#dom_ground_resolution)
                    this.#dom_ground_resolution.value = (resolution / NeuronFeatureSurvey._gsd_ratio).toString();

                this.#set_ground_resolution(resolution, false);
            }
        }

        this.update_survey();
    }

    set_distance(distance:number) {
        this.#set_distance(distance);
    }

    #set_distance(distance:number, update_calcs:boolean=true) {
        this.#distance = distance;

        if(update_calcs) {
            let projection = NeuronOptions.get_camera().get_projected_size(this.#altitude);
            if(projection && (distance >= 0)) {
                const sidelap_factor = distance/projection.Width();
                const sidelap = Math.max(Math.min(1 - sidelap_factor, 1.0), 0.0);

                if(this.#dom_ground_resolution)
                    this.#dom_sidelap.value = (sidelap / NeuronFeatureSurvey._xlap_ratio).toString();

                this.#set_sidelap(sidelap, false);
            }
        }

        this.update_survey();
    }

    set_spacing(spacing:number) {
        this.#spacing = spacing;
        this.update_survey();
    }

    set_angle(angle:number) {
        this.#angle = angle;
        this.update_survey();
    }

    set_overshoot1(overshoot1:number) {
        this.#overshoot1 = overshoot1;
        this.update_survey();
    }

    set_overshoot2(overshoot2:number) {
        this.#overshoot2 = overshoot2;
        this.update_survey();
    }

    set_startpos(startpos:StartPosition) {
        this.#startpos = startpos;
        this.update_survey();
    }

    set_minLaneSeparation(minLaneSeparation:number) {
        this.#minLaneSeparation = minLaneSeparation;
        this.update_survey();
    }

    set_leadin(leadin:number) {
        this.#leadin = leadin;
        this.update_survey();
    }

    get_show_waypoints() {
        return this.#show_waypoints;
    }

    get_altitude() {
        return this.#altitude;
    }

    get_distance() {
        return this.#distance;
    }

    get_spacing() {
        return this.#spacing;
    }

    get_angle() {
        return this.#angle;
    }

    get_overshoot1() {
        return this.#overshoot1;
    }

    get_overshoot2() {
        return this.#overshoot2;
    }

    get_startpos() {
        return this.#startpos;
    }

    get_minLaneSeparation() {
        return this.#minLaneSeparation;
    }

    get_leadin() {
        return this.#leadin;
    }

    update_survey() {
        //Clear any queued updates
        this.#clear_update_timer();

        //Force clear the survey survey immediately for display
        this.#clean_waypoints();

        //Update survey with slight delay for processing
        this.#update_timer = setTimeout(this.#_update_survey.bind(this, true), this.#update_interval);
    }

    #clear_update_timer() {
        if(this.#update_timer) {
            clearTimeout(this.#update_timer);
            this.#update_timer = null;
        }
    }

    #_update_survey(fire_on_change:boolean = true) {
        this.#clean_waypoints();

        const corners = this.get_corners_as_points();
        const waypoints = (corners.length <= 2) ?
            //There's only a line, so go end-to-end
            corners :
            //There is an actual polygon, so do a survey grid
            CreateGrid(
                this.get_corners_as_points(),
                this.#altitude,
                this.#distance,
                this.#spacing,
                this.#angle,
                this.#overshoot1,
                this.#overshoot2,
                this.#startpos,
                this.#minLaneSeparation,
                this.#leadin
            );

        for(let i = 0; i < waypoints.length; i++)
            this.#add_waypoint(waypoints[i], `Survey Waypoint (#${i})`);

        this.#try_update_dom_stats();

        if(fire_on_change)
            this._trigger_on_changed();
    }

    #clean_waypoints() {
        for(const m of this.#mappoints) {
            this._remove_layer_from_map(m);
        }
        this.#mappoints = [];
        this.#waypoints = [];
    }

    #try_update_dom_stats() {
        const coords = this.get_path_coords();

        if(this.#dom_corner_count)
            this.#dom_corner_count.value = this.get_corners().length.toFixed(0);

        if(this.#dom_waypoint_count)
            this.#dom_waypoint_count.value = coords.length.toFixed(0);


        if(this.#dom_segment_duration) {

            const distance = flight_distance_from_coords(coords);
            const duration = distance / NeuronOptions.get_option_number(NeuronOptionsNumber.MISSION_SPEED);
            this.#dom_segment_duration.value = flight_time_from_duration(duration);
        }

        if(this.#dom_photo_count) {
            let count = "---";
            let projection = NeuronOptions.get_camera().get_projected_size(this.#altitude);

            if(projection && (this.#overlap >= 0) && (this.#overlap <= 1)) {
                const overlap_factor = 1 - this.#overlap;
                const photo_distance = Math.abs(projection.Height())*overlap_factor;

                let photo_count = 0;
                for(const lane of this.get_lane_coords()) {
                    const ps = lane.start.to_UTM();
                    const pe = lane.end.to_UTM(ps.zone);

                    const lane_distance = ps.GetDistance2D(pe);
                    photo_count += Math.ceil(lane_distance / photo_distance);
                }

                count = photo_count.toString();
            }

            this.#dom_photo_count.value = count;
        }
    }

    #update_show_corners_from_dom() {
        this.update_show_corners(this.#dom_show_corners.checked);
    }

    #update_show_waypoints_from_dom() {
        this.update_show_waypoints(this.#dom_show_waypoints.checked);
    }

    #update_altitude_from_dom() {
        this.set_altitude(this.#dom_altitude.valueAsNumber * NeuronFeatureSurvey._altitude_ratio);
    }

    #update_distance_from_dom() {
        this.set_distance(this.#dom_distance.valueAsNumber);
    }

    #update_spacing_from_dom() {
        this.set_spacing(this.#dom_spacing.valueAsNumber);
    }

    #update_angle_from_dom() {
        const val = this.#dom_angle.valueAsNumber;
        this.#dom_angle_slider.value = val.toString();
        this.set_angle(this.#dom_angle.valueAsNumber);
    }

    #update_angle_slider_from_dom() {
        const val = this.#dom_angle_slider.valueAsNumber;
        this.#dom_angle.value = val.toString();
        this.set_angle(val);
    }

    #update_overshoot1_from_dom() {
        this.set_overshoot1(this.#dom_overshoot1.valueAsNumber);
    }

    #update_overshoot2_from_dom() {
        this.set_overshoot2(this.#dom_overshoot2.valueAsNumber);
    }

    #update_startpos_from_dom() {
        const v = Number.parseInt(this.#dom_startpos.value);
        const values = Object.values(StartPosition);
        if (!values.includes(v))
            throw new Error(`Selected value (${v}) is not a StartingPosition`);

        this.set_startpos(v);
    }

    #update_minLaneSeparation_from_dom() {
        this.set_minLaneSeparation(this.#dom_minLaneSeparation.valueAsNumber);
    }

    #update_leadin_from_dom() {
        this.set_leadin(this.#dom_leadin.valueAsNumber);
    }

    override show_help() {
        window.neuron_map.show_map_help(true, `${NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeatureSurvey.HELP_KEY}`);
    }

    override remove_feature() {
        this.#clean_waypoints();

        super.remove_feature();
    }

    override get_path_coords() {
        const corners = this.get_corners_as_points();
        return this.#waypoints.length ? this.#waypoints : (corners.length ? [corners[0]] : []);
    }

    get_lane_coords() {
        const coords = this.get_path_coords();
        let lanes:NeuronFeatureSurveyLane[] = [];
        let start:NeuronInterfacePoint = null;

        for(let i = 0; i < coords.length; i++) {
            const p = coords[i];
            if((!start && p.tag == GridPointTags.START) || (start && p.tag == GridPointTags.MIDDLE_START)) {
                //If we found a new start, or we are adjusting to a new middle start
                start = p;
            } else if (start && ((p.tag == GridPointTags.MIDDLE_END) || (p.tag == GridPointTags.END))) {
                //If we have a valid start and we have found a valid end
                //Add our finished lane
                lanes.push({
                    start: start,
                    end: p
                })
                //And reset
                start = null;
            }
        }

        if(start)
            console.warn("Unable to determine all lanes correctly!");

        return lanes;
    }

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Survey");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            //Output fields
            const t00 = "Number of corners that define this survey's boundaries";
            this.#dom_corner_count = this._create_dom_output();
            this.#dom_corner_count.title = t00;
            c.appendChild(this._create_dom_label("Corners:", this.#dom_corner_count, t00));
            c.appendChild(this.#dom_corner_count);

            const t01 = "Number of waypoints that have been calculated to perform this survey";
            this.#dom_waypoint_count = this._create_dom_output();
            this.#dom_waypoint_count.title = t01;
            c.appendChild(this._create_dom_label("Waypoints:", this.#dom_waypoint_count, t01));
            c.appendChild(this.#dom_waypoint_count);

            const t03 = "Estimated flight time of the survey feature";
            this.#dom_segment_duration = this._create_dom_output();
            this.#dom_segment_duration.title = t03;
            c.appendChild(this._create_dom_label("Duration:", this.#dom_segment_duration, t03));
            c.appendChild(this.#dom_segment_duration);

            const t02 = "Number of photos that will be captured to perform this survey";
            this.#dom_photo_count = this._create_dom_output();
            this.#dom_photo_count.title = t02;
            c.appendChild(this._create_dom_label("Photos:", this.#dom_photo_count, t02));
            c.appendChild(this.#dom_photo_count);

            //Input fields
            const t2 = "Show the corners of the polygon that defines the survey area";
            this.#dom_show_corners = this._create_dom_input_checkbox(this.corners_visible(), this.#update_show_corners_from_dom.bind(this));
            this.#dom_show_corners.title = t2;
            c.appendChild(this._create_dom_label("Show corners:", this.#dom_show_corners, t2));
            c.appendChild(this.#dom_show_corners);

            const t21 = "Show the waypoints that have been calculated at the end of each lane to perform this survey";
            this.#dom_show_waypoints = this._create_dom_input_checkbox(this.#show_waypoints, this.#update_show_waypoints_from_dom.bind(this));
            this.#dom_show_waypoints.title = t21;
            c.appendChild(this._create_dom_label("Show ends:", this.#dom_show_waypoints, t2));
            c.appendChild(this.#dom_show_waypoints);

            const t3 = "Altitude for the survey in feet relative to take-off location ground level";
            this.#dom_altitude = this._create_dom_input_number(this.#altitude / NeuronFeatureSurvey._altitude_ratio, this.#update_altitude_from_dom.bind(this));
            this.#dom_altitude.title = t3;
            c.appendChild(this._create_dom_label("Altitude:", this.#dom_altitude, t3));
            c.appendChild(this.#dom_altitude);

            const t4 = "Spacing between the individual lanes of the survey pattern in meters";
            this.#dom_distance = this._create_dom_input_number(this.#distance, this.#update_distance_from_dom.bind(this), 0.5);
            this.#dom_distance.title = t4;
            c.appendChild(this._create_dom_label("Spacing:", this.#dom_distance, t4));
            c.appendChild(this.#dom_distance);

            const t5 = "Entry location on the survey pattern relative to the most Northwestern point of the survey";
            this.#dom_startpos = this._create_dom_input_select(
                [
                    StartPosition.TopLeft,
                    StartPosition.TopRight,
                    StartPosition.BottomLeft,
                    StartPosition.BottomRight
                ].map(x => x.toString()),
                [
                    "Top left",
                    "Top right",
                    "Bottom left",
                    "Bottom right"
                ],
                this.#update_startpos_from_dom.bind(this),
                this.#startpos.toString());
            this.#dom_startpos.title = t5;
            c.appendChild(this._create_dom_label("Entry:", this.#dom_startpos, t5));
            c.appendChild(this.#dom_startpos);

            // this.#dom_spacing = this._create_dom_input_number(this.#spacing, this.#update_spacing_from_dom.bind(this), 0);
            // c.appendChild(this._create_dom_labelled_input("Spacing:", this.#dom_spacing));

            const t6 = "Angle of the survey pattern in degrees relative to North";
            this.#dom_angle = this._create_dom_input_number(this.#angle, this.#update_angle_from_dom.bind(this), -180, 180);
            this.#dom_angle.title = t6;
            c.appendChild(this._create_dom_label("Angle:", this.#dom_angle, t6));
            c.appendChild(this.#dom_angle);

            //XXX: Same title as dom_angle
            this.#dom_angle_slider = this._create_dom_input_range(this.#angle, this.#update_angle_slider_from_dom.bind(this), -180, 180, 5);
            this.#dom_angle_slider.title = t6;
            c.appendChild(this._create_dom_label("Angle:", this.#dom_angle_slider, t6, true));
            c.appendChild(this.#dom_angle_slider);

            const t7 = "Lane start waypoint adjustment of the survey pattern in meters from the lane intersection point with the survey boundary";
            this.#dom_leadin = this._create_dom_input_number(this.#leadin, this.#update_leadin_from_dom.bind(this), 0);
            this.#dom_leadin.title = t7;
            c.appendChild(this._create_dom_label("Lead-in:", this.#dom_leadin, t7));
            c.appendChild(this.#dom_leadin);

            const t9 = "Lane end waypoint adjustment of the survey pattern in meters from the lane intersection point with the survey boundary for odd-numbered lanes";
            this.#dom_overshoot2 = this._create_dom_input_number(this.#overshoot2, this.#update_overshoot2_from_dom.bind(this));
            this.#dom_overshoot2.title = t9;
            c.appendChild(this._create_dom_label("Run-out A:", this.#dom_overshoot2, t9));
            c.appendChild(this.#dom_overshoot2);

            const t8 = "Lane end waypoint adjustment of the survey pattern in meters from the lane intersection point with the survey boundary for even-numbered lanes";
            this.#dom_overshoot1 = this._create_dom_input_number(this.#overshoot1, this.#update_overshoot1_from_dom.bind(this));
            this.#dom_overshoot1.title = t8;
            c.appendChild(this._create_dom_label("Run-out B:", this.#dom_overshoot1, t8));
            c.appendChild(this.#dom_overshoot1);

            const t10 = "Number of lanes to skip between each run across the survey area";
            this.#dom_minLaneSeparation = this._create_dom_input_number(this.#minLaneSeparation, this.#update_minLaneSeparation_from_dom.bind(this), 0);
            this.#dom_minLaneSeparation.title = t10;
            c.appendChild(this._create_dom_label("Lane Skip:", this.#dom_minLaneSeparation, t10));
            c.appendChild(this.#dom_minLaneSeparation);

            //=====================================
            //Camera calculations
            //=====================================
            const tb2 = "Image capture configuration and calculations for survey parameters.";
            let dom_break2 = this._create_dom_output();
            dom_break2.title = tb2;
            let dom_break_label2 = this._create_dom_label("Capture Config.", dom_break2, tb2)
            dom_break_label2.classList.add('mission-feature-content-subtitle');
            c.appendChild(dom_break_label2);
            c.appendChild(dom_break2);

            const t18 = "Ground sampling distance, or ground resolution, in centimeters per pixel";
            this.#dom_ground_resolution = this._create_dom_input_number(this.#ground_resolution / NeuronFeatureSurvey._gsd_ratio, this.#update_ground_resolution_from_dom.bind(this), 0, null, 0.2);
            this.#dom_ground_resolution.title = t18;
            c.appendChild(this._create_dom_label("GSD:", this.#dom_ground_resolution, t18));
            c.appendChild(this.#dom_ground_resolution);

            const t17 = "Image vertical overlap between lanes as a percentage";
            this.#dom_overlap = this._create_dom_input_number(this.#overlap / NeuronFeatureSurvey._xlap_ratio, this.#update_overlap_from_dom.bind(this), 0, 100);
            this.#dom_overlap.title = t17;
            c.appendChild(this._create_dom_label("Overlap:", this.#dom_overlap, t17));
            c.appendChild(this.#dom_overlap);

            const t19 = "Image horizontal overlap between lanes as a percentage";
            this.#dom_sidelap = this._create_dom_input_number(this.#sidelap / NeuronFeatureSurvey._xlap_ratio, this.#update_sidelap_from_dom.bind(this), 0, 100);
            this.#dom_sidelap.title = t19;
            c.appendChild(this._create_dom_label("Sidelap:", this.#dom_sidelap, t19));
            c.appendChild(this.#dom_sidelap);

            //Try go back now and calculate other values if relevant
            this.#calculate_and_update_capture_variables();
            this.#try_update_dom_stats();

            this.#dom.append(c);
        }

        return this.#dom;
    }

    get_sidelap() {
        return this.#sidelap;
    };

    get_overlap() {
        return this.#overlap;
    }

    get_ground_resolution() {
        return this.#ground_resolution;
    };

    set_sidelap(sidelap:number) {
        this.#set_sidelap(sidelap);
    }

    #set_sidelap(sidelap:number, update_calcs:boolean = true) {
        this.#sidelap = sidelap;
        if(update_calcs)
            this.#calculate_and_update_capture_variables();
    };

    set_overlap(overlap:number) {
        this.#overlap = overlap;
        this.#try_update_dom_stats();
    }

    set_ground_resolution(ground_resolution:number) {
        this.#set_ground_resolution(ground_resolution);
    }

    #set_ground_resolution(ground_resolution:number, update_calcs:boolean = true) {
        this.#ground_resolution = ground_resolution;

        if(update_calcs)
            this.#calculate_and_update_capture_variables();
    };

    #update_sidelap_from_dom() {
        this.set_sidelap(this.#dom_sidelap.valueAsNumber * NeuronFeatureSurvey._xlap_ratio)
    }

    #update_overlap_from_dom() {
        this.set_overlap(this.#dom_overlap.valueAsNumber * NeuronFeatureSurvey._xlap_ratio)
    }

    #update_ground_resolution_from_dom() {
        this.#set_ground_resolution(this.#dom_ground_resolution.valueAsNumber * NeuronFeatureSurvey._gsd_ratio)
    }

    #calculate_and_update_capture_variables() {
        let settings_changed = false;
        const camera = NeuronOptions.get_camera();

        let altitude = camera.get_distance(this.get_ground_resolution());

        if(altitude != this.get_altitude()) {
            settings_changed = true;

            if(this.#dom_altitude)
                this.#dom_altitude.value = (altitude / NeuronFeatureSurvey._altitude_ratio).toString();
            this.#set_altitude(altitude, false);
        }

        let projection = camera.get_projected_size(this.#altitude);

        if(projection && (this.#sidelap >= 0) && (this.#sidelap <= 1)) {
            const sidelap_factor = 1 - this.#sidelap;
            const distance = projection.Width()*sidelap_factor;

            if(distance != this.get_distance()) {
                settings_changed = true;

                if(this.#dom_distance)
                this.#dom_distance.value = Math.max(Number.parseFloat(this.#dom_distance.min), distance).toString();

                this.#set_distance(distance, false);
            }
        }

        return settings_changed;
    }

    static override isObjectOfDataType(object: any): object is NeuronFeatureSurveyData {
        let is_valid =
            (object.type == NeuronFeatureSurvey.TYPE) ||
            (object.version == NeuronFeatureSurvey.VERSION);

        return is_valid;
    }

    static from_json(j:NeuronFeatureSurveyData, map:L.Map) {
        //XXX: Implement this per inherited feature
        if(!NeuronFeatureSurvey.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeatureSurvey`);

        const corners = j.corners.map(x => NeuronInterfacePoint.from_json(x));
        let s = new NeuronFeatureSurvey(map, corners);

        s.set_altitude(j.altitude);
        s.set_distance(j.distance);
        s.set_spacing(j.spacing);
        s.set_angle(j.angle);
        s.set_overshoot1(j.overshoot1);
        s.set_overshoot2(j.overshoot2);
        s.set_startpos(j.startpos);
        s.set_minLaneSeparation(j.minLaneSeparation);
        s.set_leadin(j.leadin);
        s.set_overlap(j.overlap);
        s.#set_sidelap(j.sidelap, false);
        s.#set_ground_resolution(j.ground_resolution, false);

        s.#calculate_and_update_capture_variables();

        return s;
    }

    override to_json() {
        //XXX: Implement this per inherited feature
        return <NeuronFeatureSurveyData>{
            version: NeuronFeatureSurvey.VERSION,
            type: NeuronFeatureSurvey.TYPE,
            corners: this.get_corners_as_points().map(x => x.to_json()),
            altitude: this.get_altitude(),
            distance: this.get_distance(),
            spacing: this.get_spacing(),
            angle: this.get_angle(),
            overshoot1: this.get_overshoot1(),
            overshoot2: this.get_overshoot2(),
            startpos: this.get_startpos(),
            minLaneSeparation: this.get_minLaneSeparation(),
            leadin: this.get_leadin(),
            overlap: this.get_overlap(),
            sidelap: this.get_sidelap(),
            ground_resolution: this.get_ground_resolution()
        }
    }
}
