import { NeuronInterfacePoint } from "./neuron_interfaces";
import { UTMPos, UTMLine } from "./interface_proj4";

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
        return this.Bottom - this.Top;
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

    diag_distance()
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
    let numerator = ((start1.y - start2.y) * (end2.x - start2.x)) - ((start1.x - start2.x) * (end2.y - start2.y));
    let r = numerator / denom;
    let numerator2 = ((start1.y - start2.y) * (end1.x - start1.x)) - ((start1.x - start2.x) * (end1.y - start1.y));
    let s = numerator2 / denom;
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

    let min_x, min_y, max_x, max_y = 0.0;

    min_x = max_x = utmpos[0].x;
    min_y = max_y = utmpos[0].y;

    for(const pnt of utmpos) {
        min_x = Math.min(min_x, pnt.x);
        max_x = Math.max(max_x, pnt.x);

        min_y = Math.min(min_y, pnt.y);
        max_y = Math.max(max_y, pnt.y);
    }

    return new Rect(min_x, max_y, max_x - min_x, min_y - max_y);
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
    let numerator = ((start1.y - start2.y) * (end2.x - start2.x)) - ((start1.x - start2.x) * (end2.y - start2.y));
    let r = numerator / denom;
    let numerator2 = ((start1.y - start2.y) * (end1.x - start1.x)) - ((start1.x - start2.x) * (end1.y - start1.y));
    let s = numerator2 / denom;
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
    let current_best = Number.MAX_VALUE;

    for(const pnt of list) {
        const dist1 = start.GetDistance2D(pnt);

        if (dist1 < current_best) {
            answer = pnt;
            current_best = dist1;
        }
    }

    return answer;
}

function findClosestLine(start:UTMPos, list:UTMLine[], min_distance:number, angle:number):UTMLine {
    if (min_distance != 0) {
        // By now, just add 5.000 km to our lines so they are long enough to allow intersection
        let METERS_TO_EXTEND = 5000;
        let perpendicularOrientation = AddAngle(angle, 90);

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
        let start_perpendicular_line = start.relative_point_from_dist_bearing(perpendicularOrientation, -METERS_TO_EXTEND);
        let stop_perpendicular_line = start.relative_point_from_dist_bearing(perpendicularOrientation, METERS_TO_EXTEND);

        // Store one intersection point per grid line
        let intersectedPoints:Map<UTMPos,UTMLine> = new Map();
        // lets order distances from every intersected point per line with the "start" point
        let ordered_min_to_max:Map<number,UTMPos> = new Map();

        for(const line of list) {
            // Calculate intersection point
            let p = FindLineIntersectionExtension(line.p1, line.p2, start_perpendicular_line, stop_perpendicular_line);

            // Store it
            intersectedPoints.set(p, line);

            // Calculate distances between intersect point and "start" (i.e. line and start)
            let distance_p = start.GetDistance2D(p);

            if (!ordered_min_to_max.has(distance_p))
                ordered_min_to_max.set(distance_p, p);
        }

        // Acquire keys and sort them.
        let ordered_keys = Array.from(ordered_min_to_max.keys());
        ordered_keys.sort(function(a, b) {
            return a - b;
        });

        // Lets select a line that is the closest to "start" point but "min_distance" away at least.
        // If we have only one line, return that line whatever the minDistance says
        let key = Number.MAX_VALUE;
        let i = 0;
        while (key == Number.MAX_VALUE && i < ordered_keys.length) {
            if (ordered_keys[i] >= min_distance)
                key = ordered_keys[i];
            i++;
        }

        // If no line is selected (because all of them are closer than minDistance, then get the farthest one
        if (key == Number.MAX_VALUE)
            key = ordered_keys[ordered_keys.length - 1];

        let filtered_map = Array.from(intersectedPoints.entries()).filter(a => a[0].GetDistance2D(start) >= key);
        let filtered_lines = filtered_map.map(a => a[1]);

        return findClosestLine(start, filtered_lines, 0, angle);
    } else {
        let answer = list[0];
        let shortest = Number.MAX_VALUE;

        for(const line of list) {
            let ans1 = start.GetDistance2D(line.p1);
            let ans2 = start.GetDistance2D(line.p2);
            let shorter_pnt = ans1 < ans2 ? line.p1 : line.p2;

            if (shortest > start.GetDistance2D(shorter_pnt)) {
                answer = line;
                shortest = start.GetDistance2D(shorter_pnt);
            }
        }

        return answer;
    }
}

export enum GridPointTags {
    START = "S",
    END = "E",
    MIDDLE = "M",
    MIDDLE_START= "MS",
    MIDDLE_END = "ME",
}

const min_distance = 0.5;
/**
 * @param  {NeuronInterfacePoint[]} polygon List of points that define the survey polygon
 * @param  {number} altitude altitude to map to the final points
 * @param  {number} distance distance between lines
 * @param  {number} spacing Additional spacing between polygon and turns?  TODO: Figure out what this is meant to do?
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

    if (distance < min_distance)
        distance = min_distance;

    if (polygon.length == 0)
        return [];


    // Make a non round number in case of corner cases
    if (minLaneSeparation != 0)
        minLaneSeparation += 0.5;

    // Lane Separation in meters
    const minLaneSeparationINMeters = minLaneSeparation * distance;

    const utm_zone = polygon[0].to_UTM().zone;
    // utm position list
    let utm_positions = polygon.map(x => x.to_UTM(utm_zone));
    // utm zone distance calcs will be done in
    // let utm_positions = utmpos.ToList(NeuronInterfacePoint.ToUTM(utm_zone, polygon), utm_zone);
    // let utm_positions = polygon;

    // close the loop if its not already
    if (!utm_positions[0].equals(utm_positions[utm_positions.length - 1]))
        utm_positions.push(utm_positions[0]); // make a full loop

    // get min/max of coverage area
    let area = getPolyMinMax(utm_positions);

    // get initial grid

    // used to determine the size of the outer grid area
    let diag_dist = area.diag_distance();

    // somewhere to store out generated lines
    let grid:UTMLine[] = [];
    // number of lines we need
    let lines = 0;

    // get start point middle
    let x = area.MidWidth();
    let y = area.MidHeight();
    let start_p = new UTMPos(x,y,utm_zone);

    // //UTMLine(new utmpos(x, y, utm_zone), "Base");

    // // get left extent
    // let xb1 = x;
    // let yb1 = y;
    // // to the left
    // new_pos(ref xb1, ref yb1, angle - 90, diag_dist / 2 + distance);
    // // backwards
    // new_pos(ref xb1, ref yb1, angle + 180, diag_dist / 2 + distance);

    // utmpos left = new utmpos(xb1, yb1, utm_zone);
    let left = start_p.relative_point_from_dist_bearing(angle - 90, diag_dist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diag_dist / 2 + distance);

    ////UTMLine(left, "left");

    // get right extent
    // // double xb2 = x;
    // // double yb2 = y;
    // // // to the right
    // // new_pos(ref xb2, ref yb2, angle + 90, diag_dist / 2 + distance);
    // // // backwards
    // // new_pos(ref xb2, ref yb2, angle + 180, diag_dist / 2 + distance);

    // // utmpos right = new utmpos(xb2, yb2, utm_zone);
    // let right = start_p.relative_point_from_dist_bearing(angle + 90, diag_dist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diag_dist / 2 + distance);

    ////UTMLine(right, "right");

    // set start point to left hand side
    x = left.x;
    y = left.y;

    // draw the outer grid, this is a grid that cover the entire area of the rectangle plus more.
    while (lines < ((diag_dist + distance * 2) / distance))
    {
        // copy the start point to generate the end point
        let l_start = new UTMPos(x, y, utm_zone);
        let l_end = l_start.relative_point_from_dist_bearing(angle, diag_dist + distance * 2);
        // let nx = x;
        // let ny = y;
        // new_pos(ref nx, ref ny, angle, diag_dist + distance * 2);

        let line = new UTMLine(l_start, l_end, l_start.copy());
        // line.p1 = new utmpos(x, y, utm_zone);
        // line.p2 = new utmpos(nx, ny, utm_zone);
        // line.base_pnt = new utmpos(x, y, utm_zone);
        grid.push(line);

        // //UTMLine(line);

        // new_pos(ref x, ref y, angle + 90, distance);
        let l_next = l_start.relative_point_from_dist_bearing(angle + 90, distance);
        x = l_next.x;
        y = l_next.y;
        lines++;
    }

    // find intersections with our polygon

    // store lines that dont have any intersections
    let remove:UTMLine[] = [];

    let grid_no = grid.length;

    // cycle through our grid
    for (let a = 0; a < grid_no; a++) {
        let closest_distance = Number.MAX_VALUE;
        let farthest_distance = Number.MIN_VALUE;

        let closest_point = new UTMPos();
        let farthest_point = new UTMPos();

        // somewhere to store our intersections
        let matches:UTMPos[] = [];

        let crosses = 0;
        for (let b = 1; b < utm_positions.length; b++) {
            const utm_p1 = utm_positions[b-1];
            const utm_p2 = utm_positions[b];

            let new_utmpos = FindLineIntersection(utm_p1, utm_p2, grid[a].p1, grid[a].p2);
            if (!(new_utmpos.equals(new UTMPos()))) {
                crosses++;
                matches.push(new_utmpos);
                if (closest_distance > grid[a].p1.GetDistance2D(new_utmpos))
                {
                    closest_point.y = new_utmpos.y;
                    closest_point.x = new_utmpos.x;
                    closest_point.zone = new_utmpos.zone;
                    closest_distance = grid[a].p1.GetDistance2D(new_utmpos);
                }
                if (farthest_distance < grid[a].p1.GetDistance2D(new_utmpos))
                {
                    farthest_point.y = new_utmpos.y;
                    farthest_point.x = new_utmpos.x;
                    farthest_point.zone = new_utmpos.zone;
                    farthest_distance = grid[a].p1.GetDistance2D(new_utmpos);
                }
            }
        }
        if (crosses == 0) // outside our polygon
        {
            if (!PointInPolygon(grid[a].p1, utm_positions) && !PointInPolygon(grid[a].p2, utm_positions))
                remove.push(grid[a]);
        }
        else if (crosses == 1) // bad - shouldn't happen
        {

        }
        else if (crosses == 2) // simple start and finish
        {
            let line = grid[a];
            line.p1 = closest_point;
            line.p2 = farthest_point;
            grid[a] = line;
        }
        else // multiple intersections
        {
            let line = grid[a];
            remove.push(line);

            while (matches.length > 1)
            {
                closest_point = findClosestPoint(closest_point, matches);
                const p1 = closest_point;
                remove_item_from_array(matches, closest_point);

                closest_point = findClosestPoint(closest_point, matches);
                const p2 = closest_point;
                remove_item_from_array(matches, closest_point);

                let newline = new UTMLine(
                    p1,
                    p2,
                    line.base_pnt.copy()
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

    // pick start position based on initial point rectangle
    let start_pos_utm:UTMPos = null;

    switch (startpos)
    {
        default:
        // case StartPosition.Home:
        //     start_pos_utm = HomeLocation.to_UTM(utm_zone);
        //     break;
        case StartPosition.BottomLeft:
            start_pos_utm = new UTMPos(area.Left, area.Bottom, utm_zone);
            break;
        case StartPosition.BottomRight:
            start_pos_utm = new UTMPos(area.Right, area.Bottom, utm_zone);
            break;
        case StartPosition.TopLeft:
            start_pos_utm = new UTMPos(area.Left, area.Top, utm_zone);
            break;
        case StartPosition.TopRight:
            start_pos_utm = new UTMPos(area.Right, area.Top, utm_zone);
            break;
        // case StartPosition.Point:
        //     start_pos_utm = new UTMPos();
        //     start_pos_utm.zone = utm_zone;
        //     break;
    }

    // find the closes polygon point based from our startpos selection
    start_pos_utm = findClosestPoint(start_pos_utm, utm_positions);

    // find closest line point to startpos
    let closest = findClosestLine(start_pos_utm, grid, 0 /*Lane separation does not apply to starting point*/, angle);

    let last_pnt = new UTMPos();

    // get the closes point from the line we picked
    if (closest.p1.GetDistance2D(start_pos_utm) < closest.p2.GetDistance2D(start_pos_utm))
    {
        last_pnt = closest.p1;
    }
    else
    {
        last_pnt = closest.p2;
    }

    let ans:UTMPos[] = [];
    while (grid.length > 0) {
        // for each line, check which end of the line is the next closest
        if (closest.p1.GetDistance2D(last_pnt) < closest.p2.GetDistance2D(last_pnt))
        {
            let new_start = closest.p1.relative_point_from_dist_bearing(angle, -leadin);
            new_start.tag = GridPointTags.START;
            //UTMLine(new_start, "S");
            ans.push(new_start);

            if (leadin < 0) {
                var p2 = new_start.copy();
                p2.tag = GridPointTags.MIDDLE_START;
                //UTMLine(p2, "SM");
                ans.push(p2);
            } else if (leadin > 0) {
                closest.p1.tag = GridPointTags.MIDDLE_START;
                //UTMLine(closest.p1, "SM");
                ans.push(closest.p1);
            }

            if (spacing > 0) {
                for (let d = (spacing - ((closest.base_pnt.GetDistance2D(closest.p1)) % spacing));
                    d < (closest.p1.GetDistance2D(closest.p2));
                    d += spacing) {
                    // new_pos(ref ax, ref ay, angle, d);
                    let utmpos1 = new UTMPos(closest.p1.x, closest.p1.y, utm_zone, GridPointTags.MIDDLE);
                    //UTMLine(utmpos1, "M");
                    ans.push(utmpos1);
                }
            }

            let new_end = closest.p2.relative_point_from_dist_bearing(angle, overshoot1, GridPointTags.END);

            if (overshoot1 < 0) {
                var p2 = new_end.copy()
                p2.tag = GridPointTags.MIDDLE_END;
                //UTMLine(p2, "ME");
                ans.push(p2);
            } else if (overshoot1 > 0) {
                closest.p2.tag = GridPointTags.MIDDLE_END;
                //UTMLine(closest.p2, "ME");
                ans.push(closest.p2);
            }

            // new_end.tag = GridPointTags.END;
            //UTMLine(new_end, "E");
            ans.push(new_end);

            last_pnt = closest.p2;

            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;

            closest = findClosestLine(new_end, grid, minLaneSeparationINMeters, angle);
        } else {
            let new_start = closest.p2.relative_point_from_dist_bearing(angle, leadin);
            new_start.tag = GridPointTags.START;
            //UTMLine(new_start, "S");
            ans.push(new_start);

            if (leadin < 0) {
                var p2 = new_start.copy()
                p2.tag = GridPointTags.MIDDLE_START;
                //UTMLine(p2, "SM");
                ans.push(p2);
            } else if(leadin > 0) {
                closest.p2.tag = GridPointTags.MIDDLE_START;
                //UTMLine(closest.p2, "SM");
                ans.push(closest.p2);
            }

            if (spacing > 0) {
                for (let d = ((closest.base_pnt.GetDistance2D(closest.p2)) % spacing);
                    d < (closest.p1.GetDistance2D(closest.p2));
                    d += spacing) {
                    // let ax = closest.p2.x;
                    // let ay = closest.p2.y;
                    let a = closest.p2.relative_point_from_dist_bearing(angle, -d);

                    // new_pos(ref ax, ref ay, angle, -d);
                    var utmpos2 = new UTMPos(a.x, a.y, utm_zone, GridPointTags.MIDDLE);
                    //UTMLine(utmpos2, "M");
                    ans.push(utmpos2);
                }
            }

            let new_end = closest.p1.relative_point_from_dist_bearing(angle, -overshoot2, GridPointTags.END);
            // utmpos new_end = new_pos(closest.p1, angle, -overshoot2);

            if (overshoot2 < 0) {
                // var p2 = new_end.copy("ME");
                //UTMLine(p2, "ME");
                ans.push(new_end.copy(GridPointTags.MIDDLE_END));
            } else if (overshoot2 > 0) {
                // closest.p1.tag = "ME";
                //UTMLine(closest.p1, "ME");
                ans.push(closest.p1.copy(GridPointTags.MIDDLE_END));
            }

            // new_end.tag = "E";
            //UTMLine(new_end, "E");
            ans.push(new_end);

            last_pnt = closest.p1;

            // grid.Remove(closest);
            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;
            closest = findClosestLine(new_end, grid, minLaneSeparationINMeters, angle);
        }
    }

    const points = NeuronInterfacePoint.from_UTMs(ans);

    // set the altitude on all points
    for(let p of points)
        p.altitude = altitude;

    return points;
}
