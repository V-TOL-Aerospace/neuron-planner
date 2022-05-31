
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'

import { icon, dom, library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowLeft, faArrowRight, faArrowUp, faBars, faClose, faDrawPolygon, faEye, faEyeSlash, faFile, faFileExport, faFileImport, faFolderOpen, faLocationCrosshairs, faLocationDot, faMinimize, faMinus, faPlus, faQuestionCircle, faSave, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'

// const faPlusIcon = icon(faFolderOpen)

// // Get the first element out of the HTMLCollection
// document.appendChild(faPlusIcon.node[0])

export enum NeuronIcons {
    LOAD_PLAN,
    SAVE_PLAN,
    CLEAR_PLAN,
    UPLOAD_PLAN,
    CREATE_BRIEF,
    PLAN_LIST,
    HELP,
    MINIMIZE,
    EXPAND,
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
    DELETE,
    IDENTIFY,
    REVEAL,
    HIDE,
    FIT_ZOOM,
    POINT,
    POLYGON,
    IMPORT_FILE,
    EXPORT_FILE,
}

function _neuron_get_icon_fa(neuron_icon:NeuronIcons) {
    let i = null;

    switch(neuron_icon) {
        case NeuronIcons.LOAD_PLAN: {
            i = faFolderOpen;
            break
        }
        case NeuronIcons.SAVE_PLAN: {
            i = faSave;
            break;
        }
        case NeuronIcons.CLEAR_PLAN: {
            i = faTrash;
            break;
        }
        case NeuronIcons.UPLOAD_PLAN: {
            i = faUpload;
            break;
        }
        case NeuronIcons.CREATE_BRIEF: {
            i = faFile;
            break;
        }
        case NeuronIcons.PLAN_LIST: {
            i = faBars;
            break;
        }
        case NeuronIcons.HELP: {
            i = faQuestionCircle;
            break;
        }
        case NeuronIcons.ARROW_UP: {
            i = faArrowUp;
            break;
        }
        case NeuronIcons.ARROW_DOWN: {
            i = faArrowDown;
            break;
        }
        case NeuronIcons.ARROW_LEFT: {
            i = faArrowLeft;
            break;
        }
        case NeuronIcons.ARROW_RIGHT: {
            i = faArrowRight;
            break;
        }
        case NeuronIcons.DELETE: {
            i = faClose;
            break;
        }
        case NeuronIcons.IDENTIFY: {
            i = faLocationCrosshairs;
            break;
        }
        case NeuronIcons.REVEAL: {
            i = faEye;
            break;
        }
        case NeuronIcons.HIDE: {
            i = faEyeSlash;
            break;
        }
        case NeuronIcons.MINIMIZE: {
            i = faMinus;
            break;
        }
        case NeuronIcons.EXPAND: {
            i = faPlus;
            break;
        }
        case NeuronIcons.FIT_ZOOM: {
            i = faMinimize;
            break;
        }
        case NeuronIcons.POINT: {
            i = faLocationDot;
            break;
        }
        case NeuronIcons.POLYGON: {
            i = faDrawPolygon;
            break;
        }
        case NeuronIcons.IMPORT_FILE: {
            i = faFileImport;
            break;
        }
        case NeuronIcons.EXPORT_FILE: {
            i = faFileExport;
            break;
        }
        default: {
            break;
        }
    }

    return i;
}

export function neuron_load_dom_icons() {
    //Handle the DOM conversions for hard-coded icons
    for(const icon_name in NeuronIcons) {
        const icon_id = Number(icon_name);
        if (!isNaN(icon_id)) {
            //XXX: Slight abuse of the enum, but it gets results!
            const i = _neuron_get_icon_fa(icon_id);
            if(i)
                library.add(i);
        }
    }

    dom.i2svg();
}

export function neuron_get_icon(neuron_icon:NeuronIcons, is_small:boolean = false) {
    let i = _neuron_get_icon_fa(neuron_icon);
    let opts = {
        transform: {
          size: is_small ? 10 : 16,     // small is fa-2xs
        }
    }
    return i ? icon(i, opts).node : new HTMLCollection();
}
