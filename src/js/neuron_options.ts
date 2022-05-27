import { NeuronCameraSpecifications } from "./neuron_interfaces";
import { NeuronUID } from "./neuron_tools_common";

//XXX: Keep in sync with NeuronStatistics NeuronOptionsData
export enum NeuronOptionsBoolean {
    SHOW_PATH,
}

//XXX: Keep in sync with NeuronStatistics NeuronOptionsData
export enum NeuronOptionsNumber {
    MISSION_SPEED,
    CAMERA_FOCAL_LENGTH,
    CAMERA_IMAGE_WIDTH,
    CAMERA_IMAGE_HEIGHT,
    CAMERA_SENSOR_WIDTH,
    CAMERA_SENSOR_HEIGHT,
}

//XXX: Keep in sync with NeuronStatistics NeuronOptionsData
export enum NeuronOptionsString {
    CAMERA_NAME,
}

export interface NeuronOptionsData {
    SHOW_PATH:boolean,
    MISSION_SPEED:number,
    CAMERA_FOCAL_LENGTH:number,
    CAMERA_IMAGE_WIDTH:number,
    CAMERA_IMAGE_HEIGHT:number,
    CAMERA_SENSOR_WIDTH:number,
    CAMERA_SENSOR_HEIGHT:number,
    CAMERA_NAME:string,
}

export class NeuronOptions {
    //XXX: Keys must be unique!
    static camera_preset_custom = new NeuronCameraSpecifications();
    static camera_presets:NeuronCameraSpecifications[]= [
        NeuronOptions.camera_preset_custom,
        new NeuronCameraSpecifications("A6000", 20, 23.50, 15.60, 6000, 4000),
    ];

    //XXX: Keep in sync with NeuronStatisticsOptionKeys
    static #stat_options_boolean:Map<NeuronOptionsBoolean,boolean> = new Map();
    static #stat_options_number:Map<NeuronOptionsNumber,number> = new Map();
    static #stat_options_string:Map<NeuronOptionsString,string> = new Map();

    static #dom_callback:CallableFunction = null;
    static #general_callbacks:Map<string,CallableFunction> = new Map();

    static init() {
        this.set_option_boolean(NeuronOptionsBoolean.SHOW_PATH, true, false, false);
        this.set_option_number(NeuronOptionsNumber.MISSION_SPEED, 5.0, false, false);
        this.set_camera(NeuronOptions.camera_preset_custom, false, false)
    }

    static set_dom_callback(callback:CallableFunction) {
        this.#dom_callback = callback;
    }

    static add_callback(callback:CallableFunction) {
        const id = NeuronUID('option');
        this.#general_callbacks.set(id, callback);
        return this.#remove_callback.bind(this, id);
    }

    static #remove_callback(id:string) {
        if(this.#general_callbacks.has(id)) {
            this.#general_callbacks.delete(id);
        }
    }

    static #handle_callbacks(trigger_callbacks:boolean, trigger_dom:boolean) {
        if(trigger_callbacks) {
            for(const cb of this.#general_callbacks.values())
                cb();
        }

        if(trigger_dom && this.#dom_callback)
            this.#dom_callback();
    }

    static set_option_boolean(key:NeuronOptionsBoolean, value:boolean, trigger_callbacks:boolean = true, trigger_dom:boolean = true) {
        this.#stat_options_boolean.set(key, value);
        this.#handle_callbacks(trigger_callbacks, trigger_dom);
    }

    static set_option_number(key:NeuronOptionsNumber, value:number, trigger_callbacks:boolean = true, trigger_dom:boolean = true) {
        this.#stat_options_number.set(key, value);
        this.#handle_callbacks(trigger_callbacks, trigger_dom);
    }

    static set_option_string(key:NeuronOptionsString, value:string, trigger_callbacks:boolean = true, trigger_dom:boolean = true) {
        this.#stat_options_string.set(key, value);
        this.#handle_callbacks(trigger_callbacks, trigger_dom);
    }

    static set_camera(value:NeuronCameraSpecifications, trigger_callbacks:boolean = false, trigger_dom:boolean = true) {
        this.set_option_string(NeuronOptionsString.CAMERA_NAME, value.name, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH, value.focal_length, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH, value.image_width, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT, value.image_height, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH, value.sensor_width, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT, value.sensor_height, false, false);

        this.#handle_callbacks(trigger_callbacks, trigger_dom);
    };

    static get_option_boolean(key:NeuronOptionsBoolean) {
        return this.#stat_options_boolean.get(key);
    }

    static get_option_number(key:NeuronOptionsNumber) {
        return this.#stat_options_number.get(key);
    }

    static get_option_string(key:NeuronOptionsString) {
        return this.#stat_options_string.get(key);
    }

    static get_camera() {
        return new NeuronCameraSpecifications(
            this.get_option_string(NeuronOptionsString.CAMERA_NAME),
            this.get_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH),
            this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH),
            this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT),
            this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH),
            this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT)
        );
    }

    static as_json() {
        return <NeuronOptionsData>{
            SHOW_PATH: this.get_option_boolean(NeuronOptionsBoolean.SHOW_PATH),
            MISSION_SPEED: this.get_option_number(NeuronOptionsNumber.MISSION_SPEED),
            CAMERA_FOCAL_LENGTH: this.get_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH),
            CAMERA_SENSOR_WIDTH: this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH),
            CAMERA_SENSOR_HEIGHT: this.get_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT),
            CAMERA_IMAGE_WIDTH: this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH),
            CAMERA_IMAGE_HEIGHT: this.get_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT),
            CAMERA_NAME: this.get_option_string(NeuronOptionsString.CAMERA_NAME),
        };
    }

    static load(j:NeuronOptionsData) {
        this.set_option_boolean(NeuronOptionsBoolean.SHOW_PATH, Boolean(j.SHOW_PATH), false, false);
        this.set_option_number(NeuronOptionsNumber.MISSION_SPEED, Number.isNaN(j.MISSION_SPEED) ? 0 : j.MISSION_SPEED, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_FOCAL_LENGTH, Number.isNaN(j.CAMERA_FOCAL_LENGTH) ? 0 : j.CAMERA_FOCAL_LENGTH, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_WIDTH, Number.isNaN(j.CAMERA_IMAGE_WIDTH) ? 0 : j.CAMERA_IMAGE_WIDTH, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_IMAGE_HEIGHT, Number.isNaN(j.CAMERA_IMAGE_HEIGHT) ? 0 : j.CAMERA_IMAGE_HEIGHT, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_WIDTH, Number.isNaN(j.CAMERA_SENSOR_WIDTH) ? 0 : j.CAMERA_SENSOR_WIDTH, false, false);
        this.set_option_number(NeuronOptionsNumber.CAMERA_SENSOR_HEIGHT, Number.isNaN(j.CAMERA_SENSOR_HEIGHT) ? 0 : j.CAMERA_SENSOR_HEIGHT, false, false);
        this.set_option_string(NeuronOptionsString.CAMERA_NAME, j.CAMERA_NAME.toString(), false, false);

        this.#handle_callbacks(true, true);
    };
}
