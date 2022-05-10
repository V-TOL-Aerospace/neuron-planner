import { L } from "./leaflet_interface";

// @ts-ignore
import * as UTMConverter from "utm-latlng";



// Add an angle while normalizing output in the range 0...360
function AddAngle(angle:number, degrees:number) {
    angle += degrees;
    angle = angle % 360;

    if (angle < 0)
        angle += 360;

    return angle;
}

const utm_converter = new UTMConverter('WGS 84');
export class UTMPos {
    x:number;
    y:number;
    zone:number;
    zone_letter:string;
    tag:string;

    constructor(x:number=0.0, y:number=0.0, zone:number=0.0, zone_letter:string="", tag:string="") {
        this.x = x;
        this.y = y;
        this.zone = zone;
        this.zone_letter = zone_letter;
        this.tag = tag;
    }

    static getPolyMinMax(utmpos:UTMPos[]) {
        if (utmpos.length == 0)
            return new Rect();

        let minx, miny, maxx, maxy = 0.0;

        minx = maxx = utmpos[0].x;
        miny = maxy = utmpos[0].y;

        for(const pnt of utmpos) {
            minx = Math.min(minx, pnt.x);
            maxx = Math.max(maxx, pnt.x);

            miny = Math.min(miny, pnt.y);
            maxy = Math.max(maxy, pnt.y);
        }

        return new Rect(minx, maxy, maxx - minx, miny - maxy);
    }

    equals(other:UTMPos) {
        return (this.x == other.x) || (this.y == other.y) || (this.zone == other.zone) || (this.zone_letter == other.zone_letter);
    }

    copy() {
        return new UTMPos(this.x, this.y, this.zone, this.zone_letter);
    }

    relative_point_from_dist_bearing(bearing:number, distance:number) {
        let degN = 90 - bearing;
        if (degN < 0)
            degN += 360;

        const deg2rad = Math.PI/180.0;

        return new UTMPos(
            this.x + distance * Math.cos(degN * deg2rad),
            this.y + distance * Math.sin(degN * deg2rad),
            this.zone,
            this.zone_letter
        );
    }

    GetDistance(b:UTMPos) {
        return Math.sqrt(Math.pow(Math.abs(this.x - b.x), 2) + Math.pow(Math.abs(this.y - b.y), 2));
    }

    static FindLineIntersection(start1:UTMPos, end1:UTMPos, start2:UTMPos, end2:UTMPos) {
        let denom = ((end1.x - start1.x) * (end2.y - start2.y)) - ((end1.y - start1.y) * (end2.x - start2.x));
        //  AB & CD are parallel
        if (denom == 0)
            return new UTMPos();
        let numer = ((start1.y - start2.y) * (end2.x - start2.x)) - ((start1.x - start2.x) * (end2.y - start2.y));
        let r = numer / denom;
        let numer2 = ((start1.y - start2.y) * (end1.x - start1.x)) - ((start1.x - start2.x) * (end1.y - start1.y));
        let s = numer2 / denom;
        if ((r < 0 || r > 1) || (s < 0 || s > 1))
            return new UTMPos();
        // Find intersection point
        return new UTMPos(
            start1.x + (r * (end1.x - start1.x)),
            start1.y + (r * (end1.y - start1.y)),
            start1.zone
        );
    }


    static PointInPolygon(p:UTMPos, poly:UTMPos[]) {
        let p1 = new UTMPos()
        let p2 = new UTMPos();
        let inside = false;

        if (poly.length < 3)
        {
            return inside;
        }
        let oldPoint = poly[poly.length - 1].copy();

        for (let i = 0; i < poly.length; i++)
        {

            let newPoint = poly[i].copy();

            if (newPoint.y > oldPoint.y)
            {
                p1 = oldPoint;
                p2 = newPoint;
            }
            else
            {
                p1 = newPoint;
                p2 = oldPoint;
            }

            if ((newPoint.y < p.y) == (p.y <= oldPoint.y)
                && (p.x - p1.x) * (p2.y - p1.y)
                < (p2.x - p1.x) * (p.y - p1.y))
            {
                inside = !inside;
            }
            oldPoint = newPoint;
        }
        return inside;
    }

    static FindLineIntersectionExtension(start1:UTMPos, end1:UTMPos, start2:UTMPos, end2:UTMPos) {
        let denom = ((end1.x - start1.x) * (end2.y - start2.y)) - ((end1.y - start1.y) * (end2.x - start2.x));
        //  AB & CD are parallel
        if (denom == 0)
            return new UTMPos();
        let numer = ((start1.y - start2.y) * (end2.x - start2.x)) - ((start1.x - start2.x) * (end2.y - start2.y));
        let r = numer / denom;
        let numer2 = ((start1.y - start2.y) * (end1.x - start1.x)) - ((start1.x - start2.x) * (end1.y - start1.y));
        let s = numer2 / denom;
        if ((r < 0 || r > 1) || (s < 0 || s > 1)) {
            // line intersection is outside our lines.
        }

        // Find intersection point
        let result = new UTMPos(
            start1.x + (r * (end1.x - start1.x)),
            start1.y + (r * (end1.y - start1.y)),
            start1.zone
        );

        return result;
    }

    static findClosestPoint(start:UTMPos, list:UTMPos[])
    {
        let answer = new UTMPos();
        let currentbest = Number.MAX_VALUE;

        for(const pnt of list) {
            const dist1 = start.GetDistance(pnt);

            if (dist1 < currentbest) {
                answer = pnt;
                currentbest = dist1;
            }
        }

        return answer;
    }

    static findClosestLine(start:UTMPos, list:UTMLine[], minDistance:number, angle:number):UTMLine {
        if (minDistance != 0) {
            // By now, just add 5.000 km to our lines so they are long enough to allow intersection
            let METERS_TO_EXTEND = 5000;
            let perperndicularOrientation = AddAngle(angle, 90);

            // Calculation of a perpendicular line to the grid lines containing the "start" point
            /*
            *  --------------------------------------|------------------------------------------
            *  --------------------------------------|------------------------------------------
            *  -------------------------------------start---------------------------------------
            *  --------------------------------------|------------------------------------------
            *  --------------------------------------|------------------------------------------
            *  --------------------------------------|------------------------------------------
            *  --------------------------------------|------------------------------------------
            *  --------------------------------------|------------------------------------------
            */
            let start_perpendicular_line = start.relative_point_from_dist_bearing(perperndicularOrientation, -METERS_TO_EXTEND);
            let stop_perpendicular_line = start.relative_point_from_dist_bearing(perperndicularOrientation, METERS_TO_EXTEND);

            // Store one intersection point per grid line
            let intersectedPoints:Map<UTMPos,UTMLine> = new Map();
            // lets order distances from every intersected point per line with the "start" point
            let ordered_min_to_max:Map<number,UTMPos> = new Map();

            for(const line of list) {
                // Calculate intersection point
                let p = UTMPos.FindLineIntersectionExtension(line.p1, line.p2, start_perpendicular_line, stop_perpendicular_line);

                // Store it
                intersectedPoints.set(p, line);

                // Calculate distances between interesected point and "start" (i.e. line and start)
                let distance_p = start.GetDistance(p);

                if (!ordered_min_to_max.has(distance_p))
                    ordered_min_to_max.set(distance_p, p);
            }

            // Acquire keys and sort them.
            let ordered_keys = Array.from(ordered_min_to_max.keys());
            ordered_keys.sort(function(a, b) {
                return a - b;
            });

            // Lets select a line that is the closest to "start" point but "mindistance" away at least.
            // If we have only one line, return that line whatever the minDistance says
            let key = Number.MAX_VALUE;
            let i = 0;
            while (key == Number.MAX_VALUE && i < ordered_keys.length) {
                if (ordered_keys[i] >= minDistance)
                    key = ordered_keys[i];
                i++;
            }

            // If no line is selected (because all of them are closer than minDistance, then get the farest one
            if (key == Number.MAX_VALUE)
                key = ordered_keys[ordered_keys.length - 1];

            let filteredmap = Array.from(intersectedPoints.entries()).filter(a => a[0].GetDistance(start) >= key);
            let filteredlines = filteredmap.map(a => a[1]);

            return UTMPos.findClosestLine(start, filteredlines, 0, angle);
        } else {
            let answer = list[0];
            let shortest = Number.MAX_VALUE;

            for(const line of list) {
                let ans1 = start.GetDistance(line.p1);
                let ans2 = start.GetDistance(line.p2);
                let shorterpnt = ans1 < ans2 ? line.p1 : line.p2;

                if (shortest > start.GetDistance(shorterpnt)) {
                    answer = line;
                    shortest = start.GetDistance(shorterpnt);
                }
            }

            return answer;
        }
    }
}

export class UTMLine {
    // start of line
    p1:UTMPos;
    // end of line
    p2:UTMPos;
    // used as a base for grid along line (initial setout)
    basepnt:UTMPos;

    constructor(p1:UTMPos, p2:UTMPos, basepnt:UTMPos) {
        this.p1 = p1;
        this.p2 = p2;
        this.basepnt = basepnt;
    }
}

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

    to_UTM() {
        const precision = 12;
        const u = utm_converter.convertLatLngToUtm(this.latitude, this.longitude, precision);
        return new UTMPos(u.Easting, u.Northing, u.ZoneNumber, u.ZoneLetter);
    }

    static from_UTM(utm:UTMPos) {
        const l = utm_converter.convertUtmToLatLng(utm.x, utm.y, utm.zone, utm.zone_letter);
        return new NeuronInterfacePoint(l.lat, l.lang);
    }

    static from_UTMs(utms:UTMPos[]) {
        return utms.map(p => NeuronInterfacePoint.from_UTM(p));
    }


    // GetUTMZone()
    // {
    //     let zone = Math.floor((this.longitude - -186.0) / 6.0);
    //     if (this.latitude < 0)
    //         zone *= -1;

    //     return zone;
    // }

    /*
    static ToUTM(utmzone:number, list:NeuronInterfacePoint[])
    {
        IProjectedCoordinateSystem utm = ProjectedCoordinateSystem.WGS84_UTM(Math.Abs(utmzone), list[0].Lat < 0 ? false : true);
        ICoordinateTransformation trans = ctfac.CreateFromCoordinateSystems(wgs84, utm);
        List<double[]> data = new List<double[]>();
        list.ForEach(x => { data.Add((double[])x); });
        return trans.MathTransform.TransformList(data).ToList();
    }
    */
}


export class Rect
{
    Top:number;
    Bottom:number;
    Left:number;
    Right:number;

    Width() {
        return this.Right - this.Left;
    }

    Height() {
        return this.Top - this.Bottom;
    }


    MidWidth() {
        return ((this.Right - this.Left) / 2) + this.Left;
    }

    MidHeight() {
        return ((this.Top - this.Bottom) / 2) + this.Bottom;
    }

    constructor(Left:number=0.0, Top:number=0.0, Width:number=0.0, Height:number=0.0)
    {
        this.Left = Left;
        this.Top = Top;
        this.Right = Left + Width;
        this.Bottom = Top + Height;
    }

    DiagDistance()
    {
        // Pythagoras
        return Math.sqrt(Math.pow(this.Width(), 2) + Math.pow(this.Height(), 2));
    }

}
