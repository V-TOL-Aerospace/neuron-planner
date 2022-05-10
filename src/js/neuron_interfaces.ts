import { L } from "./leaflet_interface";
import { UTMPos } from "./proj4_interface";

// @ts-ignore
// import * as UTMConverter from "utm-latlng";

export interface NeuronInterfacePointHaversine {
    lat:number;
    lng:number;
}

export class NeuronInterfacePoint {
    latitude: number;
    longitude: number;
    altitude:number;

    constructor(latitude=0.0, longitude=0.0, altitude=0.0) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }

    static projection_code() {
        return 'WGS84';
    }

    equals(other:NeuronInterfacePoint) {
        return this.latitude == other.latitude &&
               this.longitude == other.longitude &&
               this.altitude == other.altitude;
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

    to_UTM(zone:number = null, tag:string = "") {
        return UTMPos.from_NeuronInterfacePoint(this, zone, tag);
    }

    static from_UTM(utm:UTMPos) {
        return utm.to_NeuronInterfacePoint();
    }

    static from_UTMs(utms:UTMPos[]) {
        return utms.map(p => p.to_NeuronInterfacePoint());
    }
}
