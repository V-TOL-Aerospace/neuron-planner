import { NeuronDOMFactory } from "./neuron_dom_factory";
import { NeuronCameraSpecifications } from "./neuron_interfaces";
import { NeuronOptionsBoolean, NeuronOptionsNumber, NeuronOptions } from "./neuron_options";

export class NeuronSettings extends NeuronDOMFactory {
    #element_name_options:string;
    #stats_options_element:HTMLElement;

    //Flight options
    #dom_option_show_path:HTMLInputElement;
    #dom_option_speed:HTMLInputElement;
    //Capture parameters
    #dom_option_camera_name:HTMLSelectElement;
    #dom_option_camera_focal_length:HTMLInputElement;
    #dom_option_camera_image_width:HTMLInputElement;
    #dom_option_camera_image_height:HTMLInputElement;
    #dom_option_camera_sensor_width:HTMLInputElement;
    #dom_option_camera_sensor_height:HTMLInputElement;

    static _camera_focal_length_min:number = 0;
    static _camera_sensor_width_min:number = 0;
    static _camera_sensor_height_min:number = 0;
    static _camera_image_width_min:number = 0;
    static _camera_image_height_min:number = 0;

    constructor(element_name_options:string) {
        super('fp-options');

        this.#element_name_options = element_name_options;

        this.#dom_option_show_path = null;
        this.#dom_option_speed = null;
        this.#dom_option_camera_name = null;
        this.#dom_option_camera_focal_length = null;
        this.#dom_option_camera_image_width = null;
        this.#dom_option_camera_image_height = null;
        this.#dom_option_camera_sensor_width = null;
        this.#dom_option_camera_sensor_height = null;

        this.#stats_options_element = null;

        NeuronOptions.set_dom_callback(this.#update_dom_from_options.bind(this));
    }

    #update_option_speed_dom() {
        if(this.#dom_option_speed)
            NeuronOptions.set_option_number(NeuronOptionsNumber.MISSION_SPEED, this.#dom_option_speed.valueAsNumber, true, false);
    }

    #update_option_show_path() {
        if(this.#dom_option_show_path)
            NeuronOptions.set_option_boolean(NeuronOptionsBoolean.SHOW_PATH, this.#dom_option_show_path.checked, true, false);
    }

    #update_dom_from_options() {
        if(this.#dom_option_show_path)
            this.#dom_option_show_path.checked = NeuronOptions.get_option_boolean(NeuronOptionsBoolean.SHOW_PATH);

        if(this.#dom_option_speed)
            this.#dom_option_speed.value = NeuronOptions.get_option_number(NeuronOptionsNumber.MISSION_SPEED).toString();

        this.set_camera(NeuronOptions.get_camera(), false);
    }

    #gen_dom() {
        //Options
        this.#stats_options_element = document.getElementById(this.#element_name_options);
        this.#stats_options_element.innerHTML = '';

        const t5 = "Display the calculated flight path on the map";
        this.#dom_option_show_path = this._create_dom_input_checkbox(NeuronOptions.get_option_boolean(NeuronOptionsBoolean.SHOW_PATH), this.#update_option_show_path.bind(this));
        this.#dom_option_show_path.title = t5;
        this.#stats_options_element.appendChild(this._create_dom_label("Show path:", this.#dom_option_show_path, t5));
        this.#stats_options_element.appendChild(this.#dom_option_show_path);

        const t0 = "Speed of the aircraft during regular flight in metres per second";
        this.#dom_option_speed = this._create_dom_input_number(NeuronOptions.get_option_number(NeuronOptionsNumber.MISSION_SPEED), this.#update_option_speed_dom.bind(this), 0.1);
        this.#dom_option_speed.title = t0;
        this.#stats_options_element.appendChild(this._create_dom_label("Speed (m/s):", this.#dom_option_speed, t0));
        this.#stats_options_element.appendChild(this.#dom_option_speed);

        const tb = "Camera configuration for survey parameters.";
        let dom_break = this._create_dom_output();
        dom_break.title = tb;
        let dom_break_label = this._create_dom_label("Camera Config.", dom_break, tb)
        dom_break_label.classList.add('fp-stats-option-content-subtitle');
        this.#stats_options_element.appendChild(dom_break_label);
        this.#stats_options_element.appendChild(dom_break);

        let camera = NeuronOptions.get_camera();
        const t11 = "Camera preset values for calculations based off of typical drone survey cameras";
        const camera_names = NeuronOptions.camera_presets.map(x => x.name);
        this.#dom_option_camera_name = this._create_dom_input_select(camera_names, camera_names, this.#update_camera_from_dom.bind(this));
        this.#dom_option_camera_name.title = t11;
        this.#stats_options_element.appendChild(this._create_dom_label("Camera:", this.#dom_option_camera_name, t11));
        this.#stats_options_element.appendChild(this.#dom_option_camera_name);
        //Manually set the camera name based off of the currently loaded camera
        this.#set_camera_selector(camera);

        const t12 = "Camera focal length in millimeters";
        this.#dom_option_camera_focal_length = this._create_dom_input_number(camera.focal_length, this.#update_camera_focal_length_from_dom.bind(this), NeuronSettings._camera_focal_length_min);
        this.#dom_option_camera_focal_length.title = t12;
        this.#stats_options_element.appendChild(this._create_dom_label("F.Length:", this.#dom_option_camera_focal_length, t12));
        this.#stats_options_element.appendChild(this.#dom_option_camera_focal_length);

        const t13 = "Camera sensor width in millimeters";
        this.#dom_option_camera_sensor_width = this._create_dom_input_number(camera.sensor_width, this.#update_camera_sensor_width_from_dom.bind(this), NeuronSettings._camera_sensor_width_min);
        this.#dom_option_camera_sensor_width.title = t13;
        this.#stats_options_element.appendChild(this._create_dom_label("S.Width:", this.#dom_option_camera_sensor_width, t13));
        this.#stats_options_element.appendChild(this.#dom_option_camera_sensor_width);

        const t14 = "Camera sensor height in millimeters";
        this.#dom_option_camera_sensor_height = this._create_dom_input_number(camera.sensor_height, this.#update_camera_sensor_height_from_dom.bind(this), NeuronSettings._camera_sensor_height_min);
        this.#dom_option_camera_sensor_height.title = t14;
        this.#stats_options_element.appendChild(this._create_dom_label("S.Height:", this.#dom_option_camera_sensor_height, t14));
        this.#stats_options_element.appendChild(this.#dom_option_camera_sensor_height);

        const t15 = "Camera image width in pixels";
        this.#dom_option_camera_image_width = this._create_dom_input_number(camera.image_width, this.#update_camera_image_width_from_dom.bind(this), NeuronSettings._camera_image_width_min);
        this.#dom_option_camera_image_width.title = t15;
        this.#stats_options_element.appendChild(this._create_dom_label("I.Width:", this.#dom_option_camera_image_width, t15));
        this.#stats_options_element.appendChild(this.#dom_option_camera_image_width);

        const t16 = "Camera image height in pixels";
        this.#dom_option_camera_image_height = this._create_dom_input_number(camera.image_height, this.#update_camera_image_height_from_dom.bind(this), NeuronSettings._camera_image_height_min);
        this.#dom_option_camera_image_height.title = t16;
        this.#stats_options_element.appendChild(this._create_dom_label("I.Height:", this.#dom_option_camera_image_height, t16));
        this.#stats_options_element.appendChild(this.#dom_option_camera_image_height);
    }

    #set_camera_selector(camera:NeuronCameraSpecifications = NeuronOptions.camera_preset_custom) {
        if(this.#dom_option_camera_name) {
            let matched_camera:boolean = false;

            //Go through our list and find possible matches for our set camera
            const camera_matches = NeuronOptions.camera_presets.filter(x => x.name == camera.name);
            if(camera_matches.length) {
                const full_matches = camera_matches.filter(x => x.equals(camera));
                matched_camera = full_matches.length > 0;
            }

            //If there is a proper match, then use that name (details should be filled in by set_camera())
            //Otherwise it is a custom camera
            this.#dom_option_camera_name.value = matched_camera ? camera.name : NeuronOptions.camera_preset_custom.name;
        }
    }

    // set_camera(camera:NeuronCameraSpecifications) {
    //     this.#set_camera(camera);
    // };

    // #set_camera(camera:NeuronCameraSpecifications, update_calcs:boolean = true) {

    set_camera(camera:NeuronCameraSpecifications, update_settings:boolean = true) {
        if(update_settings)
            NeuronOptions.set_camera(camera, true, false);

        this.#set_camera_selector(camera);

        if(this.#dom_option_camera_focal_length)
            this.#dom_option_camera_focal_length.value = Math.max(NeuronSettings._camera_focal_length_min, camera.focal_length).toString();
        if(this.#dom_option_camera_sensor_width)
            this.#dom_option_camera_sensor_width.value = Math.max(NeuronSettings._camera_sensor_width_min, camera.sensor_width).toString();
        if(this.#dom_option_camera_sensor_height)
            this.#dom_option_camera_sensor_height.value = Math.max(NeuronSettings._camera_sensor_height_min, camera.sensor_height).toString();
        if(this.#dom_option_camera_image_width)
            this.#dom_option_camera_image_width.value = Math.max(NeuronSettings._camera_image_width_min, camera.image_width).toString();
        if(this.#dom_option_camera_image_height)
            this.#dom_option_camera_image_height.value = Math.max(NeuronSettings._camera_image_height_min, camera.image_height).toString();
    }

    #update_camera_from_dom() {
        const value = this.#dom_option_camera_name.value;

        const camera_names = NeuronOptions.camera_presets.map(x => x.name);
        let camera = NeuronOptions.camera_preset_custom.copy();

        if(camera_names.includes(value)) {
            const matches = NeuronOptions.camera_presets.filter(x => x.name == value);
            if(matches.length > 0) {
                camera = matches[0].copy();
            }
        }

        this.set_camera(camera);
        // this.#calculate_and_update_camera_variables();
    }

    #update_camera_focal_length_from_dom() {
        let camera = NeuronOptions.get_camera();
        camera.focal_length = this.#dom_option_camera_focal_length.valueAsNumber;
        this.set_camera(camera);
    }

    #update_camera_sensor_width_from_dom() {
        let camera = NeuronOptions.get_camera();
        camera.sensor_width = this.#dom_option_camera_sensor_width.valueAsNumber;
        this.set_camera(camera);
    }

    #update_camera_sensor_height_from_dom() {
        let camera = NeuronOptions.get_camera();
        camera.sensor_height = this.#dom_option_camera_sensor_height.valueAsNumber;
        this.set_camera(camera);
    }

    #update_camera_image_width_from_dom() {
        let camera = NeuronOptions.get_camera();
        camera.image_width = this.#dom_option_camera_image_width.valueAsNumber;
        this.set_camera(camera);
    }

    #update_camera_image_height_from_dom() {
        let camera = NeuronOptions.get_camera();
        camera.image_height = this.#dom_option_camera_image_height.valueAsNumber;
        this.set_camera(camera);
    }

    reset() {
        this.#gen_dom();
    }
}
