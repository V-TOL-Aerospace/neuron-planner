import { L } from "./interface_leaflet";
import { Rect } from "./neuron_tools_survey";
import { UTMPos } from "./interface_proj4";

// @ts-ignore
// import * as UTMConverter from "utm-latlng";

export interface NeuronInterfacePointData {
    latitude: number;
    longitude: number;
    altitude:number;
    heading:number;
    tag:string;
}

export class NeuronInterfacePoint {
    latitude: number;
    longitude: number;
    altitude:number;
    heading:number;
    tag:string;

    static _altitude_ratio = 0.3048;

    constructor(latitude:number=0.0, longitude:number=0.0, altitude:number=0.0, heading:number=0.0, tag:string="") {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
        this.heading = heading;
        this.tag = tag;
    }

    static projection_code() {
        return 'WGS84';
    }

    equals(other:NeuronInterfacePoint) {
        return this.latitude == other.latitude &&
               this.longitude == other.longitude &&
               this.altitude == other.altitude &&
               this.heading == other.heading;
    }

    to_leaflet() {
        return L.latLng([this.latitude, this.longitude]);
    }

    static from_leaflet(latlng:L.LatLng) {
        return new NeuronInterfacePoint(latlng.lat, latlng.lng);
    }

    to_UTM(zone:number = null) {
        return UTMPos.from_NeuronInterfacePoint(this, zone);
    }

    static from_UTM(utm:UTMPos) {
        return utm.to_NeuronInterfacePoint();
    }

    static from_UTMs(positions:UTMPos[]) {
        return positions.map(p => p.to_NeuronInterfacePoint());
    }

    static isObjectOfDataType(object: any): object is NeuronInterfacePointData {
        let is_valid =
            Number.isFinite(object.latitude) &&
            Number.isFinite(object.longitude) &&
            Number.isFinite(object.altitude) &&
            ((object.tag !== undefined) || (object.tag !== null)) ;

        return is_valid;
    }

    static from_json(j:NeuronInterfacePointData) {
        if(!NeuronInterfacePoint.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronInterfacePoint`);

        return new NeuronInterfacePoint(
            Number.isNaN(j.latitude) ? 0.0 : j.latitude,
            Number.isNaN(j.longitude) ? 0.0 : j.longitude,
            Number.isNaN(j.altitude) ? 0.0 : j.altitude,
            Number.isNaN(j.heading) ? 0.0 : j.heading,
            j.tag ? j.tag.toString() : ""
        );
    }

    to_json() {
        return <NeuronInterfacePointData>{
            latitude: this.latitude,
            longitude: this.longitude,
            altitude:this.altitude,
            heading:this.heading,
            tag:this.tag,
        }
    }

    #value_as_DMS(dd:number, is_lng:boolean) {
        const dir = dd < 0 ? (is_lng ? "W" : "S") : is_lng ? "E" : "N";
        const deg = 0 | (dd < 0 ? (dd = -dd) : dd);
        const min = 0 | (((dd += 1e-9) % 1) * 60);
        const sec = (0 | (((dd * 60) % 1) * 6000)) / 100;

        return `${deg.toFixed(0)}° ${min.toFixed(0)}' ${sec.toFixed(2)}" ${dir}`;
    }

    toString(use_imperial:boolean = true, use_decimal:boolean = false) {
        return `[${this.toStringLatitude(use_decimal)}, ${this.toStringLatitude(use_decimal)}, ${this.toStringAltitude(use_imperial)}]`;
     }

     toStringLatitude(use_decimal:boolean = false) {
        return use_decimal ? this.latitude.toFixed(8) + '°' : this.#value_as_DMS(this.latitude, false);
     }

     toStringLongitude(use_decimal:boolean = false) {
        return use_decimal ? this.longitude.toFixed(8) + '°' : this.#value_as_DMS(this.longitude, true);
     }

     toStringAltitude(use_imperial:boolean = true) {
        return use_imperial ? (this.altitude / NeuronInterfacePoint._altitude_ratio ).toFixed(2) + "'" : this.altitude.toFixed(2) + 'm';
     }
}

export interface NeuronCameraSpecificationsData {
    name:string;
    focal_length:number;    //mm
    sensor_width:number;    //mm
    sensor_height:number;   //mm
    image_width:number;     //px
    image_height:number;    //px
}

export class NeuronCameraSpecifications {
    static TYPE = "NeuronCameraSpecifications";
    static VERSION = 'c5a01d00-d4fa-11ec-95ac-1b0aaa4d0e1e';

    name:string;
    focal_length:number;    //mm
    sensor_width:number;    //mm
    sensor_height:number;   //mm
    image_width:number;     //px
    image_height:number;    //px

    constructor(name:string="Custom", focal_length:number = 0.0, sensor_width:number = 0.0, sensor_height:number = 0.0, image_width:number = 0, image_height:number = 0) {
        this.name = name;
        this.focal_length = focal_length;
        this.sensor_width = sensor_width;
        this.sensor_height = sensor_height;
        this.image_width = image_width;
        this.image_height = image_height;
    }

    copy() {
        return new NeuronCameraSpecifications(
            this.name,
            this.focal_length,
            this.sensor_width,
            this.sensor_height,
            this.image_width,
            this.image_height
        );
    }

    equals(other:NeuronCameraSpecifications) {
        return (this.name == other.name) &&
               (this.focal_length == other.focal_length) &&
               (this.sensor_width == other.sensor_width) &&
               (this.sensor_height == other.sensor_height) &&
               (this.image_width == other.image_width) &&
               (this.image_height == other.image_height);
    }

    is_valid() {
        return (this.focal_length > 0) &&
               (this.sensor_width > 0) &&
               (this.sensor_height > 0) &&
               (this.image_width > 0) &&
               (this.image_height > 0);
    }

    get_ground_resolution(distance:number) {
        let res:number = null;

        if(this.is_valid() && distance > 0) {
            //XXX: Assume square pixels
            const projection = this.get_projected_size(distance);
            if(projection) {
                res = projection.Width() / this.image_width;
            }
        }

        return res;
    }

    get_distance(ground_resolution:number) {
        let res:number = null;

        if(this.is_valid() && ground_resolution > 0) {
            //XXX: Assume square pixels
            const ground_span = this.image_width * ground_resolution;
            const fov2_w = Math.atan2(this.sensor_width, 2*this.focal_length);

            //Calculate from half the ground span for half the AoV
            res = (ground_span / 2) / Math.tan(fov2_w);
        }

        return res;
    }

    get_projection(distance:number) {
        let proj:Rect = null;

        if(this.is_valid() && distance > 0) {
            //Calculate the half field of views
            const fov2_h = Math.atan2(this.sensor_height, 2*this.focal_length);
            const fov2_w = Math.atan2(this.sensor_width, 2*this.focal_length);

            //Calculate the half distances
            const h2 = Math.tan(fov2_h) * distance;
            const w2 = Math.tan(fov2_w) * distance;

            proj = new Rect(-w2, -h2, 2*w2, 2*h2);
        }

        return proj;
    }

    get_projected_size(distance:number) {
        let proj:Rect = null;

        if(this.is_valid() && distance > 0) {
            //Calculate the half field of views
            const fov2_h = Math.atan2(this.sensor_height, 2*this.focal_length);
            const fov2_w = Math.atan2(this.sensor_width, 2*this.focal_length);

            //Calculate the half distances
            const h2 = Math.tan(fov2_h) * distance;
            const w2 = Math.tan(fov2_w) * distance;

            proj = new Rect(-w2, -h2, 2*w2, 2*h2);
        }

        return proj;
    }



    static isObjectOfDataType(object: any): object is NeuronCameraSpecificationsData {
        let is_valid =
            (object.type == NeuronCameraSpecifications.TYPE) &&
            (object.version == NeuronCameraSpecifications.VERSION);

        return is_valid;
    }


    static from_json(j:NeuronCameraSpecificationsData) {
        //XXX: Implement this per inherited feature
        if(!NeuronCameraSpecifications.isObjectOfDataType(j))
            throw new Error(`Invalid type check during creation of NeuronCameraSpecifications`);

        return new NeuronCameraSpecifications(
            j.name,
            j.focal_length,
            j.sensor_width,
            j.sensor_height,
            j.image_width,
            j.image_height
        );
    }

    to_json() {
        return <NeuronCameraSpecificationsData>{
            version: NeuronCameraSpecifications.VERSION,
            type: NeuronCameraSpecifications.TYPE,
            name: this.name,
            focal_length: this.focal_length,
            sensor_width: this.sensor_width,
            sensor_height: this.sensor_height,
            image_width: this.image_width,
            image_height: this.image_height,
        }
    }
}
