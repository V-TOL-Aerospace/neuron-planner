import { NeuronInterfacePoint } from "./neuron_interfaces";

export function zero_pad(num:number, places:number) {
    return String(num).padStart(places, '0');
}

let lastId = 0;
export function NeuronUID(prefix='nuid-') {
    lastId++;
    return `${prefix}${lastId}`;
}

export function flight_distance_from_coords(coords:NeuronInterfacePoint[]) {
    //XXX:  Total distance calculated with the haversine method
    //      This is a shortcut and is probably ok for small distances
    //      but we should definitely look at a proper earth model to
    //      do it properly in the future

    let total_distance = 0.0;
    for (var i = 0; i < coords.length - 1; i++) {
        const p1 = coords[i];
        const p2 = coords[i+1];
        const u1 = p1.to_UTM();
        const u2 = p2.to_UTM(u1.zone);
        const d = u1.GetDistance2D(u2);
        //Do some sneaky stuff to support altitude as well
        const alt_d = Math.pow(Math.abs(p1.altitude - p2.altitude), 2);
        total_distance += Math.sqrt(Math.pow(d,2) + alt_d);
    }

    return total_distance;
}

export function flight_time_from_duration(duration:number) {
    const t_h = Math.floor(duration / 3600);
    const t_m = Math.floor(duration % 3600 / 60);
    const t_s = Math.floor(duration % 3600 % 60);

    return `${zero_pad(t_h,2)}:${zero_pad(t_m,2)}:${zero_pad(t_s,2)}`;
}

export function mm_to_px(mm:number) {
    const default_dpi = 96;
    return (mm / 25.4) * window.devicePixelRatio * default_dpi;
}