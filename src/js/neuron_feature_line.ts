import { NeuronFeatureBase } from "./neuron_feature_base";
import { InterfaceSummaryTabName, NeuronInterfacePoint, NeuronInterfacePointData } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem, get_neuron_map_marker } from "./interface_leaflet";
import { kml_download_from_neuron_data, kmz_download_from_neuron_data } from "./neuron_tools_kml";
import { NeuronHelp } from "./neuron_help";
import { NeuronIcons } from "./interface_fontawesome";

//TODO: Document
export interface NeuronFeatureLineData {
    version:string;
    type:string;
    start:NeuronInterfacePointData;
    end:NeuronInterfacePointData;
    label:string;
}

//TODO: Document
export class NeuronFeatureLine extends NeuronFeatureBase {
    static override NAME = "Line";
    static override TYPE = "NeuronFeatureLine";
    static override VERSION = 'bd03b410-ed17-11ec-ada3-676515aa426a';
    static override HELP_KEY = 'line';

    #show_ends:boolean

    #label:string;
    #start:L.Marker;
    #end:L.Marker;
    #line:L.Polyline;
    #on_change_internal:()=>void;
    #dom:HTMLDivElement;
    #dom_length:HTMLOutputElement;
    #dom_bearing:HTMLOutputElement;
    #dom_show_ends:HTMLInputElement;
    #dom_label:HTMLInputElement;
    #dom_export_kml:HTMLButtonElement;
    #dom_export_kmz:HTMLButtonElement;

    constructor(map:L.Map, start:NeuronInterfacePoint=null, end:NeuronInterfacePoint=null) {
        super(map);
        this.#on_change_internal = null;
        this.#dom = null;
        this.#dom_length = null;
        this.#dom_export_kml = null;
        this.#dom_export_kmz = null;
        this.#label = "";
        this.#line = null;
        this.#show_ends = true;
        this.set_start(start);
        this.set_end(end);
        //XXX: update_line() called by start and end
    }

    set_start(point:NeuronInterfacePoint) {
        if(this.#start) {
            //Update the existing polygon
            // console.log(this.#polygon);
            this.#start.setLatLng(point.to_leaflet());
        } else {
            let m = L.marker(point.to_leaflet(), {
                draggable: true,
                autoPan: true,
                icon: get_neuron_map_marker('neuron-marker-line-start')
            })

            const menu_items = [
                new LeafletContextMenuItem("Show in plan", NeuronIcons.PLAN_LIST, this.show_on_plan.bind(this)),
                null,
                new LeafletContextMenuItem("Remove", NeuronIcons.DELETE, this.remove_feature.bind(this)),
            ]
            m.bindPopup(create_popup_context_dom("Line End", menu_items, m));

            m.on("drag", this.update_line.bind(this));
            m.on("dblclick", this.#remove_by_event.bind(this));

            this.#start = m;
            if(this.#show_ends)
                this._add_layer_to_map(m);
        }

        this.update_line();
    }

    set_end(point:NeuronInterfacePoint) {
        if(this.#end) {
            //Update the existing polygon
            // console.log(this.#polygon);
            this.#end.setLatLng(point.to_leaflet());
        } else {
            let m = L.marker(point.to_leaflet(), {
                draggable: true,
                autoPan: true,
                icon: get_neuron_map_marker('neuron-marker-line-end')
            })

            const menu_items = [
                new LeafletContextMenuItem("Show in plan", NeuronIcons.PLAN_LIST, this.show_on_plan.bind(this)),
                null,
                new LeafletContextMenuItem("Remove", NeuronIcons.DELETE, this.remove_feature.bind(this)),
            ]
            m.bindPopup(create_popup_context_dom("Line End", menu_items, m));

            m.on("drag", this.update_line.bind(this));
            m.on("dblclick", this.#remove_by_event.bind(this));

            this.#end = m;
            if(this.#show_ends)
                this._add_layer_to_map(m);
        }

        this.update_line();
    }

    update_line() {
        if((this.#start != null) && (this.#end != null)) {
            //Add or update the line
            if(this.#line) {
                this.#line.setLatLngs([this.#start.getLatLng(), this.#end.getLatLng()]);
            } else {
                this.#line = L.polyline([this.#start.getLatLng(), this.#end.getLatLng()], {color: 'violet'});
                // this.#line.on("click", this.#add_point_at_mouseevent.bind(this));
                if(this.#show_ends)
                    this._add_layer_to_map(this.#line);
            }
        } else {
            //Remove the line
            this._remove_layer_from_map(this.#line);
            this.#line = null;
        }

        this.#try_update_dom();
    }

    corners_visible() {
        return this.#show_ends;
    }

    update_show_ends(show_ends:boolean) {
        this.#show_ends = show_ends;

        if(this.#show_ends) {
            //Show layers
            this._add_layer_to_map(this.#start);
            this._add_layer_to_map(this.#end);
        } else {
            //Hide layers
            this._remove_layer_from_map(this.#start);
            this._remove_layer_from_map(this.#end);
        }
    }

    _set_on_change_internal(on_change:()=>void=null) {
        this.#on_change_internal = on_change;
    }

    get_line() {
        return this.#line;
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

    #remove_by_event(event:L.LeafletEvent) {
        this.remove_feature();
    }

    #try_update_dom() {
        if(this.#dom_length) {
            let dist = 0;
            if(this.#start && this.#end) {
                let p1 = NeuronInterfacePoint.from_leaflet(this.#start.getLatLng());
                let p2 = NeuronInterfacePoint.from_leaflet(this.#end.getLatLng());
                let u1 = p1.to_UTM();
                let u2 = p2.to_UTM(u1.zone);
                dist = u1.GetDistance2D(u2) * NeuronFeatureLine._distance_ratio;
            }
            this.#dom_length.value = dist.toFixed(3);
        }

        if(this.#dom_bearing) {
            let bearing = 0;
            if(this.#start && this.#end) {
                let p1 = NeuronInterfacePoint.from_leaflet(this.#start.getLatLng());
                let p2 = NeuronInterfacePoint.from_leaflet(this.#end.getLatLng());
                let u1 = p1.to_UTM();
                let u2 = p2.to_UTM(u1.zone);
                let angle = u1.GetAngle(u2);
                bearing = ((Math.PI/2 - angle)*180/Math.PI) % 360;
                if(bearing < 0)
                    bearing += 360
            }
            this.#dom_bearing.value = bearing.toFixed(2);
        }
    }

    get_ends_as_points() {
        let ends:NeuronInterfacePoint[] = [];
        if (this.#start && this.#end) {
            ends.push(NeuronInterfacePoint.from_leaflet(this.#start.getLatLng()));
            ends.push(NeuronInterfacePoint.from_leaflet(this.#end.getLatLng()));
        }
        return ends;
    }

    #export_as_kml() {
        kml_download_from_neuron_data([], [this.get_ends_as_points()], []);
    }

    #export_as_kmz() {
        kmz_download_from_neuron_data([], [this.get_ends_as_points()], []);
    }

    override show_help() {
        window.neuron_map.show_map_help(true, `${NeuronHelp.HELP_PREFIX_MISSION}-${NeuronFeatureLine.HELP_KEY}`);
    }

    override remove_feature() {
        if(this.#start) {
            this._remove_layer_from_map(this.#start);
            this.#start = null;
        }

        if(this.#end) {
            this._remove_layer_from_map(this.#end);
            this.#end = null;
        }

        if(this.#line) {
            this._remove_layer_from_map(this.#line);
            this.#line = null;
        }

        super.remove_feature();
    }

    //override get_path_coords() {} //XXX: No paths provided by this feature, use base return

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Line");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            //Output items
            const t4 = "Length of the line from start to end in kilometers";
            this.#dom_length = this._create_dom_output();
            this.#dom_length.title = t4;
            c.appendChild(this._create_dom_label("Length:", this.#dom_length, t4));
            c.appendChild(this.#dom_length);

            const t5 = "Angle from North in degrees that the line makes from start to end";
            this.#dom_bearing = this._create_dom_output();
            this.#dom_bearing.title = t5;
            c.appendChild(this._create_dom_label("Bearing:", this.#dom_bearing, t5));
            c.appendChild(this.#dom_bearing);

            this.#try_update_dom();

            //Input Items
            const t21 = "Show the corners of the polygon";
            this.#dom_show_ends = this._create_dom_input_checkbox(this.corners_visible(), this.#update_show_corners_from_dom.bind(this));
            this.#dom_show_ends.title = t21;
            c.appendChild(this._create_dom_label("Show corners:", this.#dom_show_ends, t21));
            c.appendChild(this.#dom_show_ends);

            const t22 = "Text label for identification of the polygon";
            this.#dom_label = this._create_dom_input_textbox(this.#label, this.#update_label_from_dom.bind(this));
            this.#dom_label.title = t22;
            c.appendChild(this._create_dom_label("Label:", this.#dom_label, t22));
            c.appendChild(this.#dom_label);

            const t1 = "Export this line to a drawing document";
            const t11 = "Export this line to a KML document";
            const t12 = "Export this line to a KMZ document";
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
        this.update_show_ends(this.#dom_show_ends.checked);
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
    }

    static override isObjectOfDataType(object: any): object is NeuronFeatureLineData {
        let is_valid =
            (object.type == NeuronFeatureLine.TYPE) &&
            (object.version == NeuronFeatureLine.VERSION);

        return is_valid;
    }

    static from_json(j:NeuronFeatureLineData, map:L.Map) {
        //XXX: Implement this per inherited feature
        if(!NeuronFeatureLine.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronFeatureLine`);

        let p = new NeuronFeatureLine(map, NeuronInterfacePoint.from_json(j.start), NeuronInterfacePoint.from_json(j.end));
        p.set_label(j.label.toString());
        return p;
    }

    override to_json() {
        //XXX: Implement this per inherited feature
        return <NeuronFeatureLineData>{
            version: NeuronFeatureLine.VERSION,
            type: NeuronFeatureLine.TYPE,
            start: this.#start ? NeuronInterfacePoint.from_leaflet(this.#start.getLatLng()) : new NeuronInterfacePoint(),
            end: this.#end ? NeuronInterfacePoint.from_leaflet(this.#end.getLatLng()) : new NeuronInterfacePoint(),
            label: this.#label,
        }
    }
}
