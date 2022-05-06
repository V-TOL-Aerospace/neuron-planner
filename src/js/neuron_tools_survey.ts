import { NeuronInterfacePoint, UTMPos, UTMLine } from "./neuron_interfaces";

enum StartPosition
{
    Home = 0,
    BottomLeft = 1,
    TopLeft = 2,
    BottomRight = 3,
    TopRight = 4,
    Point = 5
}

export function CreateGrid(
    polygon:NeuronInterfacePoint[],
    altitude:number,
    distance:number,
    spacing:number,
    angle:number,
    overshoot1:number,
    overshoot2:number,
    startpos:StartPosition,
    shutter:boolean,
    minLaneSeparation:number,
    leadin:number,
    HomeLocation:NeuronInterfacePoint)
{
    let ans:NeuronInterfacePoint[] = [];

    if (spacing < 0.1 && spacing != 0)
        spacing = 0.1;

    if (distance < 0.1)
        distance = 0.1;

    if (polygon.length == 0)
        return ans;


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
    // double xb2 = x;
    // double yb2 = y;
    // // to the right
    // newpos(ref xb2, ref yb2, angle + 90, diagdist / 2 + distance);
    // // backwards
    // newpos(ref xb2, ref yb2, angle + 180, diagdist / 2 + distance);

    // utmpos right = new utmpos(xb2, yb2, utmzone);
    let right = startp.relative_point_from_dist_bearing(angle + 90, diagdist / 2 + distance).relative_point_from_dist_bearing(angle + 180, diagdist / 2 + distance);

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
        for (const pnt in utmpositions) {
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

            while (matchs.Count > 1)
            {
                let newline = new UTMLine();

                closestpoint = findClosestPoint(closestpoint, matchs);
                newline.p1 = closestpoint;
                matchs.Remove(closestpoint);

                closestpoint = findClosestPoint(closestpoint, matchs);
                newline.p2 = closestpoint;
                matchs.Remove(closestpoint);

                newline.basepnt = line.basepnt;

                grid.push(newline);
            }
        }
    }

    // cleanup and keep only lines that pass though our polygon
    for(const line of remove)
    {
        grid.Remove(line);
    }

    // debug
    // for (const line of grid)
    // {
        //UTMLine(line);
    // }

    if (grid.length == 0)
        return ans;

    // pick start positon based on initial point rectangle
    let startposutm:UTMPos = null;

    switch (startpos)
    {
        default:
        case StartPosition.Home:
            startposutm = HomeLocation.to_UTM();
            break;
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
        case StartPosition.Point:
            startposutm = new UTMPos();
            startposutm.zone = utmzone;
            break;
    }

    // find the closes polygon point based from our startpos selection
    startposutm = findClosestPoint(startposutm, utmpositions);

    // find closest line point to startpos
    UTMLine closest = findClosestLine(startposutm, grid, 0 /*Lane separation does not apply to starting point*/, angle);

    utmpos lastpnt;

    // get the closes point from the line we picked
    if (closest.p1.GetDistance(startposutm) < closest.p2.GetDistance(startposutm))
    {
        lastpnt = closest.p1;
    }
    else
    {
        lastpnt = closest.p2;
    }

    // S =  start
    // E = end
    // ME = middle end
    // SM = start middle

    while (grid.Count > 0)
    {
        // for each line, check which end of the line is the next closest
        if (closest.p1.GetDistance(lastpnt) < closest.p2.GetDistance(lastpnt))
        {
            utmpos newstart = newpos(closest.p1, angle, -leadin);
            newstart.Tag = "S";
            //UTMLine(newstart, "S");
            ans.Add(newstart);

            if (leadin < 0)
            {
                var p2 = new utmpos(newstart) { Tag = "SM" };
                //UTMLine(p2, "SM");
                ans.Add(p2);
            }
            else
            {
                closest.p1.Tag = "SM";
                //UTMLine(closest.p1, "SM");
                ans.Add(closest.p1);
            }

            if (spacing > 0)
            {
                for (double d = (spacing - ((closest.basepnt.GetDistance(closest.p1)) % spacing));
                    d < (closest.p1.GetDistance(closest.p2));
                    d += spacing)
                {
                    double ax = closest.p1.x;
                    double ay = closest.p1.y;

                    newpos(ref ax, ref ay, angle, d);
                    var utmpos1 = new utmpos(ax, ay, utmzone) { Tag = "M" };
                    //UTMLine(utmpos1, "M");
                    ans.Add(utmpos1);
                }
            }

            utmpos newend = newpos(closest.p2, angle, overshoot1);

            if (overshoot1 < 0)
            {
                var p2 = new utmpos(newend) { Tag = "ME" };
                //UTMLine(p2, "ME");
                ans.Add(p2);
            }
            else
            {
                closest.p2.Tag = "ME";
                //UTMLine(closest.p2, "ME");
                ans.Add(closest.p2);
            }

            newend.Tag = "E";
            //UTMLine(newend, "E");
            ans.Add(newend);

            lastpnt = closest.p2;

            grid.Remove(closest);
            if (grid.Count == 0)
                break;

            closest = findClosestLine(newend, grid, minLaneSeparationINMeters, angle);
        }
        else
        {
            utmpos newstart = newpos(closest.p2, angle, leadin);
            newstart.Tag = "S";
            //UTMLine(newstart, "S");
            ans.Add(newstart);

            if (leadin < 0)
            {
                var p2 = new utmpos(newstart) { Tag = "SM" };
                //UTMLine(p2, "SM");
                ans.Add(p2);
            }
            else
            {
                closest.p2.Tag = "SM";
                //UTMLine(closest.p2, "SM");
                ans.Add(closest.p2);
            }

            if (spacing > 0)
            {
                for (double d = ((closest.basepnt.GetDistance(closest.p2)) % spacing);
                    d < (closest.p1.GetDistance(closest.p2));
                    d += spacing)
                {
                    double ax = closest.p2.x;
                    double ay = closest.p2.y;

                    newpos(ref ax, ref ay, angle, -d);
                    var utmpos2 = new utmpos(ax, ay, utmzone) { Tag = "M" };
                    //UTMLine(utmpos2, "M");
                    ans.Add(utmpos2);
                }
            }

            utmpos newend = newpos(closest.p1, angle, -overshoot2);

            if (overshoot2 < 0)
            {
                var p2 = new utmpos(newend) { Tag = "ME" };
                //UTMLine(p2, "ME");
                ans.Add(p2);
            }
            else
            {
                closest.p1.Tag = "ME";
                //UTMLine(closest.p1, "ME");
                ans.Add(closest.p1);
            }

            newend.Tag = "E";
            //UTMLine(newend, "E");
            ans.Add(newend);

            lastpnt = closest.p1;

            grid.Remove(closest);
            if (grid.Count == 0)
                break;
            closest = findClosestLine(newend, grid, minLaneSeparationINMeters, angle);
        }
    }

    // set the altitude on all points
    ans.ForEach(plla => { plla.Alt = altitude; });

    return ans;
}
