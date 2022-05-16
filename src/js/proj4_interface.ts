import proj4 from 'proj4';
import { NeuronInterfacePoint } from "./neuron_interfaces";
import { zero_pad } from "./neuron_tools_common";

function EPSG_code_from_utm_zone(zone:number, is_south:boolean) {
    const zf = Math.floor(zone);
    if (zf <= 0 || zf > 60)
        throw new Error(`Zone out of range (${zone}|${zf})`);

    return `EPSG:326${zero_pad(zf, 2)}${is_south ? 'S' : 'N'}`;
}

//Predefine all of our zones
// https://epsg.io/32600
for(let i = 1; i <= 60; i++) {
    let projection = `+proj=utm +zone=${i}`;
    proj4.defs(EPSG_code_from_utm_zone(i, false), projection);
    proj4.defs(EPSG_code_from_utm_zone(i, true), projection + " +south");
}

function get_UTM_is_south(latitude_or_zone:number) {
    return (latitude_or_zone < 0);
}

function get_UTM_zone(latitude:number, longitude:number) {
    let zone = Math.floor((longitude - -186.0) / 6.0);
    if (get_UTM_is_south(latitude))
        zone *= -1;

    return zone;
}

export class UTMPos {
    x:number;
    y:number;
    zone:number;
    tag:string;

    constructor(x:number=0.0, y:number=0.0, zone:number=0.0, tag:string="") {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.tag = tag;
    }

    equals(other:UTMPos, match_tag:boolean = false) {
        return (this.x == other.x) && (this.y == other.y) && (this.zone == other.zone) && (!match_tag || (this.tag == other.tag));
    }

    copy(tag:string=null) {
        return new UTMPos(this.x, this.y, this.zone, tag ? tag : this.tag);
    }

    relative_point_from_dist_bearing(bearing:number, distance:number, tag:string = "") {
        let degN = 90 - bearing;
        if (degN < 0)
            degN += 360;

        const deg2rad = Math.PI/180.0;

        return new UTMPos(
            this.x + distance * Math.cos(degN * deg2rad),
            this.y + distance * Math.sin(degN * deg2rad),
            this.zone,
            tag
        );
    }

    GetDistance2D(b:UTMPos) {
        return Math.sqrt(Math.pow(Math.abs(this.x - b.x), 2) + Math.pow(Math.abs(this.y - b.y), 2));
    }

    to_NeuronInterfacePoint() {
        let p = proj4(
            EPSG_code_from_utm_zone(
                Math.abs(this.zone),
                get_UTM_is_south(this.zone)),
            NeuronInterfacePoint.projection_code(),
            [this.x, this.y]
        );

        //p given as [lng, lat]
        return new NeuronInterfacePoint(p[1], p[0]);
    }

    /**
     * @param  {NeuronInterfacePoint} point Point to create the transformation from
     * @param  {number=null} zone Zone override to use during the projection
     * @param  {string=""} tag Additional tag information for this point
     */
    static from_NeuronInterfacePoint(point:NeuronInterfacePoint, zone:number = null, tag:string="") {
        if (!zone)
            zone = get_UTM_zone(point.latitude, point.longitude);

        let p = proj4(
            NeuronInterfacePoint.projection_code(),
            EPSG_code_from_utm_zone(
                Math.abs(zone),
                get_UTM_is_south(zone)),
            [point.longitude, point.latitude]
        );

        //p given as [x, y]
        return new UTMPos(p[0], p[1], zone, tag);
    }
}

export class UTMLine {
    // start of line
    p1:UTMPos;
    // end of line
    p2:UTMPos;
    // used as a base for grid along line (initial setout)
    base_pnt:UTMPos;

    constructor(p1:UTMPos, p2:UTMPos, basepnt:UTMPos) {
        this.p1 = p1;
        this.p2 = p2;
        this.base_pnt = basepnt;
    }
}