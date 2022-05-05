import { L } from "./leaflet_interface";

export interface NeuronInterfacePointHaversine {
    lat:number;
    lng:number;
}

export class NeuronInterfacePoint {
    latitude: number;
    longitude: number;

    constructor(latitude=0.0, longitude=0.0) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    to_leaflet() {
        return L.latLng([this.latitude, this.longitude]);
    }

    static from_leaflet(latlng:L.LatLng) {
        return new NeuronInterfacePoint(latlng.lat, latlng.lng);
    }

    to_haversine() {
        const h:NeuronInterfacePointHaversine = {
            lat: this.latitude,
            lng: this.longitude
        }
        return h;
    }
}
