import { L } from "./leaflet_interface";
import { UTMPos } from "./proj4_interface";

// @ts-ignore
// import * as UTMConverter from "utm-latlng";

let lastId = 0;
export function NeuronUID(prefix='nuid-') {
    lastId++;
    return `${prefix}${lastId}`;
}

const zeroPad = (num:number, places:number) => String(num).padStart(places, '0');

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

    #value_as_DMS(dd:number, is_lng:boolean) {
        const dir = dd < 0 ? (is_lng ? "W" : "S") : is_lng ? "E" : "N";
        const deg = 0 | (dd < 0 ? (dd = -dd) : dd);
        const min = 0 | (((dd += 1e-9) % 1) * 60);
        const sec = (0 | (((dd * 60) % 1) * 6000)) / 100;

        return `${zeroPad(deg,2)}° ${zeroPad(min,2)}' ${zeroPad(sec,2)}" ${dir}`;
      }

    toString() {
         return `[${this.#value_as_DMS(this.latitude, false)}, ${this.#value_as_DMS(this.longitude, false)}, ${this.altitude.toFixed(2)}m]`;
     }
}
