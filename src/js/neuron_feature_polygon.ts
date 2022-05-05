import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint } from "./neuron_interface_point";
import { L, create_popup_context_dom, LeafletContextMenuItem } from "./leaflet_interface";

export class NeuronFeaturePolygon extends NeuronFeatureBase {
    #corners:L.Marker[];
    #polygon:L.Polygon;

    constructor(map:L.Map, corners:NeuronInterfacePoint[]=[], on_remove:CallableFunction=null, on_change:CallableFunction=null) {
        super(map, on_remove, on_change);

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

    add_corner(corner:NeuronInterfacePoint, update_polygon=true) {
        let m = L.marker([corner.latitude, corner.longitude], {
            draggable: true,
            autoPan: true,
            // @ts-ignore
            // contextmenu: true,
            // contextmenuWidth: 140,
            // contextmenuItems: [{
            //     text: 'Move forward',
            //     callback: this.#move_corner_forwards_by_context.bind(this)
            // }, {
            //     text: 'Move backwards',
            //     callback: this.#move_corner_backwards_by_context.bind(this)
            // },
            // '-',
            // {
            //     text: 'Delete',
            //     icon: 'img/v_icons/v_exit_icon.png',
            //     callback: this.#remove_point_by_context.bind(this)
            // }]
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
        m.on("dblclick", this.#remove_point_by_event.bind(this));
        // m.on("contextmenu", this.remove_point_by_event.bind(this));

        /*
        function(e) {
            this.update_polygon();
            // var marker = e.target;
            // var position = marker.getLatLng();
            // map.panTo(new L.LatLng(position.lat, position.lng));
        });
        */

        this.#corners.push(m);
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

    #remove_point_by_event(event:L.LocationEvent) {
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

    #add_point_at_event(event:L.LeafletMouseEvent) {
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

    remove_feature() {
        for(const c of this.#corners) {
            c.remove();
        }
        this.#corners = [];

        this.#polygon?.remove();
        this.#polygon = null;

        super.remove_feature();
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
                this.#polygon.on("click", this.#add_point_at_event.bind(this));
                this._add_feature_to_map(this.#polygon);
            }
        } else {
            this.remove_feature();
        }

        this._trigger_on_changed();
    }
}