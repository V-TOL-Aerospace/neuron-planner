import { NeuronFeatureBase } from "./neuron_feature_base";
import { InterfaceSummaryTabName, NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem, get_neuron_map_marker } from "./interface_leaflet";
import { kml_download_from_neuron_data, kmz_download_from_neuron_data } from "./neuron_tools_kml";
import { NeuronPlanner } from "./neuron_planner";
import { NeuronHelp } from "./neuron_help";
import { NeuronIcons } from "./interface_fontawesome";
import { UTMPos } from "./interface_proj4";

//TODO: Document
export interface NeuronFeaturePolygonData {
    version:string;
    type:string;
    corners:NeuronInterfacePointData[];
    label:string;
}

//TODO: Document
export class NeuronFeaturePolygon extends NeuronFeatureBase {
    static override NAME = "Polygon";
    static override TYPE = "NeuronFeaturePolygon";
    static override VERSION = 'f0e9c050-e135-11ec-8ea0-c3c316816bb1';
    static override HELP_KEY = 'polygon';

    #show_corners:boolean

    #label:string;
    #corners:L.Marker[];
    #polygon:L.Polygon;
    #planner:NeuronPlanner;
    #selected_corner:number;
    #on_change_internal:()=>void;
    #dom:HTMLDivElement;
    #dom_corner_count:HTMLOutputElement;
    #dom_perimeter:HTMLOutputElement;
    #dom_area:HTMLOutputElement;
    #dom_show_corners:HTMLInputElement;
    #dom_label:HTMLInputElement;
    #dom_convert_survey:HTMLButtonElement;
    #dom_export_kml:HTMLButtonElement;
    #dom_export_kmz:HTMLButtonElement;

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], planner:NeuronPlanner = null) {
        super(map);
        this.#on_change_internal = null;
        this.#dom = null;
        this.#dom_perimeter = null;
        this.#dom_area = null;
        this.#dom_corner_count = null;
        this.#dom_convert_survey = null;
        this.#dom_export_kml = null;
        this.#dom_export_kmz = null;
        this.#label = "";

        this.set_planner(planner);

        this.#show_corners = corners.length < 20;
        this.#selected_corner = 0;
        this.#corners = [];
        if(corners.length) {
            if(corners.length == 1)
                console.warn("Insufficient number of corners to define polygon! May be removed immediately");

            this.add_corners(corners);
            //XXX: This also calls update_polygon();
        } else {
            this.update_polygon();
        }
    }

    corners_visible() {
        return this.#show_corners;
    }

    update_show_corners(show_corners:boolean) {
        this.#show_corners = show_corners;

        if(this.#show_corners) {
            //Show layers
            for(let feature of this.#corners)
                this._add_layer_to_map(feature);
        } else {
            //Hide layers
            for(let feature of this.#corners)
                this._remove_layer_from_map(feature);
        }
    }

    set_planner(planner:NeuronPlanner) {
        this.#planner = planner;
    }

    _set_on_change_internal(on_change:()=>void=null) {
        this.#on_change_internal = on_change;
    }

    #array_move(arr:any[], old_index:number, new_index:number) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        // return arr; // for testing
    }

    #array_move_cyclic(arr:any[], old_index:number, diff:number) {
        let new_index = (old_index + diff) % arr.length;
        if(new_index < 0) {
            new_index += arr.length;
        }
        this.#array_move(this.#corners, old_index, new_index);
    }

    move_corner_forwards(corner:L.Marker) {
        const ind = this.#corners.indexOf(corner);

        if(ind >= 0) {
            this.#array_move_cyclic(this.#corners, ind, -1);
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    move_corner_backwards(corner:L.Marker) {
        const ind = this.#corners.indexOf(corner);
        if(ind >= 0) {
            this.#array_move_cyclic(this.#corners, ind, 1);
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    select_corner(corner:L.Marker) {
        const ind = this.#corners.indexOf(corner);

        if(ind >= 0) {
            this.#selected_corner = ind;
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    #select_corner_by_event(event:L.LeafletEvent) {
        this.select_corner(event.target);
    }

    get_polygon() {
        return this.#polygon;
    }

    #generate_popup(context:L.Marker) {
        const menu_items = [
            new LeafletContextMenuItem("Show in plan", NeuronIcons.PLAN_LIST, this.show_on_plan.bind(this)),
            null,
            new LeafletContextMenuItem("Move forward", NeuronIcons.ARROW_LEFT, this.move_corner_forwards.bind(this)),
            new LeafletContextMenuItem("Move backward", NeuronIcons.ARROW_RIGHT, this.move_corner_backwards.bind(this)),
            null,
            new LeafletContextMenuItem("Remove", NeuronIcons.DELETE, this.remove_point_by_corner.bind(this)),
        ]
        context.bindPopup(create_popup_context_dom(this.#label ? this.#label : "Polygon Corner", menu_items, context));
    }

    add_corner(corner:NeuronInterfacePoint, update_polygon=true) {
        if(this.#selected_corner < 0 || this.#selected_corner >= this.#corners.length)
            this.#selected_corner = Math.min(this.#corners.length - 1, 0)

        let m = L.marker([corner.latitude, corner.longitude], {
            draggable: true,
            autoPan: true,
            icon: get_neuron_map_marker('neuron-marker-corner')
        })

        m.on("drag", this.update_polygon.bind(this));
        m.on("click", this.#select_corner_by_event.bind(this));
        m.on("dblclick", this.#remove_point_by_event.bind(this));
        this.#generate_popup(m);

        this.#corners.splice(this.#selected_corner, 0, m);
        if(this.#show_corners)
            this._add_layer_to_map(m);

        if(update_polygon)
            this.update_polygon();
    }

    show_on_plan() {
        if(this.#dom) {
            window.neuron_set_panel_view(InterfaceSummaryTabName.PLAN);
            this.#dom.scrollIntoView();
            this.#dom.classList.remove('mission-feature-highlight-remove');
            this.#dom.classList.add('mission-feature-highlight');
            setTimeout(this.#remove_dom_highlight.bind(this), 1000);
        }
    }

    #remove_dom_highlight() {
        if(this.#dom) {
            this.#dom.classList.remove('mission-feature-highlight');
            this.#dom.classList.add('mission-feature-highlight-remove');
        }
    }

    add_corners(corners:NeuronInterfacePoint[]=[]) {
        for(const c of corners)
            this.add_corner(c, false);

        //Do this manually at the end
        this.update_polygon();
    }

    get_corners() {
        return this.#corners;
    }

    get_corners_as_points() {
        return this.#corners.map(p => NeuronInterfacePoint.from_leaflet(p.getLatLng()));
    }

    #remove_point_by_event(event:L.LeafletEvent) {
        this.remove_point_by_corner(event.target);
    }

    remove_point_by_corner(corner:L.Marker) {
        const ind = this.#corners.indexOf(corner);
        if(ind >= 0) {
            this._remove_layer_from_map(corner); //Remove from map
            this.#corners.splice(ind, 1);   //Remove from list
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    #add_point_at_mouseevent(event:L.LeafletMouseEvent) {
        if(this.#polygon && this.#show_corners) {
            // const c = this.#polygon.getCenter();
            // const dx = b._northEast.lng - b._southWest.lng;
            // const dy = b._northEast.lat - b._southWest.lat;
            // const p = new NeuronMapPoint(b._southWest.lat + dy / 2, b._southWest.lng + dx / 2);
            const p = NeuronInterfacePoint.from_leaflet(event.latlng);

            this.add_corner(p);
        }
    }

    add_point_at_location() {
        if(this.#polygon) {
            const b = this.#polygon.getBounds();
            const ne = b.getNorthEast();
            const sw = b.getSouthWest();
            const dx = ne.lng - sw.lng;
            const dy = ne.lat - sw.lat;
            const p = new NeuronInterfacePoint(sw.lat + dy / 2, sw.lng + dx / 2);

            this.add_corner(p);
        }
    }

    update_polygon() {
        if(this.#corners.length > 1) {
            let corners = [];

            for(const c of this.#corners) {
                corners.push(c.getLatLng());
            }

            if(this.#polygon) {
                //Update the existing polygon
                // console.log(this.#polygon);
                this.#polygon.setLatLngs(corners);
            } else{
                //Create a new polygon
                this.#polygon = L.polygon(corners, {color: 'red'});
                this.#polygon.on("click", this.#add_point_at_mouseevent.bind(this));
                this._add_layer_to_map(this.#polygon);
            }
        } else {
            this.remove_feature();
        }

        if(this.#on_change_internal)
            this.#on_change_internal();
        this._trigger_on_changed();

        this.#try_update_dom();
    }

    #get_corners_as_utm() {
        const points = this.get_corners_as_points();

        if(points.length <= 2)
            return []

        const u1 = points[0].to_UTM();
        return points.map(x => x.to_UTM(u1.zone));
    }

    get_perimeter() {
        const utm_points = this.#get_corners_as_utm();

        if(utm_points.length <= 1)
            return 0;

        let length = 0;
        for(let i = 0; i < utm_points.length; i++) {
            const p1 = utm_points[i];
            const p2 = i < (utm_points.length - 1) ? utm_points[i+1] : utm_points[0];
            length += p1.GetDistance2D(p2);
        }

        return length * NeuronFeaturePolygon._distance_ratio;
    }

    get_area() {
        const utm_points = this.#get_corners_as_utm();
        if(utm_points.length <= 2)
            return 0;

        return UTMPos.AreaOfPolygon(utm_points) * NeuronFeaturePolygon._area_ratio;
    }

    #try_update_dom() {
        if(this.#dom_corner_count)
            this.#dom_corner_count.value = this.#corners.length.toFixed(0);

        if(this.#dom_perimeter) {
            const perimeter = this.get_perimeter();
            this.#dom_perimeter.value = perimeter > 0 ? perimeter.toFixed(3) : "---";
        }

        if(this.#dom_area) {
            const area = this.get_area();
            this.#dom_area.value = area > 0 ? area.toFixed(3) : "---";
        }
    }

    #convert_to_survey() {
        if(this.#planner) {
            this.#planner.replace_polygon_with_survey(this);
        } else {
            console.warn("Planner not set, cannot convert polygon feature!");
        }
    }

    #export_as_kml() {
        kml_download_from_neuron_data([], [], [this.get_corners_as_points()]);
    }

    #export_as_kmz() {
        kmz_download_from_neuron_data([], [], [this.get_corners_as_points()]);
    }

    override show_help() {
        window.neuron_map.show_map_help(true, `${NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeaturePolygon.HELP_KEY}`);
    }

    override remove_feature() {
        for(const c of this.#corners) {
            this._remove_layer_from_map(c);
        }
        this.#corners = [];

        if(this.#polygon) {
            this._remove_layer_from_map(this.#polygon);
            this.#polygon = null;
        }

        super.remove_feature();
    }

    //override get_path_coords() {} //XXX: No paths provided by this feature, use base return

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Polygon");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            //Output items
            const t4 = "Number of corners that define this polygon's boundaries";
            this.#dom_corner_count = this._create_dom_output();
            this.#dom_corner_count.title = t4;
            c.appendChild(this._create_dom_label("Corners:", this.#dom_corner_count, t4));
            c.appendChild(this.#dom_corner_count);

            const t41 = "Perimeter of this polygon as defined by it's boundaries in kilometers";
            this.#dom_perimeter = this._create_dom_output();
            this.#dom_perimeter.title = t41;
            c.appendChild(this._create_dom_label("Perimeter (km):", this.#dom_perimeter, t41));
            c.appendChild(this.#dom_perimeter);

            const t42 = "Area of this polygon as defined by it's boundaries in square kilometers";
            this.#dom_area = this._create_dom_output();
            this.#dom_area.title = t42;
            const t42_ld = document.createElement("span");
            t42_ld.appendChild(document.createTextNode("Area (km"));
            const t42_lds = document.createElement("sup");
            t42_lds.appendChild(document.createTextNode("2"));
            t42_ld.appendChild(t42_lds);
            t42_ld.appendChild(document.createTextNode("):"));
            c.appendChild(this._create_dom_label(t42_ld, this.#dom_area, t42));
            c.appendChild(this.#dom_area);

            this.#try_update_dom();

            //Input Items
            const t21 = "Show the corners of the polygon";
            this.#dom_show_corners = this._create_dom_input_checkbox(this.corners_visible(), this.#update_show_corners_from_dom.bind(this));
            this.#dom_show_corners.title = t21;
            c.appendChild(this._create_dom_label("Show corners:", this.#dom_show_corners, t21));
            c.appendChild(this.#dom_show_corners);

            const t22 = "Text label for identification of the polygon";
            this.#dom_label = this._create_dom_input_textbox(this.#label, this.#update_label_from_dom.bind(this));
            this.#dom_label.title = t22;
            c.appendChild(this._create_dom_label("Label:", this.#dom_label, t22));
            c.appendChild(this.#dom_label);

            const t0 = "Convert this polygon to a survey feature";
            this.#dom_convert_survey = this._create_dom_input_button("Survey", this.#convert_to_survey.bind(this));
            this.#dom_convert_survey.title = t0;
            c.appendChild(this._create_dom_label("Convert to:", this.#dom_convert_survey, t0));
            c.appendChild(this.#dom_convert_survey);

            const t1 = "Export this polygon to a drawing document";
            const t11 = "Export this polygon to a KML document";
            const t12 = "Export this polygon to a KMZ document";
            this.#dom_export_kml = this._create_dom_input_button("KML", this.#export_as_kml.bind(this));
            this.#dom_export_kml.title = t11;
            c.appendChild(this._create_dom_label("Export as:", this.#dom_export_kml, t1));
            c.appendChild(this.#dom_export_kml);

            this.#dom_export_kmz = this._create_dom_input_button("KMZ", this.#export_as_kmz.bind(this));
            this.#dom_export_kmz.title = t12;
            c.appendChild(this._create_dom_label("Export as:", this.#dom_export_kmz, t1, true));
            c.appendChild(this.#dom_export_kmz);

            // c.appendChild(this._create_dom_labelled_input("", this.#dom_export_shape.bind(this)));


            this.#dom.append(c);
        }

        return this.#dom;
    }

    #update_show_corners_from_dom() {
        this.update_show_corners(this.#dom_show_corners.checked);
    }

    #update_label_from_dom() {
        this.set_label(this.#dom_label.value, false);
    }

    get_label() {
        return this.#label;
    }

    set_label(label:string, update_dom:boolean = true) {
        this.#label = label;
        if(this.#dom_label && update_dom)
            this.#dom_label.value = label;

        for(let m of this.#corners)
            this.#generate_popup(m);
    }

    static override isObjectOfDataType(object: any): object is NeuronFeaturePolygonData {
        let is_valid =
            (object.type == NeuronFeaturePolygon.TYPE) &&
            (object.version == NeuronFeaturePolygon.VERSION);

        return is_valid;
    }

    static from_json(j:NeuronFeaturePolygonData, map:L.Map) {
        //XXX: Implement this per inherited feature
        if(!NeuronFeaturePolygon.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeaturePolygon`);

        const corners = j.corners.map(x => NeuronInterfacePoint.from_json(x));
        let p = new NeuronFeaturePolygon(map, corners);
        p.set_label(j.label.toString());
        return p;
    }

    override to_json() {
        //XXX: Implement this per inherited feature
        return <NeuronFeaturePolygonData>{
            version: NeuronFeaturePolygon.VERSION,
            type: NeuronFeaturePolygon.TYPE,
            corners: this.get_corners_as_points().map(x => x.to_json()),
            label: this.#label,
        }
    }
}
