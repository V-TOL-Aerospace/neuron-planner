import { NeuronCameraSpecifications } from "./neuron_interfaces";

//XXX: Keep in sync with NeuronStatistics #stat_options
export enum NeuronOptionKeysBoolean {
    SHOW_PATH,
}

export enum NeuronOptionKeysNumber {
    MISSION_SPEED,
    CAMERA_FOCAL_LENGTH,
    CAMERA_IMAGE_WIDTH,
    CAMERA_IMAGE_HEIGHT,
    CAMERA_SENSOR_WIDTH,
    CAMERA_SENSOR_HEIGHT,
}

export enum NeuronOptionKeysString {
    CAMERA_NAME,
}


type NeuronOptionTypes = NeuronOptionKeysBoolean |
                         NeuronOptionKeysNumber |
                         NeuronOptionKeysString;

export class NeuronOptions {
    //XXX: Keys must be unique!
    static camera_preset_custom = new NeuronCameraSpecifications();
    static camera_presets:NeuronCameraSpecifications[]= [
        NeuronOptions.camera_preset_custom,
        new NeuronCameraSpecifications("A6000", 20, 23.50, 15.60, 6000, 4000),
    ];

    //XXX: Keep in sync with NeuronStatisticsOptionKeys
    static #stat_options_boolean = new Map();
    static #stat_options_number = new Map();
    static #stat_options_string = new Map();
    static #camera = NeuronOptions.camera_preset_custom.copy();

    static init() {
        this.set_option(NeuronOptionKeysBoolean.SHOW_PATH, true, false);
        this.set_option(NeuronOptionKeysNumber.MISSION_SPEED, 5.0, false);
        this.set_camera(NeuronOptions.camera_preset_custom, false);
        // this.set_option(NeuronStatisticsOptionKeysString.CAMERA_NAME, NeuronStatistics._camera_preset_custom.name);
        // this.set_option(NeuronStatisticsOptionKeysNumber.CAMERA_FOCAL_LENGTH, 0);
        // this.set_option(NeuronStatisticsOptionKeysNumber.CAMERA_IMAGE_WIDTH, 0);
        // this.set_option(NeuronStatisticsOptionKeysNumber.CAMERA_IMAGE_HEIGHT, 0);
        // this.set_option(NeuronStatisticsOptionKeysNumber.CAMERA_SENSOR_WIDTH, 0);
        // this.set_option(NeuronStatisticsOptionKeysNumber.CAMERA_SENSOR_HEIGHT, 0);

    }

    static get_option(key:NeuronOptionTypes) {
        if(key in NeuronOptionKeysBoolean) {
            const k = key as NeuronOptionKeysBoolean;
            return this.#stat_options_boolean.has(k) ? this.#stat_options_boolean.get(k) : null;
        } else if (key in NeuronOptionKeysNumber) {
            const k = key as NeuronOptionKeysNumber;
            return this.#stat_options_number.has(k) ? this.#stat_options_number.get(k) : null;
        } else if (key in NeuronOptionKeysString) {
            const k = key as NeuronOptionKeysString;
            return this.#stat_options_string.has(k) ? this.#stat_options_string.get(k) : null;
        }

        return null;
    }

    static set_option(key:NeuronOptionTypes, value:number|boolean|string, trigger_callbacks:boolean = false) {
        if((key in NeuronOptionKeysBoolean) && (typeof value == 'boolean')) {
            const k = key as NeuronOptionKeysBoolean;
            this.#stat_options_boolean.set(k, value);
        } else if ((key in NeuronOptionKeysNumber) && (typeof value == 'number')) {
            const k = key as NeuronOptionKeysNumber;
            this.#stat_options_number.set(k, value);
        } else if ((key in NeuronOptionKeysString) && (typeof value == 'string')) {
            const k = key as NeuronOptionKeysString;
            this.#stat_options_string.set(k, value);
        } else {
            throw new Error("Type could not be identified!");
        }

        //TODO: Add option callbacks!
        // if(trigger_callbacks)
        //     this.#calculate_and_update_camera_variables();

        //TODO: Figure out how to do it without callback hell!
    }

    static set_camera(camera:NeuronCameraSpecifications, trigger_callbacks:boolean = false) {
        this.#camera = camera;

        this.set_option(NeuronOptionKeysString.CAMERA_NAME, this.#camera.name, false);
        this.set_option(NeuronOptionKeysNumber.CAMERA_FOCAL_LENGTH, this.#camera.focal_length, false);
        this.set_option(NeuronOptionKeysNumber.CAMERA_IMAGE_WIDTH, this.#camera.image_width, false);
        this.set_option(NeuronOptionKeysNumber.CAMERA_IMAGE_HEIGHT, this.#camera.image_height, false);
        this.set_option(NeuronOptionKeysNumber.CAMERA_SENSOR_WIDTH, this.#camera.sensor_width, false);
        this.set_option(NeuronOptionKeysNumber.CAMERA_SENSOR_HEIGHT, this.#camera.sensor_height, false);

        //TODO: Add option callbacks!
        // if(trigger_callbacks)
        //     this.#calculate_and_update_camera_variables();
    };

    static get_camera() {
        return this.#camera.copy();
    }
}
