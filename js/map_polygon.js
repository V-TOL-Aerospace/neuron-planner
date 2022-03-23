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

    add_corners(corners=[]) {
        for(const c of corners) {
            let m = this.#leaflet.marker([c.latitude, c.longitude],{
                draggable: true,
                autoPan: true
            })

            //TODO: review: Could also use "dragend"?
            m.on("drag", this.update_polygon.bind(this));
            m.on("dblclick", this.remove_point_by_event.bind(this));
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

    add_point_at_center() {
        if(this.#polygon) {
            const b = this.#polygon.getBounds();
            const dx = b._northEast.lng - b._southWest.lng;
            const dy = b._northEast.lat - b._southWest.lat;
            const p = new NeuronMapPoint(b._southWest.lat + dy / 2, b._southWest.lng + dx / 2);
            
            this.add_corners([p]);
        }
    }

    update_polygon() {
        if(this.#corners.length) {
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
                this.#polygon.on("click", this.add_point_at_center.bind(this));
                if(this.#map)
                    this.#polygon.addTo(this.#map);
            }
        } else {
            this.#polygon?.remove();
            this.#polygon = null;
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