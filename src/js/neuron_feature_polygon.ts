import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint } from "./neuron_interfaces";
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export class NeuronFeaturePolygon extends NeuronFeatureBase {
    #corners:L.Marker[];
    #polygon:L.Polygon;
    #selected_corner:number;
    #on_change_internal:CallableFunction;
    #dom:HTMLDivElement;
    #dom_corner_count:HTMLDivElement;

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        super(map, on_remove, on_change);
        this.#on_change_internal = null;
        this.#dom = null;
        this.#dom_corner_count = null;

        this.#selected_corner = 0;
        this.#corners = [];
        if(corners.length) {
            if(corners.length == 1)
                console.warn("Insufficient number of corners to define polygon! May be removed imidiately");

            this.add_corners(corners);
            //XXX: This also calls update_polygon();
        } else {
            this.update_polygon();
        }
    }

    _set_on_change_internal(on_change:CallableFunction=null) {
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

    add_corner(corner:NeuronInterfacePoint, update_polygon=true) {
        if(this.#selected_corner < 0 || this.#selected_corner >= this.#corners.length)
            this.#selected_corner = Math.min(this.#corners.length - 1, 0)

        let m = L.marker([corner.latitude, corner.longitude], {
            draggable: true,
            autoPan: true,
        })

        const menu_items = [
            new LeafletContextMenuItem("Move forward", "fa-arrow-left", this.move_corner_forwards.bind(this)),
            new LeafletContextMenuItem("Move backward", "fa-arrow-right", this.move_corner_backwards.bind(this)),
            null,
            new LeafletContextMenuItem("Remove", "fa-trash", this.remove_point_by_corner.bind(this)),
        ]
        m.bindPopup(create_popup_context_dom("Polygon Corner", menu_items, m));

        //TODO: review: Could also use "dragend"?
        m.on("drag", this.update_polygon.bind(this));
        m.on("click", this.#select_corner_by_event.bind(this));
        m.on("dblclick", this.#remove_point_by_event.bind(this));

        this.#corners.splice(this.#selected_corner, 0, m);
        this._add_feature_to_map(m);

        if(update_polygon)
            this.update_polygon();
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
            corner.remove();                //Remove from map
            this.#corners.splice(ind, 1);   //Remove from list
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    #add_point_at_mouseevent(event:L.LeafletMouseEvent) {
        if(this.#polygon) {
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
                this._add_feature_to_map(this.#polygon);
            }
        } else {
            this.remove_feature();
        }

        if(this.#on_change_internal)
            this.#on_change_internal();
        this._trigger_on_changed();

        this.#try_update_dom();
    }

    #try_update_dom() {
        if(this.#dom_corner_count) {
            this.#dom_corner_count.innerHTML = '';
            this.#dom_corner_count.appendChild(document.createTextNode(`Corners: ${this.#corners.length}`));
        }
    }

    override remove_feature() {
        for(const c of this.#corners) {
            c.remove();
        }
        this.#corners = [];

        this.#polygon?.remove();
        this.#polygon = null;

        super.remove_feature();
    }

    //override get_path_coords() {} //XXX: No paths provided by this feature, use base return

    override get_dom() {
        if(!this.#dom) {
            this.#dom = this._get_dom("Polygon");

            let c = document.createElement("div");
            c.className = 'mission-feature-content';

            this.#dom_corner_count = document.createElement("div");
            this.#dom_corner_count.className = 'mission-feature-content-item';
            this.#try_update_dom();
            c.appendChild(this.#dom_corner_count);

            this.#dom.append(c);
        }

        return this.#dom;
    }
}
