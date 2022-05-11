import { NeuronFeatureBase } from "./neuron_feature_base";
import { NeuronInterfacePoint } from "./neuron_interfaces";

enum NeuronPlannerOptionKeys {
    MISSION_SPEED = 'fp-stats-options-speed',
}

export class NeuronPlanner {
    #plan_element:HTMLElement;
    #option_elements:Map<string,HTMLInputElement>;
    #stats_element:HTMLElement;
    #mission_items:NeuronFeatureBase[];
    #on_change_callbacks:Map<number,CallableFunction>;
    #last_callback_id:number;
    #clearing_mission:boolean;

    #last_mission_altitude:number;

    constructor(plan_element_name:string, stats_element_name:string) {
        this.#plan_element = document.getElementById(plan_element_name);
        this.#stats_element = document.getElementById(stats_element_name);
        this.#option_elements = new Map();

        let option_element_names = [
            NeuronPlannerOptionKeys.MISSION_SPEED,
        ]
        for(const n of option_element_names) {
            const e = <HTMLInputElement>document.getElementById(n);
            e.onchange = this.update_mission_stats.bind(this);
            this.#option_elements.set(n, e);
        }

        this.#mission_items = [];
        this.#on_change_callbacks = new Map();
        this.#last_callback_id = 0;
        this.#last_mission_altitude = 0.0;
        this.#clearing_mission = false;
    }

    get_option(key:NeuronPlannerOptionKeys) {
        return this.#option_elements.has(key) ? this.#option_elements.get(key).value : null;
    }

    #run_on_mission_change(){
        for(const cb of this.#on_change_callbacks.values())
            cb();

        this.update_mission_stats();
    }

    on_mission_change(cb:CallableFunction): CallableFunction {
        const id = this.#last_callback_id++;
        this.#on_change_callbacks.set(id, cb);

        return this.#remove_on_mission_change.bind(this, id);
    }

    #remove_on_mission_change(key:number) {
        if(this.#on_change_callbacks.has(key)) {
            this.#on_change_callbacks.delete(key);
        }
    }

    #mission_item_changed(item:NeuronFeatureBase) {
        this.#run_on_mission_change();
    }

    #array_move(arr:any[], old_index:number, new_index:number) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
    };

    #move_mission_item(item:NeuronFeatureBase, direction:number) {
        let ind = this.#mission_items.indexOf(item);
        if(ind >= 0) {
            //Move index and clamp to array size
            let new_ind = ind + (direction > 0 ? 1 : -1)
            new_ind = Math.max(Math.min(new_ind, (this.#mission_items.length - 1)), 0);
            this.#array_move(this.#mission_items, ind, new_ind);

            this.update();
            this.#run_on_mission_change();
        } else {
            console.warn("Unknown mission item, cannot move");
        }
    }

    get_last_item_altitude() {
        return this.#last_mission_altitude;
    }

    add_mission_item(item:NeuronFeatureBase) {
        item.set_remove_callback(this.remove_mission_item.bind(this));
        item.set_change_callback(this.#mission_item_changed.bind(this));
        item.set_move_callback(this.#move_mission_item.bind(this));
        this.#mission_items.push(item);

        this.update();
        this.#run_on_mission_change();
    }

    remove_mission_item(item:NeuronFeatureBase) {
        // console.log(`Mission item removed: ${item}`);
        let index = this.#mission_items.indexOf(item);
        if(index !== -1) {
            this.#mission_items.splice(index, 1);
        }

        if(!this.#clearing_mission) {
            this.update();
            this.#run_on_mission_change();
        }
    }

    clear_mission() {
        this.#clearing_mission = true;
        while(this.#mission_items.length > 0)
            this.#mission_items[0].remove_feature();
        this.#clearing_mission = false;

        //Do this in bulk at the end
        this.update();
        this.#run_on_mission_change();
    }

    update_mission_plan() {
        this.#plan_element.innerHTML = '';

        // let count = 0;
        for(const i of this.#mission_items) {
            // count++;

            // const dom = document.createElement('div');
            // dom.appendChild(document.createTextNode(`Step #${count}: ${i.constructor.name}`));

            this.#plan_element.appendChild(i.get_dom());
        }
    }

    update_mission_stats() {
        const coords = this.get_mission_coords();
        this.#last_mission_altitude = coords.length ?
            coords[coords.length - 1].altitude :
            0.0;

        //XXX:  Total distance calculated with the haversine method
        //      This is a shortcut and is probably ok for small distances
        //      but we should definitely look at a propper earth model to
        //      do it properly in the future
        let total_distance = 0.0;
        for (var i = 0; i < coords.length - 1; i++) {
            const p1 = coords[i];
            const p2 = coords[i+1];
            const u1 = p1.to_UTM();
            const u2 = p2.to_UTM(u1.zone);
            const d = u1.GetDistance(u2);
            //Do some sneaky stuff to support altitude as well
            const altd = Math.pow(Math.abs(p1.altitude - p2.altitude), 2);
            total_distance += Math.sqrt(Math.pow(d,2) + altd);
        }

        const s = this.get_option(NeuronPlannerOptionKeys.MISSION_SPEED);
        const flight_speed = Math.max(s ? Number.parseFloat(s) : 0.0, 0.1);

        this.#stats_element.innerHTML = '';

        const s1 = document.createElement('div');
        s1.appendChild(document.createTextNode(`Waypoints: ${coords.length}`));
        this.#stats_element.appendChild(s1);

        const s2 = document.createElement('div');
        s2.appendChild(document.createTextNode(`Distance: ${(total_distance/1000).toFixed(2)} km`));
        this.#stats_element.appendChild(s2);

        const s3 = document.createElement('div');
        s3.appendChild(document.createTextNode(`Time: ${(total_distance/flight_speed/60).toFixed(2)} min`));
        this.#stats_element.appendChild(s3);
    }

    reset() {
        this.update();
    }

    update() {
        this.update_mission_plan();
        this.update_mission_stats();
    }

    get_mission_coords() {
        let coords:NeuronInterfacePoint[] = [];

        for(const i of this.#mission_items)
            coords = coords.concat(i.get_path_coords());

        return coords;
    }
}
