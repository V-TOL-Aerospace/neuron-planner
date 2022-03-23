class NeuronMapPolygon {
    #corners;
    #polygon;
    #map;
    #leaflet;

    //Corners is a list of NeuronMapPoints
    constructor(leaflet=L, map=null, corners=[]) {
        this.#leaflet = leaflet;
        this.#map = map;

        this.#corners = [];
        if(corners.length) {
            this.add_corners(corners);
            //XXX: This also calls update_polygon();
        } else {
            this.update_polygon();
        }
    }

    #array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        // return arr; // for testing
    }

    #array_move_cyclic(arr, old_index, diff) {
        let new_index = (old_index + diff) % arr.length;
        if(new_index < 0) {
            new_index += arr.length;
        }
        this.#array_move(this.#corners, old_index, new_index);
    }

    move_corner_forwards_by_context(context) {
        this.move_corner_forwards(context.relatedTarget);
    }

    move_corner_backwards_by_context(context) {
        this.move_corner_backwards(context.relatedTarget);
    }

    move_corner_forwards(corner) {
        const ind = this.#corners.indexOf(corner);

        if(ind >= 0) {
            this.#array_move_cyclic(this.#corners, ind, -1);
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    move_corner_backwards(corner) {
        const ind = this.#corners.indexOf(corner);
        if(ind >= 0) {
            this.#array_move_cyclic(this.#corners, ind, 1);
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    add_corners(corners=[]) {
        for(const c of corners) {
            let m = this.#leaflet.marker([c.latitude, c.longitude],{
                draggable: true,
                autoPan: true,
                contextmenu: true,
                contextmenuWidth: 140,
                contextmenuItems: [{
                    text: 'Move forward',
                    callback: this.move_corner_forwards_by_context.bind(this)
                }, {
                    text: 'Move backwards',
                    callback: this.move_corner_backwards_by_context.bind(this)
                },
                '-',
                {
                    text: 'Delete',
                    icon: 'img/v_icons/v_exit_icon.png',
                    callback: this.remove_point_by_context.bind(this)
                }]
            })

            //TODO: review: Could also use "dragend"?
            m.on("drag", this.update_polygon.bind(this));
            m.on("dblclick", this.remove_point_by_event.bind(this));
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
            if(this.#map)
                m.addTo(this.#map);
        }

        this.update_polygon();
    }

    remove_point_by_context(context) {
        this.remove_point_by_corner(context.relatedTarget);
    }

    remove_point_by_event(event) {
        this.remove_point_by_corner(event.target);
    }

    remove_point_by_corner(corner) {
        const ind = this.#corners.indexOf(corner);
        if(ind >= 0) {
            corner.remove();                //Remove from map
            this.#corners.splice(ind, 1); //Remove from list
            this.update_polygon();          //Redraw
        } else {
            console.warn("Provided corner is not part of this polygon!");
        }
    }

    add_point_at_event(event) {
        if(this.#polygon) {
            // const c = this.#polygon.getCenter();
            // const dx = b._northEast.lng - b._southWest.lng;
            // const dy = b._northEast.lat - b._southWest.lat;
            // const p = new NeuronMapPoint(b._southWest.lat + dy / 2, b._southWest.lng + dx / 2);
            const p = new NeuronMapPoint(event.latlng.lat, event.latlng.lng);

            this.add_corners([p]);
        }
    }

    add_point_at_location() {
        if(this.#polygon) {
            const b = this.#polygon.getBounds();
            const dx = b._northEast.lng - b._southWest.lng;
            const dy = b._northEast.lat - b._southWest.lat;
            const p = new NeuronMapPoint(b._southWest.lat + dy / 2, b._southWest.lng + dx / 2);

            this.add_corners([p]);
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
                this.#polygon = this.#leaflet.polygon(corners, {color: 'red'});
                this.#polygon.on("click", this.add_point_at_event.bind(this));
                if(this.#map)
                    this.#polygon.addTo(this.#map);
            }
        } else {
            for(const c of this.#corners) {
                c.remove();
            }
            this.#corners = [];

            this.#polygon?.remove();
            this.#polygon = null;

            //TODO: Trigger an update to remove this feature all together
        }
    }

    get_features() {
        let l = [];
        if(this.#polygon) {
            l.push(this.#polygon);
        }
        return l.concat(this.#corners);
    }
}