import { flight_distance_from_coords, flight_time_from_duration } from "./neuron_tools_common";
import { NeuronPlanner } from "./neuron_planner";
import { NeuronDOMFactory } from "./neuron_dom_factory";

//XXX: Keep in sync with NeuronStatistics #stat_options
export enum NeuronStatisticsOptionKeys {
    MISSION_SPEED,
}

export class NeuronStatistics extends NeuronDOMFactory {
    #planner:NeuronPlanner;
    #stats_element_prefix:string;
    #stats_section_show_display:string;

    #stat_options:Map<NeuronStatisticsOptionKeys,number>;

    #stats_results_element:HTMLElement;
    #stats_options_element:HTMLElement;
    #stats_results_hide_element:HTMLElement;
    #stats_options_hide_element:HTMLElement;
    #stats_results_title_element:HTMLElement;
    #stats_options_title_element:HTMLElement;

    #dom_option_speed:HTMLInputElement;

    #dom_stat_waypoints:HTMLOutputElement;
    #dom_stat_distance:HTMLOutputElement;
    #dom_stat_duration:HTMLOutputElement;

    constructor(planner:NeuronPlanner, stats_element_prefix:string) {
        super(stats_element_prefix);

        this.#planner = planner;

        //XXX: Keep in sync with NeuronStatisticsOptionKeys
        this.#stat_options = new Map();
        this.#stat_options.set(NeuronStatisticsOptionKeys.MISSION_SPEED, 5.0);

        this.#stats_options_element = null;
        this.#stats_results_element = null;
        this.#stats_options_hide_element = null;
        this.#stats_results_hide_element = null;
        this.#stats_options_title_element = null;
        this.#stats_results_title_element = null;
        this.#stats_element_prefix = stats_element_prefix;
        this.#stats_section_show_display = 'grid';

        this.#dom_stat_waypoints = null;
        this.#dom_stat_distance = null;
        this.#dom_stat_duration = null;
    }

    // #get_option_id_from_key(key:NeuronStatisticsOptionKeys) {
    //     return `${this.#stats_element_prefix}-options-${key}`;
    // }

    // get_results_id_from_key(key:string) {
    //     return `${this.#stats_element_prefix}-results-${key}`;
    // }

    get_option(key:NeuronStatisticsOptionKeys) {
        return this.#stat_options.has(key) ? this.#stat_options.get(key) : null;
    }

    set_option(key:NeuronStatisticsOptionKeys, value:number) {
        this.#stat_options.set(key, value);

        this.update();
    }

    update() {
        const coords = this.#planner.get_mission_as_points();
        // this.#last_mission_altitude = coords.length ?
        //     coords[coords.length - 1].altitude :
        //     0.0;

        let total_distance = flight_distance_from_coords(coords);
        const dist_km = total_distance / 1000;

        //Get the flight speed and lock it to at least 0.1m/s
        const s = this.get_option(NeuronStatisticsOptionKeys.MISSION_SPEED);
        const flight_speed = Math.max(s ? s : 0.0, 0.1);
        const total_time = total_distance/flight_speed;

        if(this.#dom_stat_waypoints)
            this.#dom_stat_waypoints.value = coords.length.toFixed(0);

        if(this.#dom_stat_distance)
            this.#dom_stat_distance.value = `${(dist_km).toFixed(2)}km`;

        if(this.#dom_stat_duration)
            this.#dom_stat_duration.value = flight_time_from_duration(total_time);
    }

    #update_option_speed_dom() {
        if(this.#dom_option_speed)
            this.set_option(NeuronStatisticsOptionKeys.MISSION_SPEED, this.#dom_option_speed.valueAsNumber);
    }

    #gen_dom() {
        //Options
        this.#stats_options_element = document.getElementById(`${this.#stats_element_prefix}-options`);
        this.#stats_options_element.innerHTML = '';

        const t0 = "Speed of the aircraft during regular flight in metres per second";
        this.#dom_option_speed = this._create_dom_input_number(this.get_option(NeuronStatisticsOptionKeys.MISSION_SPEED), this.#update_option_speed_dom.bind(this), 0.1);
        this.#dom_option_speed.title = t0;
        this.#stats_options_element.appendChild(this._create_dom_label("Speed (m/s):", this.#dom_option_speed, t0));
        this.#stats_options_element.appendChild(this.#dom_option_speed);

        //Statistics
        this.#stats_results_element = document.getElementById(`${this.#stats_element_prefix}-results`);
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

        //Callbacks for hide
        this.#stats_results_hide_element = document.getElementById(`${this.#stats_element_prefix}-results-hide`);
        this.#stats_results_title_element = document.getElementById(`${this.#stats_element_prefix}-results-title`);
        this.#stats_results_title_element.style.cursor = 'pointer';
        this.#stats_results_title_element.onclick = this.#toggle_hide_section.bind(
            this,
            // this.#stats_results_title_element,
            this.#stats_results_hide_element,
            this.#stats_results_element
        );
        this.#stats_options_hide_element = document.getElementById(`${this.#stats_element_prefix}-options-hide`);
        this.#stats_options_title_element = document.getElementById(`${this.#stats_element_prefix}-options-title`);
        this.#stats_options_title_element.style.cursor = 'pointer';
        this.#stats_options_title_element.onclick = this.#toggle_hide_section.bind(
            this,
            // this.#stats_options_title_element,
            this.#stats_options_hide_element,
            this.#stats_options_element
        );

    }

    #toggle_hide_section(button:HTMLElement, section:HTMLElement) {
        if(section.style.display != 'none') {
            //Hide
            section.style.display = 'none';
        } else {
            //Show
            section.style.display = this.#stats_section_show_display;
        }

        button.innerHTML = '';
        let i = document.createElement('i');
        i.className = `fas fa-${section.style.display == 'none' ? 'plus' : 'minus'}`;
        button.appendChild(i);
    }

    reset() {
        this.#gen_dom();

        //Update the planner
        this.update();
    }
}
