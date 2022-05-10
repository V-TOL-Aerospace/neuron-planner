import { NeuronInterfacePoint, UTMPos, UTMLine } from "./neuron_interfaces";

export enum StartPosition {
    // Home = 0,
    BottomLeft = 1,
    TopLeft = 2,
    BottomRight = 3,
    TopRight = 4,
    // Point = 5
}

function remove_item_from_array(array:any[], item:any) {
    const index = array.indexOf(item);
    if (index > -1)
        array.splice(index, 1);
}
/**
 * @param  {NeuronInterfacePoint[]} polygon List of points that define the survey polygon
 * @param  {number} altitude altitude to map to thhe final points
 * @param  {number} distance distance between lines? TODO:
 * @param  {number} spacing spacing between lines?  TODO:
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

    //XXX:TODO:
    // utm position list
    let utmpositions = polygon.map(x => x.to_UTM());    //TODO: Make sure UTM points are all referenced to the same zone
    // utm zone distance calcs will be done in
    const utmzone = utmpositions[0].zone;
    // let utmpositions = utmpos.ToList(NeuronInterfacePoint.ToUTM(utmzone, polygon), utmzone);
    // let utmpositions = polygon;

    // close the loop if its not already
    if (utmpositions[0].equals(utmpositions[utmpositions.length - 1]))
        utmpositions.push(utmpositions[0]); // make a full loop

    // get mins/maxs of coverage area
    let area = UTMPos.getPolyMinMax(utmpositions);

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

        let b = -1;
        let crosses = 0;
        let newutmpos = new UTMPos();
        for (const pnt of utmpositions) {
            b++;
            if (b == 0)
                continue;

            newutmpos = UTMPos.FindLineIntersection(utmpositions[b - 1], utmpositions[b], grid[a].p1, grid[a].p2);
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
            if (!UTMPos.PointInPolygon(grid[a].p1, utmpositions) && !UTMPos.PointInPolygon(grid[a].p2, utmpositions))
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
                closestpoint = UTMPos.findClosestPoint(closestpoint, matchs);
                const p1 = closestpoint;
                remove_item_from_array(matchs, closestpoint);

                closestpoint = UTMPos.findClosestPoint(closestpoint, matchs);
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

    // cleanup and keep only lines that pass though our polygon
    for(const line of remove)
        remove_item_from_array(grid, line);

    // debug
    // for (const line of grid)
    // {
        //UTMLine(line);
    // }

    if (grid.length == 0)
        return [];

    // pick start positon based on initial point rectangle
    let startposutm:UTMPos = null;

    switch (startpos)
    {
        default:
        // case StartPosition.Home:
        //     startposutm = HomeLocation.to_UTM();
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
    startposutm = UTMPos.findClosestPoint(startposutm, utmpositions);

    // find closest line point to startpos
    let closest = UTMPos.findClosestLine(startposutm, grid, 0 /*Lane separation does not apply to starting point*/, angle);

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
                    let utmpos1 = new UTMPos(closest.p1.x, closest.p1.y, utmzone, "", "M");
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

            closest = UTMPos.findClosestLine(newend, grid, minLaneSeparationINMeters, angle);
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
                    var utmpos2 = new UTMPos(a.x, a.y, utmzone, "", "M");
                    //UTMLine(utmpos2, "M");
                    ans.push(utmpos2);
                }
            }

            let newend = closest.p1.relative_point_from_dist_bearing(angle, -overshoot2);
            // utmpos newend = newpos(closest.p1, angle, -overshoot2);

            if (overshoot2 < 0) {
                var p2 = newend.copy()
                p2.tag = "ME";
                //UTMLine(p2, "ME");
                ans.push(p2);
            } else {
                closest.p1.tag = "ME";
                //UTMLine(closest.p1, "ME");
                ans.push(closest.p1);
            }

            newend.tag = "E";
            //UTMLine(newend, "E");
            ans.push(newend);

            lastpnt = closest.p1;

            // grid.Remove(closest);
            remove_item_from_array(grid, closest);
            if (grid.length == 0)
                break;
            closest = UTMPos.findClosestLine(newend, grid, minLaneSeparationINMeters, angle);
        }
    }

    const points = NeuronInterfacePoint.from_UTMs(ans);

    // set the altitude on all points
    for(let p of points)
        p.altitude = altitude;

    return points;
}
