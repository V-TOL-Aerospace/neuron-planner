import { L } from "./leaflet_interface";
import { UTMPos } from "./proj4_interface";

// @ts-ignore
// import * as UTMConverter from "utm-latlng";

let lastId = 0;
export function NeuronUID(prefix='nuid-') {
    lastId++;
    return `${prefix}${lastId}`;
}

export interface NeuronInterfacePointData {
    latitude: number;
    longitude: number;
    altitude:number;
}

export class NeuronInterfacePoint {
    latitude: number;
    longitude: number;
    altitude:number;

    constructor(latitude:number=0.0, longitude:number=0.0, altitude:number=0.0) {
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

    to_UTM(zone:number = null, tag:string = "") {
        return UTMPos.from_NeuronInterfacePoint(this, zone, tag);
    }

    static from_UTM(utm:UTMPos) {
        return utm.to_NeuronInterfacePoint();
    }

    static from_UTMs(utms:UTMPos[]) {
        return utms.map(p => p.to_NeuronInterfacePoint());
    }

    static isObjectOfDataType(object: any): object is NeuronInterfacePointData {
        let is_valid =
            Number.isFinite(object.latitude) ||
            Number.isFinite(object.longitude) ||
            Number.isFinite(object.altitude);

        return is_valid;
    }

    static from_json(j:NeuronInterfacePointData) {
        if(!NeuronInterfacePoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronInterfacePoint`);

        return new NeuronInterfacePoint(j.latitude, j.longitude, j.altitude);
    }

    to_json() {
        return <NeuronInterfacePointData>{
            latitude: this.latitude,
            longitude: this.longitude,
            altitude:this.altitude,
        }
    }
}
