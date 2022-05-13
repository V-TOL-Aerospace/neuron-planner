import { NeuronInterfacePoint } from "./neuron_interfaces";
import { UTMPos, UTMLine } from "./proj4_interface";

export enum StartPosition {
    // Home = 0,
    BottomLeft = 1,
    TopLeft = 2,
    BottomRight = 3,
    TopRight = 4,
    // Point = 5
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

function remove_item_from_array(array:any[], item:any) {
    const index = array.indexOf(item);
    if (index > -1)
        array.splice(index, 1);
}

// Add an angle while normalizing output in the range 0...360
function AddAngle(angle:number, degrees:number) {
    angle += degrees;
    angle = angle % 360;

    if (angle < 0)
        angle += 360;

    return angle;
}

function FindLineIntersection(start1:UTMPos, end1:UTMPos, start2:UTMPos, end2:UTMPos) {
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

function getPolyMinMax(utmpos:UTMPos[]) {
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

function PointInPolygon(p:UTMPos, poly:UTMPos[]) {
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

function FindLineIntersectionExtension(start1:UTMPos, end1:UTMPos, start2:UTMPos, end2:UTMPos) {
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

function findClosestPoint(start:UTMPos, list:UTMPos[])
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

function findClosestLine(start:UTMPos, list:UTMLine[], minDistance:number, angle:number):UTMLine {
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
            let p = FindLineIntersectionExtension(line.p1, line.p2, start_perpendicular_line, stop_perpendicular_line);

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

        return findClosestLine(start, filteredlines, 0, angle);
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

//TODO: This is creating too many waypoints for some reason!
/**
 * @param  {NeuronInterfacePoint[]} polygon List of points that define the survey polygon
 * @param  {number} altitude altitude to map to thhe final points
 * @param  {number} distance distance between lines
 * @param  {number} spacing Additional spacing between polygon and turns?  TODO:
 * @param  {number} angle angle of the survey pattern to follow (lane angle)
 * @param  {number} overshoot1 overshoot distance at the first "end" of the survey pattern
 * @param  {number} overshoot2 overshoot distance at the second "end" of the survey pattern
 * @param  {StartPosition} startpos selector for where the starting position should be
 * @param  {number} minLaneSeparation minimum lane separation/skip parameter (causes the lanes to alternate)
 * @param  {number} leadin additional lead-in to assist with mission planning for planes (allows more time for the plane to complete the turn before entering the survey stretch)
 */
export function CreateGrid(
    polygon:NeuronInterfacePoint[],
    altitude:number,
    distance:number,
    spacing:number,
    angle:number,
    overshoot1:number,
    overshoot2:number,
    startpos:StartPosition,
    // shutter:boolean,
    minLaneSeparation:number,
    leadin:number,
    // HomeLocation:NeuronInterfacePoint
    ) {

    if (spacing < 0.1 && spacing != 0)
        spacing = 0.1;

    if (distance < 0.1)
        distance = 0.1;

    if (polygon.length == 0)
        return [];


    // Make a non round number in case of corner cases
    if (minLaneSeparation != 0)
        minLaneSeparation += 0.5;

    // Lane Separation in meters
    const minLaneSeparationINMeters = minLaneSeparation * distance;

    const utmzone = polygon[0].to_UTM().zone;
    // utm position list
    let utmpositions = polygon.map(x => x.to_UTM(utmzone));
    // utm zone distance calcs will be done in
    // let utmpositions = utmpos.ToList(NeuronInterfacePoint.ToUTM(utmzone, polygon), utmzone);
    // let utmpositions = polygon;

    // close the loop if its not already
    if (!utmpositions[0].equals(utmpositions[utmpositions.length - 1]))
        utmpositions.push(utmpositions[0]); // make a full loop

    // get mins/maxs of coverage area
    let area = getPolyMinMax(utmpositions);

    // get initial grid

    // used to determine the size of the outer grid area
    let diagdist = area.DiagDistance();

    // somewhere to store out generated lines
    let grid:UTMLine[] = [];
    // number of lines we need
    let lines = 0;

    // get start point middle
    let x = area.MidWidth();
    let y = area.MidHeight();
    let startp = new UTMPos(x,y,utmzone);

    // //UTMLine(new utmpos(x, y, utmzone), "Base");

    // // get left extent
    // let xb1 = x;
    // let yb1 = y;
    // // to the left
    // newpos(ref xb1, ref yb1, angle - 90, diagdist / 2 + distance);
    // // backwards
    // newpos(ref xb1, ref yb1, angle + 180, diagdist / 2 + distance);

    // utmpos left = new utmpos(xb1, yb1, utmzone);
    let left = startp.relative_point_from_dist_bearing(angle - 90, diagdist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diagdist / 2 + distance);

    ////UTMLine(left, "left");

    // get right extent
    // // double xb2 = x;
    // // double yb2 = y;
    // // // to the right
    // // newpos(ref xb2, ref yb2, angle + 90, diagdist / 2 + distance);
    // // // backwards
    // // newpos(ref xb2, ref yb2, angle + 180, diagdist / 2 + distance);

    // // utmpos right = new utmpos(xb2, yb2, utmzone);
    // let right = startp.relative_point_from_dist_bearing(angle + 90, diagdist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diagdist / 2 + distance);

    ////UTMLine(right, "right");

    // set start point to left hand side
    x = left.x;
    y = left.y;

    // draw the outergrid, this is a grid that cover the entire area of the rectangle plus more.
    while (lines < ((diagdist + distance * 2) / distance))
    {
        // copy the start point to generate the end point
        let lstart = new UTMPos(x, y, utmzone);
        let lend = lstart.relative_point_from_dist_bearing(angle, diagdist + distance * 2);
        // let nx = x;
        // let ny = y;
        // newpos(ref nx, ref ny, angle, diagdist + distance * 2);

        let line = new UTMLine(lstart, lend, lstart.copy());
        // line.p1 = new utmpos(x, y, utmzone);
        // line.p2 = new utmpos(nx, ny, utmzone);
        // line.basepnt = new utmpos(x, y, utmzone);
        grid.push(line);

        // //UTMLine(line);

        // newpos(ref x, ref y, angle + 90, distance);
        let lnext = lstart.relative_point_from_dist_bearing(angle + 90, distance);
        x = lnext.x;
        y = lnext.y;
        lines++;
    }

    // find intersections with our polygon

    // store lines that dont have any intersections
    let remove:UTMLine[] = [];

    let gridno = grid.length;

    // cycle through our grid
    for (let a = 0; a < gridno; a++) {
        let closestdistance = Number.MAX_VALUE;
        let farestdistance = Number.MIN_VALUE;

        let closestpoint = new UTMPos();
        let farestpoint = new UTMPos();

        // somewhere to store our intersections
        let matchs:UTMPos[] = [];

        let crosses = 0;
        for (let b = 1; b < utmpositions.length; b++) {
            const utmp1 = utmpositions[b-1];
            const utmp2 = utmpositions[b];

            let newutmpos = FindLineIntersection(utmp1, utmp2, grid[a].p1, grid[a].p2);
            if (!(newutmpos.equals(new UTMPos()))) {
                crosses++;
                matchs.push(newutmpos);
                if (closestdistance > grid[a].p1.GetDistance(newutmpos))
                {
                    closestpoint.y = newutmpos.y;
                    closestpoint.x = newutmpos.x;
                    closestpoint.zone = newutmpos.zone;
                    closestdistance = grid[a].p1.GetDistance(newutmpos);
                }
                if (farestdistance < grid[a].p1.GetDistance(newutmpos))
                {
                    farestpoint.y = newutmpos.y;
                    farestpoint.x = newutmpos.x;
                    farestpoint.zone = newutmpos.zone;
                    farestdistance = grid[a].p1.GetDistance(newutmpos);
                }
            }
        }
        if (crosses == 0) // outside our polygon
        {
            if (!PointInPolygon(grid[a].p1, utmpositions) && !PointInPolygon(grid[a].p2, utmpositions))
                remove.push(grid[a]);
        }
        else if (crosses == 1) // bad - shouldnt happen
        {

        }
        else if (crosses == 2) // simple start and finish
        {
            let line = grid[a];
            line.p1 = closestpoint;
            line.p2 = farestpoint;
            grid[a] = line;
        }
        else // multiple intersections
        {
            let line = grid[a];
            remove.push(line);

            while (matchs.length > 1)
            {
                closestpoint = findClosestPoint(closestpoint, matchs);
                const p1 = closestpoint;
                remove_item_from_array(matchs, closestpoint);

                closestpoint = findClosestPoint(closestpoint, matchs);
                const p2 = closestpoint;
                remove_item_from_array(matchs, closestpoint);

                let newline = new UTMLine(
                    p1,
                    p2,
                    line.basepnt.copy()
                );

                grid.push(newline);
            }
        }
    }

    // let grid_debug = [...grid];
    // let debug_points = [];
    // for(const line of grid_debug) {
    //     debug_points.push(line.p1);
    //     debug_points.push(line.p2);
    // }

    // cleanup and keep only lines that pass though our polygon
    for(const line of remove)
        remove_item_from_array(grid, line);

    if (grid.length == 0)
        return [];
        // return NeuronInterfacePoint.from_UTMs(debug_points);

    // pick start positon based on initial point rectangle
    let startposutm:UTMPos = null;

    switch (startpos)
    {
        default:
        // case StartPosition.Home:
        //     startposutm = HomeLocation.to_UTM(utmzone);
        //     break;
        case StartPosition.BottomLeft:
            startposutm = new UTMPos(area.Left, area.Bottom, utmzone);
            break;
        case StartPosition.BottomRight:
            startposutm = new UTMPos(area.Right, area.Bottom, utmzone);
            break;
        case StartPosition.TopLeft:
            startposutm = new UTMPos(area.Left, area.Top, utmzone);
            break;
        case StartPosition.TopRight:
            startposutm = new UTMPos(area.Right, area.Top, utmzone);
            break;
        // case StartPosition.Point:
        //     startposutm = new UTMPos();
        //     startposutm.zone = utmzone;
        //     break;
    }

    // find the closes polygon point based from our startpos selection
    startposutm = findClosestPoint(startposutm, utmpositions);

    // find closest line point to startpos
    let closest = findClosestLine(startposutm, grid, 0 /*Lane separation does not apply to starting point*/, angle);

    let lastpnt = new UTMPos();

    // get the closes point from the line we picked
    if (closest.p1.GetDistance(startposutm) < closest.p2.GetDistance(startposutm))
    {
        lastpnt = closest.p1;
    }
    else
    {
        lastpnt = closest.p2;
    }

    let ans:UTMPos[] = [];
    // Tags:
    //   S =  start
    //   E = end
    //   ME = middle end
    //   SM = start middle

    while (grid.length > 0) {
        // for each line, check which end of the line is the next closest
        if (closest.p1.GetDistance(lastpnt) < closest.p2.GetDistance(lastpnt))
        {
            let newstart = closest.p1.relative_point_from_dist_bearing(angle, -leadin);
            newstart.tag = "S";
            //UTMLine(newstart, "S");
            ans.push(newstart);

            if (leadin < 0) {
                var p2 = newstart.copy();
                p2.tag = "SM";
                //UTMLine(p2, "SM");
                ans.push(p2);
            } else {
                closest.p1.tag = "SM";
                //UTMLine(closest.p1, "SM");
                ans.push(closest.p1);
            }

            if (spacing > 0) {
                for (let d = (spacing - ((closest.basepnt.GetDistance(closest.p1)) % spacing));
                    d < (closest.p1.GetDistance(closest.p2));
                    d += spacing) {
                    // newpos(ref ax, ref ay, angle, d);
                    let utmpos1 = new UTMPos(closest.p1.x, closest.p1.y, utmzone, "M");
                    //UTMLine(utmpos1, "M");
                    ans.push(utmpos1);
                }
            }

            let newend = closest.p2.relative_point_from_dist_bearing(angle, overshoot1);

            if (overshoot1 < 0) {
                var p2 = newend.copy()
                p2.tag = "ME";
                //UTMLine(p2, "ME");
                ans.push(p2);
            } else {
                closest.p2.tag = "ME";
                //UTMLine(closest.p2, "ME");
                ans.push(closest.p2);
            }

            newend.tag = "E";
            //UTMLine(newend, "E");
            ans.push(newend);

            lastpnt = closest.p2;

            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;

            closest = findClosestLine(newend, grid, minLaneSeparationINMeters, angle);
        } else {
            let newstart = closest.p2.relative_point_from_dist_bearing(angle, leadin);
            newstart.tag = "S";
            //UTMLine(newstart, "S");
            ans.push(newstart);

            if (leadin < 0) {
                var p2 = newstart.copy()
                p2.tag = "SM";
                //UTMLine(p2, "SM");
                ans.push(p2);
            } else {
                closest.p2.tag = "SM";
                //UTMLine(closest.p2, "SM");
                ans.push(closest.p2);
            }

            if (spacing > 0) {
                for (let d = ((closest.basepnt.GetDistance(closest.p2)) % spacing);
                    d < (closest.p1.GetDistance(closest.p2));
                    d += spacing) {
                    // let ax = closest.p2.x;
                    // let ay = closest.p2.y;
                    let a = closest.p2.relative_point_from_dist_bearing(angle, -d);

                    // newpos(ref ax, ref ay, angle, -d);
                    var utmpos2 = new UTMPos(a.x, a.y, utmzone, "M");
                    //UTMLine(utmpos2, "M");
                    ans.push(utmpos2);
                }
            }

            let newend = closest.p1.relative_point_from_dist_bearing(angle, -overshoot2, "E");
            // utmpos newend = newpos(closest.p1, angle, -overshoot2);

            if (overshoot2 < 0) {
                // var p2 = newend.copy("ME");
                //UTMLine(p2, "ME");
                ans.push(newend.copy("ME"));
            } else {
                // closest.p1.tag = "ME";
                //UTMLine(closest.p1, "ME");
                ans.push(closest.p1.copy("ME"));
            }

            // newend.tag = "E";
            //UTMLine(newend, "E");
            ans.push(newend);

            lastpnt = closest.p1;

            // grid.Remove(closest);
            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;
            closest = findClosestLine(newend, grid, minLaneSeparationINMeters, angle);
        }
    }

    const points = NeuronInterfacePoint.from_UTMs(ans);

    // set the altitude on all points
    for(let p of points)
        p.altitude = altitude;

    return points;
}
