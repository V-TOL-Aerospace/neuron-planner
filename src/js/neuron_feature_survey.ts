import { NeuronFeaturePolygon } from "./neuron_feature_polygon";
import { NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { CreateGrid, StartPosition } from "./neuron_tools_survey"
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

    #altitude;
    #distance;
    #spacing;
    #angle;
    #overshoot1;
    #overshoot2;
    #startpos;
    #minLaneSeparation;
    #leadin;

    #show_waypoints;

    #dom:HTMLDivElement;
    #dom_corner_count:HTMLDivElement;
    #dom_waypoint_count:HTMLDivElement;
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

    #update_timer:NodeJS.Timeout;
    #update_interval:number;

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], show_waypoints=false) {
        super(map, corners);
        this.#waypoints = [];
        this.#mappoints = [];
        this.#update_timer = null;
        this.#update_interval = 50; //ms

        this.#dom = null;
        this.#dom_corner_count = null;
        this.#dom_waypoint_count = null;
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

        this._set_on_change_internal(this.update_survey.bind(this));
        this.#_update_survey(false, false);
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


            //TODO: review: Could also use "dragend"?
            // m.on("drag", this.update_polygon.bind(this));
            // m.on("click", this.#select_corner_by_event.bind(this));
            // m.on("dblclick", this.#remove_point_by_event.bind(this));
            this._add_feature_to_map(m);
            this.#mappoints.push(m);
        }

        this.#waypoints.push(point);
    }

    update_show_waypoints(show_waypoints:boolean, update_dom:boolean = true) {
        this.#show_waypoints = show_waypoints;
        this.update_survey(update_dom);
    }

    update_altitude(altitude:number, update_dom:boolean = true) {
        this.#altitude = altitude;
        this.update_survey(update_dom);
    }

    update_distance(distance:number, update_dom:boolean = true) {
        this.#distance = distance;
        this.update_survey(update_dom);
    }

    update_spacing(spacing:number, update_dom:boolean = true) {
        this.#spacing = spacing;
        this.update_survey(update_dom);
    }

    update_angle(angle:number, update_dom:boolean = true) {
        this.#angle = angle;
        this.update_survey(update_dom);
    }

    update_overshoot1(overshoot1:number, update_dom:boolean = true) {
        this.#overshoot1 = overshoot1;
        this.update_survey(update_dom);
    }

    update_overshoot2(overshoot2:number, update_dom:boolean = true) {
        this.#overshoot2 = overshoot2;
        this.update_survey(update_dom);
    }

    update_startpos(startpos:StartPosition, update_dom:boolean = true) {
        this.#startpos = startpos;
        this.update_survey(update_dom);
    }

    update_minLaneSeparation(minLaneSeparation:number, update_dom:boolean = true) {
        this.#minLaneSeparation = minLaneSeparation;
        this.update_survey(update_dom);
    }

    update_leadin(leadin:number, update_dom:boolean = true) {
        this.#leadin = leadin;
        this.update_survey(update_dom);
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


    update_survey(update_dom:boolean = true) {
        //Clear any queued updates
        this.#clear_update_timer();

        //Force clear the survey survey imidiately for display
        this.#clean_waypoints();

        //Update survey with slight delay for processing
        this.#update_timer = setTimeout(this.#_update_survey.bind(this, update_dom, true), this.#update_interval);
    }

    #clear_update_timer() {
        if(this.#update_timer) {
            clearTimeout(this.#update_timer);
            this.#update_timer = null;
        }
    }

    #_update_survey(update_dom:boolean = true, fire_on_change:boolean = true) {
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

        if(update_dom)
            this.#try_update_dom();

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

    #try_update_dom() {
        if(this.#dom_corner_count) {
            this.#dom_corner_count.innerHTML = '';
            this.#dom_corner_count.appendChild(document.createTextNode(`Corners: ${this.get_corners().length}`));
        }

        if(this.#dom_waypoint_count) {
            this.#dom_waypoint_count.innerHTML = '';
            this.#dom_waypoint_count.appendChild(document.createTextNode(`Waypoints: ${this.#waypoints.length}`));
        }
    }

    #update_show_waypoints_from_dom() {
        this.update_show_waypoints(this.#dom_show_waypoints.checked,false);
    }

    #update_altitude_from_dom() {
        this.update_altitude(this.#dom_altitude.valueAsNumber,false);
    }

    #update_distance_from_dom() {
        this.update_distance(this.#dom_distance.valueAsNumber,false);
    }

    #update_spacing_from_dom() {
        this.update_spacing(this.#dom_spacing.valueAsNumber,false);
    }

    #update_angle_from_dom() {
        const val = this.#dom_angle.valueAsNumber;
        this.#dom_angle_slider.value = val.toString();
        this.update_angle(this.#dom_angle.valueAsNumber,false);
    }

    #update_angle_slider_from_dom() {
        const val = this.#dom_angle_slider.valueAsNumber;
        this.#dom_angle.value = val.toString();
        this.update_angle(val,false);
    }

    #update_overshoot1_from_dom() {
        this.update_overshoot1(this.#dom_overshoot1.valueAsNumber,false);
    }

    #update_overshoot2_from_dom() {
        this.update_overshoot2(this.#dom_overshoot2.valueAsNumber,false);
    }

    #update_startpos_from_dom() {
        const v = Number.parseInt(this.#dom_startpos.value);
        const values = Object.values(StartPosition);
        if (!values.includes(v))
            throw new Error(`Selected value (${v}) is not a StartingPosition`);

        this.update_startpos(v, false);
    }

    #update_minLaneSeparation_from_dom() {
        this.update_minLaneSeparation(this.#dom_minLaneSeparation.valueAsNumber,false);
    }

    #update_leadin_from_dom() {
        this.update_leadin(this.#dom_leadin.valueAsNumber,false);
    }

    override remove_feature() {
        this.#clean_waypoints();

        super.remove_feature();
    }

    override get_path_coords() {
        return this.#waypoints;
    }

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Survey");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            this.#dom_corner_count = document.createElement("div");
            this.#dom_corner_count.className = 'mission-feature-content-item';
            c.appendChild(this.#dom_corner_count);

            this.#dom_waypoint_count = document.createElement("div");
            this.#dom_waypoint_count.className = 'mission-feature-content-item';
            c.appendChild(this.#dom_waypoint_count);

            this.#dom_show_waypoints = this._create_dom_input_checkbox(this.#show_waypoints, this.#update_show_waypoints_from_dom.bind(this));
            c.appendChild(this._create_dom_labelled_input("Show waypoints", this.#dom_show_waypoints, false));

            this.#dom_altitude = this._create_dom_input_number(this.#altitude, this.#update_altitude_from_dom.bind(this), 0);
            c.appendChild(this._create_dom_labelled_input("Altitude:", this.#dom_altitude));

            this.#dom_distance = this._create_dom_input_number(this.#distance, this.#update_distance_from_dom.bind(this), 0.5);
            c.appendChild(this._create_dom_labelled_input("Spacing:", this.#dom_distance));

            // this.#dom_spacing = this._create_dom_input_number(this.#spacing, this.#update_spacing_from_dom.bind(this), 0);
            // c.appendChild(this._create_dom_labelled_input("Spacing:", this.#dom_spacing));

            this.#dom_angle = this._create_dom_input_number(this.#angle, this.#update_angle_from_dom.bind(this), -180, 180);
            c.appendChild(this._create_dom_labelled_input("Angle:", this.#dom_angle));

            this.#dom_angle_slider = this._create_dom_input_range(this.#angle, this.#update_angle_slider_from_dom.bind(this), -180, 180, 5);
            c.appendChild(this._create_dom_labelled_input("Angle:", this.#dom_angle_slider, true, true));

            this.#dom_overshoot1 = this._create_dom_input_number(this.#overshoot1, this.#update_overshoot1_from_dom.bind(this));
            c.appendChild(this._create_dom_labelled_input("Overshoot A:", this.#dom_overshoot1));

            this.#dom_overshoot2 = this._create_dom_input_number(this.#overshoot2, this.#update_overshoot2_from_dom.bind(this));
            c.appendChild(this._create_dom_labelled_input("Overshoot B:", this.#dom_overshoot2));

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
            c.appendChild(this._create_dom_labelled_input("Entry:", this.#dom_startpos));

            this.#dom_minLaneSeparation = this._create_dom_input_number(this.#minLaneSeparation, this.#update_minLaneSeparation_from_dom.bind(this), 0);
            c.appendChild(this._create_dom_labelled_input("Lane Skip:", this.#dom_minLaneSeparation));

            this.#dom_leadin = this._create_dom_input_number(this.#leadin, this.#update_leadin_from_dom.bind(this), 0);
            c.appendChild(this._create_dom_labelled_input("Lead-in:", this.#dom_leadin));


            this.#try_update_dom();

            this.#dom.append(c);
        }

        return this.#dom;
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

        s.update_altitude(j.altitude);
        s.update_distance(j.distance);
        s.update_spacing(j.spacing);
        s.update_angle(j.angle);
        s.update_overshoot1(j.overshoot1);
        s.update_overshoot2(j.overshoot2);
        s.update_startpos(j.startpos);
        s.update_minLaneSeparation(j.minLaneSeparation);
        s.update_leadin(j.leadin);

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
