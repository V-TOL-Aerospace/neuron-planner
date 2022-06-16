import proj4 from 'proj4';
import { NeuronInterfacePoint } from "./neuron_interfaces";
import { zero_pad } from "./neuron_tools_common";

/** Get a EPSG code from a given UTM zone number.
 * @param  {number} zone UTM zone.
 * @param  {boolean} is_south Defines if the zone is north or south of the equator.
 */
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

/** Determines if a given UTM number or latitude is for a southerly location.
 * @param  {number} latitude_or_zone Latitude or UTM zone number to check.
 */
function get_UTM_is_south(latitude_or_zone:number) {
    return (latitude_or_zone < 0);
}

/** Get the UTM Zone number for a given combination of latitudes and longitudes.
 * @param  {number} latitude Latitude of the location to determine.
 * @param  {number} longitude Longitude of the location to determine.
 */
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

    /** Creates a UTMPos object that defines a location in the coordinate frame of a specific UTM zone.
     * @param  {number} x Coordinate location in the x-axis of the UTM zone.
     * @param  {number} y Coordinate location in the y-axis of the UTM zone.
     * @param  {number} zone UTM zone to use as the reference origin.
     * @param  {string} tag Additional tag metadata information to identify this position.
     */
    constructor(x:number=0.0, y:number=0.0, zone:number=0.0, tag:string="") {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.tag = tag;
    }
    /** Compares this UTMPos object with another object to assess if they represent the same location and same UTM zone.
     * @param  {UTMPos} other The other UTM object to compare with in the assessment.
     * @param  {boolean} match_tag Additional flag to consider if the tag metadata should also be matched. Tag data will be ignored if this is false.
     */
    equals(other:UTMPos, match_tag:boolean = false) {
        return (this.x == other.x) && (this.y == other.y) && (this.zone == other.zone) && (!match_tag || (this.tag == other.tag));
    }

    /** Create a deep copy of this UTMPos object.
     * @param  {string} tag Additional tag metadata information to identify the new position
     */
    copy(tag:string=null) {
        return new UTMPos(this.x, this.y, this.zone, tag ? tag : this.tag);
    }

    /** Get a new UTMPos object that represents a position of relative bearing and distance from this UTMPos.
     * @param  {number} bearing The bearing from north from this UTMPos to the new location.
     * @param  {number} distance The distance from this UTMPos to the new location.
     * @param  {string} tag Additional tag metadata information to identify the new position.
     */
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

    /** Get the 2D distance between this UTMPos and another location.
     * @param  {UTMPos} b The other location to measure distance to.
     */
    GetDistance2D(b:UTMPos) {
        return Math.sqrt(Math.pow(Math.abs(this.x - b.x), 2) + Math.pow(Math.abs(this.y - b.y), 2));
    }

    /** Get the 2D angle of the line that forms between this UTMPos and another location, relative to x-axis and measured anti-clockwise in radians.
     * @param  {UTMPos} b The other location to measure distance to.
     */
     GetAngle(b:UTMPos) {
        return Math.atan2(b.y - this.y, b.x - this.x);
    }
    /** Calculates the area of a polygon defined by the list of polygons as provided
     * @param  {UTMPos[]} vertices corner points of the polygon as defined in this area
     */
    static AreaOfPolygon(vertices:UTMPos[]) {
        var total = 0;

        for (var i = 0, l = vertices.length; i < l; i++) {
          var addX = vertices[i].x;
          var addY = vertices[i == vertices.length - 1 ? 0 : i + 1].y;
          var subX = vertices[i == vertices.length - 1 ? 0 : i + 1].x;
          var subY = vertices[i].y;

          total += (addX * addY * 0.5);
          total -= (subX * subY * 0.5);
        }

        return Math.abs(total);
    }

    /** Convert this UTMPos data into a new NeuronInterfacePoint that represents the same location. Tag metadata will also be included if it exists.
     */
    to_NeuronInterfacePoint() {
        let p = proj4(
            EPSG_code_from_utm_zone(
                Math.abs(this.zone),
                get_UTM_is_south(this.zone)),
            NeuronInterfacePoint.projection_code(),
            [this.x, this.y]
        );

        //p given as [lng, lat]
        return new NeuronInterfacePoint(p[1], p[0], 0.0, 0.0, this.tag);
    }

    /** Converts NeuronInterfacePoint data into a new UTMPos that represents the same location. Tag metadata will also be included if it exists.
     * @param  {NeuronInterfacePoint} point Point to create the transformation from
     * @param  {number=null} zone Zone override to use during the projection
     * @param  {string=""} tag Additional tag information for this point
     */
    static from_NeuronInterfacePoint(point:NeuronInterfacePoint, zone:number = null) {
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
        return new UTMPos(p[0], p[1], zone, point.tag);
    }
}

export class UTMLine {
    // start of line
    p1:UTMPos;
    // end of line
    p2:UTMPos;
    // used as a base for grid along line (initial setout)
    base_pnt:UTMPos;

    /** Creates a UTMLine which is a representation of a line that connects two locations in a UTM zone. Includes an identifier for determining which point is the starting location.
     * @param  {UTMPos} p1 The first location of the line.
     * @param  {UTMPos} p2 The second location of the line.
     * @param  {UTMPos} base_pnt Determines the starting point of the line
     */
    constructor(p1:UTMPos, p2:UTMPos, base_pnt:UTMPos) {
        this.p1 = p1;
        this.p2 = p2;
        this.base_pnt = base_pnt;
    }
}
