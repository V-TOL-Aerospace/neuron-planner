import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { Camera, CreateGrid, Rect, StartPosition } from "./neuron_tools_survey"
import { L, create_popup_context_dom } from "./leaflet_interface";

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
    leadin:number
}

export class NeuronFeatureSurvey extends NeuronFeaturePolygon {
    static override NAME = "Survey";
    static override TYPE = "NeuronFeatureSurvey";
    static override VERSION = '8383fdb0-d243-11ec-8833-d736eebe41e8';

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

    #camera:Camera;
    #sidelap:number;

    #show_waypoints;

    #dom:HTMLDivElement;
    #dom_corner_count:HTMLOutputElement;
    #dom_waypoint_count:HTMLOutputElement;
    #dom_ground_resolution:HTMLOutputElement;
    #dom_show_waypoints:HTMLInputElement;
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

    #dom_camera_name:HTMLSelectElement;
    #dom_camera_focal_length:HTMLInputElement;
    #dom_camera_image_width:HTMLInputElement;
    #dom_camera_image_height:HTMLInputElement;
    #dom_camera_sensor_width:HTMLInputElement;
    #dom_camera_sensor_height:HTMLInputElement;
    #dom_sidelap:HTMLInputElement;

    #update_timer:NodeJS.Timeout;
    #update_interval:number;

    //XXX: Keys must be unique!
    static camera_preset_key_custom = "Custom";
    static camera_preset_value_custom = new Camera(NeuronFeatureSurvey.camera_preset_key_custom);
    static camera_presets:Camera[]= [
        NeuronFeatureSurvey.camera_preset_value_custom,
        new Camera("A6000", 20, 23.50, 15.60, 6000, 4000),
    ];

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], show_waypoints=false) {
        super(map, corners);
        this.#waypoints = [];
        this.#mappoints = [];
        this.#update_timer = null;
        this.#update_interval = 50; //ms

        this.#dom = null;
        this.#dom_corner_count = null;
        this.#dom_waypoint_count = null;
        this.#dom_ground_resolution = null;
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

        this.#dom_camera_name = null;
        this.#dom_camera_focal_length = null;
        this.#dom_camera_image_width = null;
        this.#dom_camera_image_height = null;
        this.#dom_camera_sensor_width = null;
        this.#dom_camera_sensor_height = null;
        this.#dom_sidelap = null;

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

        this.#camera = NeuronFeatureSurvey.camera_preset_value_custom;
        this.#sidelap = 70.0;

        this._set_on_change_internal(this.update_survey.bind(this));
        this.#_update_survey(false);
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
            this._add_feature_to_map(m);
            this.#mappoints.push(m);
        }

        this.#waypoints.push(point);
    }

    update_show_waypoints(show_waypoints:boolean) {
        this.#show_waypoints = show_waypoints;
        this.update_survey();
    }

    set_altitude(altitude:number) {
        this.#altitude = altitude;
        this.#calculate_and_update_camera_variables();
        this.update_survey();
    }

    set_distance(distance:number) {
        this.#distance = distance;
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
            m.remove();
        }
        this.#mappoints = [];
        this.#waypoints = [];
    }

    #try_update_dom_stats() {
        if(this.#dom_corner_count)
            this.#dom_corner_count.value = this.get_corners().length.toFixed(0);

        if(this.#dom_waypoint_count)
            this.#dom_waypoint_count.value = this.get_path_coords().length.toFixed(0);
    }

    #update_show_waypoints_from_dom() {
        this.update_show_waypoints(this.#dom_show_waypoints.checked);
    }

    #update_altitude_from_dom() {
        this.set_altitude(this.#dom_altitude.valueAsNumber);
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

    override remove_feature() {
        this.#clean_waypoints();

        super.remove_feature();
    }

    override get_path_coords() {
        const corners = this.get_corners_as_points();
        return this.#waypoints.length ? this.#waypoints : (corners.length ? [corners[0]] : []);
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

            const t02 = "Ground resolution, or ground sampling distance, in meters per pixel";
            this.#dom_ground_resolution = this._create_dom_output("---");
            this.#dom_ground_resolution.title = t02;
            c.appendChild(this._create_dom_label("GSD:", this.#dom_ground_resolution, t02));
            c.appendChild(this.#dom_ground_resolution);

            this.#try_update_dom_stats();

            //Input fields
            const t2 = "Show the waypoints that have been calculated at the end of each lane to perform this survey";
            this.#dom_show_waypoints = this._create_dom_input_checkbox(this.#show_waypoints, this.#update_show_waypoints_from_dom.bind(this));
            this.#dom_show_waypoints.title = t2;
            c.appendChild(this._create_dom_label("Show Ends:", this.#dom_show_waypoints, t2));
            c.appendChild(this.#dom_show_waypoints);

            const t3 = "Altitude for the survey in meters relative to take-off location ground level";
            this.#dom_altitude = this._create_dom_input_number(this.#altitude, this.#update_altitude_from_dom.bind(this));
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

            const t11 = "Camera preset values for calculations based off of typical drone survey cameras";
            const camera_names = NeuronFeatureSurvey.camera_presets.map(x => x.name);
            this.#dom_camera_name = this._create_dom_input_select(camera_names, camera_names, this.#update_camera_from_dom.bind(this), NeuronFeatureSurvey.camera_preset_key_custom);
            this.#dom_camera_name.title = t11;
            c.appendChild(this._create_dom_label("Camera:", this.#dom_camera_name, t11));
            c.appendChild(this.#dom_camera_name);

            const t12 = "Camera focal length in millimeters";
            this.#dom_camera_focal_length = this._create_dom_input_number(this.#camera.focal_length, this.#update_camera_focal_length_from_dom.bind(this), 0);
            this.#dom_camera_focal_length.title = t12;
            c.appendChild(this._create_dom_label("F.Length:", this.#dom_camera_focal_length, t12));
            c.appendChild(this.#dom_camera_focal_length);

            const t13 = "Camera sensors width in millimeters";
            this.#dom_camera_sensor_width = this._create_dom_input_number(this.#camera.sensor_width, this.#update_camera_sensor_width_from_dom.bind(this), 0);
            this.#dom_camera_sensor_width.title = t13;
            c.appendChild(this._create_dom_label("S.Width:", this.#dom_camera_sensor_width, t13));
            c.appendChild(this.#dom_camera_sensor_width);

            const t14 = "Camera sensor height in millimeters";
            this.#dom_camera_sensor_height = this._create_dom_input_number(this.#camera.sensor_height, this.#update_camera_sensor_height_from_dom.bind(this), 0);
            this.#dom_camera_sensor_height.title = t14;
            c.appendChild(this._create_dom_label("S.Height:", this.#dom_camera_sensor_height, t14));
            c.appendChild(this.#dom_camera_sensor_height);

            const t15 = "Camera image width in pixels";
            this.#dom_camera_image_width = this._create_dom_input_number(this.#camera.image_width, this.#update_camera_image_width_from_dom.bind(this), 0);
            this.#dom_camera_image_width.title = t15;
            c.appendChild(this._create_dom_label("I.Width:", this.#dom_camera_image_width, t15));
            c.appendChild(this.#dom_camera_image_width);

            const t16 = "Camera image height in pixels";
            this.#dom_camera_image_height = this._create_dom_input_number(this.#camera.image_height, this.#update_camera_image_height_from_dom.bind(this), 0);
            this.#dom_camera_image_height.title = t16;
            c.appendChild(this._create_dom_label("I.Height:", this.#dom_camera_image_height, t16));
            c.appendChild(this.#dom_camera_image_height);

            const t17 = "Image horizontal overlap between lanes as a percentage";
            this.#dom_sidelap = this._create_dom_input_number(this.#sidelap, this.#update_sidelap_from_dom.bind(this), 0, 100);
            this.#dom_sidelap.title = t17;
            c.appendChild(this._create_dom_label("Sidelap:", this.#dom_sidelap, t17));
            c.appendChild(this.#dom_sidelap);

            this.#dom.append(c);
        }

        return this.#dom;
    }

    get_camera() {
        return this.#camera;
    };

    get_sidelap() {
        return this.#sidelap;
    };

    set_sidelap(sidelap:number) {
        this.#sidelap = sidelap;
        this.#calculate_and_update_camera_variables();
    };

    #set_camera_selector(value:string = NeuronFeatureSurvey.camera_preset_key_custom) {
        const camera_names = NeuronFeatureSurvey.camera_presets.map(x => x.name);
        if(camera_names.includes(value)) {
            this.#dom_camera_name.value = value;
        } else {
            this.#dom_camera_name.value = NeuronFeatureSurvey.camera_preset_key_custom;
        }
    }

    set_camera(camera:Camera) {
        this.#camera = camera;
        this.#set_camera_selector(this.#camera.name);

        this.#dom_camera_focal_length.value = Math.max(Number.parseFloat(this.#dom_camera_focal_length.min), this.#camera.focal_length).toString();
        this.#dom_camera_sensor_width.value = Math.max(Number.parseFloat(this.#dom_camera_sensor_width.min), this.#camera.sensor_width).toString();
        this.#dom_camera_sensor_height.value = Math.max(Number.parseFloat(this.#dom_camera_sensor_height.min), this.#camera.sensor_height).toString();
        this.#dom_camera_image_width.value = Math.max(Number.parseFloat(this.#dom_camera_image_width.min), this.#camera.image_width).toString();
        this.#dom_camera_image_height.value = Math.max(Number.parseFloat(this.#dom_camera_image_height.min), this.#camera.image_height).toString();

        this.#calculate_and_update_camera_variables();
    };

    #update_camera_from_dom() {
        const value = this.#dom_camera_name.value;

        const camera_names = NeuronFeatureSurvey.camera_presets.map(x => x.name);
        let camera = NeuronFeatureSurvey.camera_preset_value_custom.copy();

        if(camera_names.includes(value)) {
            const matches = NeuronFeatureSurvey.camera_presets.filter(x => x.name == value);
            if(matches.length > 0) {
                camera = matches[0].copy();
            }
        }

        this.set_camera(camera);
        this.#calculate_and_update_camera_variables();
    }

    #update_camera_focal_length_from_dom() {
        this.#camera.focal_length = this.#dom_camera_focal_length.valueAsNumber;
        this.set_camera(this.#camera);
    }

    #update_camera_sensor_width_from_dom() {
        this.#camera.sensor_width = this.#dom_camera_sensor_width.valueAsNumber;
        this.set_camera(this.#camera);
    }

    #update_camera_sensor_height_from_dom() {
        this.#camera.sensor_height = this.#dom_camera_sensor_height.valueAsNumber;
        this.set_camera(this.#camera);
    }

    #update_camera_image_width_from_dom() {
        this.#camera.image_width = this.#dom_camera_image_width.valueAsNumber;
        this.set_camera(this.#camera);
    }

    #update_camera_image_height_from_dom() {
        this.#camera.image_height = this.#dom_camera_image_height.valueAsNumber;
        this.set_camera(this.#camera);
    }

    #update_sidelap_from_dom() {
        this.set_sidelap(this.#dom_sidelap.valueAsNumber)
    }

    #calculate_and_update_camera_variables() {
        let projection = this.#camera.get_projected_size(this.#altitude);
        let resolution = this.#camera.get_ground_resolution(this.#altitude);

        if(projection && this.#dom_distance && (this.#sidelap >= 0) && (this.#sidelap <= 100)) {
            const min_dist = Number.parseFloat(this.#dom_distance.min);
            const sidelap_factor = 1 - (this.#sidelap / 100.0);
            const distance = projection.Width()*sidelap_factor;
            this.#dom_distance.value = Math.max(min_dist, distance).toString();
            this.set_distance(this.#dom_distance.valueAsNumber);
        }

        if(resolution && this.#dom_ground_resolution) {
            this.#dom_ground_resolution.value = resolution.toFixed(4);
        } else if(this.#dom_ground_resolution) {
            this.#dom_ground_resolution.value = "---";
        }
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
        }
    }
}
