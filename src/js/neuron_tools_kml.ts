import { NeuronInterfacePoint } from "./neuron_interfaces";
import { download_file, get_filename } from "./neuron_tools_files"
import * as zip from "@zip.js/zip.js";

//TODO: Document
const type_kml = "application/vnd.google-earth.kml+xml";
const type_kmz = "application/vnd.google-earth.kmz";

//TODO: Document
export function get_supported_kmx_types() {
    return [type_kml, type_kmz];
}

//TODO: Document
export interface NeuronKMLData {
    markers:NeuronInterfacePoint[];
    paths:NeuronInterfacePoint[][];
    polygons:NeuronInterfacePoint[][];
}

//TODO: Document
export function get_file_type(file:Blob|File) {
    if(file.type) {
        return file.type;
    }

    if(file instanceof File) {
        const parts = file.name.split('.');
        const t = parts[parts.length-1];

        switch(t) {
            case "kml": return type_kml;
            case "kmz": return type_kmz;
        }
    }
    return "";
}

//TODO: Document
export async function kmx_load_file(file:Blob|File, cb_file_loaded:(result:NeuronKMLData)=>void) {
    let result = null;
    let f_type = get_file_type(file);
    console.log(`Loaded file identified as "${f_type}" type`);
    switch(f_type) {
        case type_kml: {
            const text = await file.text();
            result = await kml_extract_features(text);
            break;
        }
        case type_kmz: {
            const reader = new zip.ZipReader(new zip.BlobReader(file));
            const entries = await reader.getEntries();
            let got_data = false;
            let markers:NeuronInterfacePoint[] = [];
            let paths:NeuronInterfacePoint[][] = [];
            let polygons:NeuronInterfacePoint[][] = [];

            for(const e of entries) {
                const text:string = await e.getData(new zip.TextWriter());
                const r = await kml_extract_features(text);

                if(r.markers.length || r.paths.length || r.polygons.length) {
                    got_data = true;
                    markers.push(...r.markers);
                    paths.push(...r.paths);
                    polygons.push(...r.polygons);
                }
            }

            if(got_data) {
                result = {
                    markers: markers,
                    paths: paths,
                    polygons: polygons,
                }
            }

            break;
        }

        default: {
            console.warn(`File not supported: ${file}`);
        }
    }

    // console.log(result);
    cb_file_loaded(result);
}

//TODO: Document
export async function kml_extract_features(kml_plain_text:string) {
    //XXX: Only supports google marks/placemarks and polygons
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(kml_plain_text, "text/xml");
    let ret:NeuronKMLData = null;

    if (xmlDoc.documentElement.nodeName == "kml") {
        let markers:NeuronInterfacePoint[] = [];
        let paths:NeuronInterfacePoint[][] = [];
        let polygons:NeuronInterfacePoint[][] = [];

        for (const item of xmlDoc.getElementsByTagName('Placemark')) {
            let placeMarkName = "Unknown";
            try{
                placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim();
            }
            catch {}
            let kml_polygons = Array.from(item.getElementsByTagName('Polygon'));
            let kml_markers = Array.from(item.getElementsByTagName('Point'));
            let kml_paths = Array.from(item.getElementsByTagName('LineString'));

            for(const multi of item.getElementsByTagName('MultiGeometry')) {
                kml_polygons = kml_polygons.concat(Array.from(multi.getElementsByTagName('Polygon')));
                kml_markers = kml_markers.concat(Array.from(multi.getElementsByTagName('Point')));
                kml_paths = kml_paths.concat(Array.from(multi.getElementsByTagName('LineString')));
            }

            /** MARKER PARSE **/
            for (const [ind, marker] of kml_markers.entries()) {
                let point = "";
                try {
                    point = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                } catch(e) {
                    console.warn("Unable to extract marker #" + (ind + 1).toString());
                    if (e instanceof TypeError) {
                        //Do nothing?
                    } else {
                        console.warn(e);
                    }
                }

                if (point.length) {
                    let p = point_from_coord(point.split(","));
                    p.tag = placeMarkName;
                    markers.push(p);
                }
            }

            /** PATH PARSE **/
            for (const [ind, path] of kml_paths.entries()) {
                let coords = "";

                try {
                    coords = path.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                } catch(e) {
                    console.warn("Unable to extract path #" + (ind + 1).toString());
                    if (e instanceof TypeError) {
                        //Do nothing?
                    } else {
                        console.warn(e);
                    }
                }

                if(coords.length) {
                    let kml_points = coords.split(" ");

                    let points:NeuronInterfacePoint[] = [];
                    for (const point of kml_points) {
                        points.push(point_from_coord(point.split(",")));
                    }

                    paths.push(points);
                }
            }

            /** POLYGONS PARSE **/
            for (const [ind, polygon] of kml_polygons.entries()) {
                let coords = "";

                try {
                    coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                } catch(e) {
                    console.warn("Unable to extract polygon #" + (ind + 1).toString());
                    if (e instanceof TypeError) {
                        //Do nothing?
                    } else {
                        console.warn(e);
                    }
                }

                if(coords.length) {

                    let kml_points = coords.split(" ");

                    let points:NeuronInterfacePoint[] = [];
                    for (const point of kml_points) {
                        points.push(point_from_coord(point.split(",")));
                    }

                    polygons.push(points);
                }
            }
        }

        ret = { markers: markers, paths: paths, polygons: polygons };
    } else {
        console.error("Error while parsing KML string");
    }

    return ret;
}

//TODO: Document
function point_from_coord(coords:string[]) {

    let lat = coords.length >= 2 ? Number.parseFloat(coords[1]) : 0.0;
    let lon = coords.length >= 1 ? Number.parseFloat(coords[0]) : 0.0;
    let alt = coords.length >= 3 ? Number.parseFloat(coords[2]) : 0.0;

    return new NeuronInterfacePoint(
        Number.isNaN(lat) ? 0.0 : lat,
        Number.isNaN(lon) ? 0.0 : lon,
        Number.isNaN(alt) ? 0.0 : alt,
    );
}

//TODO: Document
export async function kml_download_from_neuron_data(markers:NeuronInterfacePoint[], waypoints:NeuronInterfacePoint[][], polygons:NeuronInterfacePoint[][]) {
    const textXML = await kml_data_from_neuron_data(markers, waypoints, polygons);
    const file = new Blob(
        [textXML],
        {
            type: type_kml
        }
    );
    download_file(get_filename('kml'), file);
}

//TODO: Document
export async function kmz_download_from_neuron_data(markers:NeuronInterfacePoint[], waypoints:NeuronInterfacePoint[][], polygons:NeuronInterfacePoint[][]) {
    const textXML = await kml_data_from_neuron_data(markers, waypoints, polygons);
    const kmz = await get_kmz_from_kml_data(textXML);
    download_file(get_filename('kmz'), kmz);
}

//TODO: Document
async function get_kmz_from_kml_data(data:string) {
    // use a BlobWriter to store with a ZipWriter the zip into a Blob object
    const blobWriter = new zip.BlobWriter(type_kmz);
    const writer = new zip.ZipWriter(blobWriter);

    // use a TextReader to read the String to add
    await writer.add("doc.kml", new zip.TextReader(data));

    // close the ZipReader
    await writer.close();

    // get the zip file as a Blob
    return blobWriter.getData();
}

//TODO: Document
export async function kml_data_from_neuron_data(markers:NeuronInterfacePoint[], paths:NeuronInterfacePoint[][], polygons:NeuronInterfacePoint[][]) {
    let xmlDocument = document.implementation.createDocument("", "", null);
    const kmlNode = xmlDocument.createElement('kml');
    kmlNode.setAttribute('xmlns', 'http://www.opengis.net/kml/2.2');
    const documentNode = xmlDocument.createElement('Document');
    kmlNode.appendChild(documentNode);
    xmlDocument.appendChild(kmlNode);

    //Markers
    for(let i=0; i<markers.length; i++) {
        documentNode.appendChild(
            kml_create_point_node(xmlDocument, markers[i].tag ? markers[i].tag : `Marker #${i+1}`, markers[i].latitude, markers[i].longitude)
        );
    }

    //Paths
    for(let i=0; i<paths.length; i++) {
        if(paths[i].length)
            documentNode.appendChild(kml_create_path_node(xmlDocument, (i == 0) ? "flight-path" : `paths-${i+1}`, paths[i]));
    }

    //Polygons
    for(let i=0; i<polygons.length; i++) {
        if(polygons[i].length)
            documentNode.appendChild(kml_create_polygon_node(xmlDocument, `polygon-${i+1}`, polygons[i]));
    }

    return kml_document_to_string(xmlDocument);
}

//TODO: Document
export function kml_document_to_string(xmlDocument: XMLDocument) {
    let textXML = new XMLSerializer().serializeToString(xmlDocument);
    return '<?xml version="1.0" encoding="UTF-8"?>' + textXML;
}

//TODO: Document
function kml_create_point_node(xmlDocument: XMLDocument, name:string, lat:number, lng:number) {
    const placemarkNode = xmlDocument.createElement('Placemark');
    const nameNode = xmlDocument.createElement('name');
    nameNode.innerHTML = name;
    const descriptionNode = xmlDocument.createElement('description');
    const pointNode = xmlDocument.createElement('Point');
    const coordinatesNode = xmlDocument.createElement('coordinates');
    coordinatesNode.innerHTML = `${lng},${lat}`;
    placemarkNode.appendChild(nameNode);
    placemarkNode.appendChild(descriptionNode);
    placemarkNode.appendChild(pointNode);
    pointNode.appendChild(coordinatesNode);
    return placemarkNode;
}

//TODO: Document
function kml_create_path_node(xmlDocument: XMLDocument, name:string, coordinates:NeuronInterfacePoint[]) {
    const placemarkNode = xmlDocument.createElement('Placemark');
    const nameNode = xmlDocument.createElement('name');
    nameNode.innerHTML = name;
    const descriptionNode = xmlDocument.createElement('description');
    const lineStringNode = xmlDocument.createElement('LineString');
    const coordinatesNode = xmlDocument.createElement('coordinates');
    const plist = coordinates.map(x => `${x.longitude},${x.latitude}`);
    coordinatesNode.innerHTML = plist.join(' ');
    placemarkNode.appendChild(nameNode);
    placemarkNode.appendChild(descriptionNode);
    placemarkNode.appendChild(lineStringNode);
    lineStringNode.appendChild(coordinatesNode);
    return placemarkNode;
}

//TODO: Document
function kml_create_polygon_node(xmlDocument: XMLDocument, name:string, coordinates:NeuronInterfacePoint[]) {
    const placemarkNode = xmlDocument.createElement('Placemark');
    const nameNode = xmlDocument.createElement('name');
    nameNode.innerHTML = name;
    const descriptionNode = xmlDocument.createElement('description');
    const polygonNode = xmlDocument.createElement('Polygon');
    const boundaryNode = xmlDocument.createElement('outerBoundaryIs');
    const ringNode = xmlDocument.createElement('LinearRing');
    const coordinatesNode = xmlDocument.createElement('coordinates');
    const plist = coordinates.map(x => `${x.longitude},${x.latitude}`);
    coordinatesNode.innerHTML = plist.join(' ');
    placemarkNode.appendChild(nameNode);
    placemarkNode.appendChild(descriptionNode);
    placemarkNode.appendChild(polygonNode);
    polygonNode.appendChild(boundaryNode);
    boundaryNode.appendChild(ringNode);
    ringNode.appendChild(coordinatesNode);
    return placemarkNode;
}
