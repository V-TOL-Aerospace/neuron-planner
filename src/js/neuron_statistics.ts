import { flight_time_from_duration } from "./neuron_tools_common";
import { NeuronPlanner } from "./neuron_planner";
import { NeuronDOMFactory } from "./neuron_dom_factory";
import { NeuronBrief } from "./neuron_brief";
import { NeuronOptions } from "./neuron_options";

//TODO: Document
export class NeuronStatistics extends NeuronDOMFactory {
    #planner:NeuronPlanner;
    #brief:NeuronBrief;
    #stats_element_name_stats:string;

    #stats_results_element:HTMLElement;

    #dom_stat_waypoints:HTMLOutputElement;
    #dom_stat_distance:HTMLOutputElement;
    #dom_stat_duration:HTMLOutputElement;
    #dom_stat_images:HTMLOutputElement;

    #unsub_option_cb:()=>void;

    constructor(planner:NeuronPlanner, brief:NeuronBrief, element_name_stats:string) {
        super('fp-stats');

        this.#planner = planner;
        this.#brief = brief;

        this.#stats_element_name_stats = element_name_stats;
        this.#stats_results_element = null;

        this.#dom_stat_waypoints = null;
        this.#dom_stat_distance = null;
        this.#dom_stat_duration = null;
        this.#dom_stat_images = null;

        this.set_options_subscriber();
    }

    set_options_subscriber() {
        if(this.#unsub_option_cb)
            this.#unsub_option_cb();

        this.#unsub_option_cb = NeuronOptions.add_callback(this.update_statistics.bind(this));
    }

    update_statistics() {
        const coords = this.#planner.get_mission_as_points();
        const summary = this.#brief.get_mission_summary(this.#planner.get_mission_items());
        // this.#last_mission_altitude = coords.length ?
        //     coords[coords.length - 1].altitude :
        //     0.0;

        // let total_distance = flight_distance_from_coords(coords);
        const dist_km = summary.total_distance / 1000;

        //Get the flight speed and lock it to at least 0.1m/s
        // const s = NeuronOptions.get_option_number(NeuronOptionsNumber.MISSION_SPEED);
        // const flight_speed = Math.max(s ? s : 0.0, 0.1);

        if(this.#dom_stat_waypoints)
            this.#dom_stat_waypoints.value = coords.length.toFixed(0);

        if(this.#dom_stat_distance)
            this.#dom_stat_distance.value = `${(dist_km).toFixed(2)}km`;

        if(this.#dom_stat_duration)
            this.#dom_stat_duration.value = flight_time_from_duration(summary.total_duration);

        if(this.#dom_stat_images)
            this.#dom_stat_images.value = summary.total_images > 0 ? summary.total_images.toString() : "—";
    }

    #gen_dom() {
        //Statistics
        this.#stats_results_element = document.getElementById(this.#stats_element_name_stats);
        this.#stats_results_element.innerHTML = '';

        const t1 = "Total number of waypoints in the mission plan";
        this.#dom_stat_waypoints = this._create_dom_output();
        this.#dom_stat_waypoints.title = t1;
        this.#stats_results_element.appendChild(this._create_dom_label("Waypoints:", this.#dom_stat_waypoints, t1));
        this.#stats_results_element.appendChild(this.#dom_stat_waypoints);

        const t2 = "Total distance traveled during the mission plan";
        this.#dom_stat_distance = this._create_dom_output();
        this.#dom_stat_distance.title = t2;
        this.#stats_results_element.appendChild(this._create_dom_label("Distance:", this.#dom_stat_distance, t2));
        this.#stats_results_element.appendChild(this.#dom_stat_distance);

        const t3 = "Total time taken to fly the mission plan";
        this.#dom_stat_duration = this._create_dom_output();
        this.#dom_stat_duration.title = t3;
        this.#stats_results_element.appendChild(this._create_dom_label("Duration:", this.#dom_stat_duration, t3));
        this.#stats_results_element.appendChild(this.#dom_stat_duration);

        const t4 = "Total number of images taken during the mission plan";
        this.#dom_stat_images = this._create_dom_output();
        this.#dom_stat_images.title = t4;
        this.#stats_results_element.appendChild(this._create_dom_label("Images:", this.#dom_stat_images, t4));
        this.#stats_results_element.appendChild(this.#dom_stat_images);
    }

    reset() {
        this.#gen_dom();

        //Update the planner
        this.update_statistics();
    }
}
