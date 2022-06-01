import { NeuronInterfacePoint } from "./neuron_interfaces";
import { download_file, get_filename } from "./neuron_tools_files"
import * as zip from "@zip.js/zip.js";

const type_kml = "application/vnd.google-earth.kml+xml";
const type_kmz = "application/vnd.google-earth.kmz";

export function get_supported_kmx_types() {
    return [type_kml, type_kmz];
}

export interface NeuronKMLData {
    markers:NeuronInterfacePoint[];
    paths:NeuronInterfacePoint[][];
    polygons:NeuronInterfacePoint[][];
}

export async function kmx_load_file(file:Blob, cb_file_loaded:CallableFunction) {
    let result = null;
    console.log(`Loaded file identified as "${file.type}" type`);
    switch(file.type) {
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
    }

    // console.log(result);
    cb_file_loaded(result);
}

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
            for (const marker of kml_markers) {
                let point = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                let p = point_from_coord(point.split(","));
                p.tag = placeMarkName;
                markers.push(p);
            }

            /** PATH PARSE **/
            for (const path of kml_paths) {
                let coords = path.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                let kml_points = coords.split(" ");

                let points:NeuronInterfacePoint[] = [];
                for (const point of kml_points) {
                    points.push(point_from_coord(point.split(",")));
                }

                paths.push(points);
            }

            /** POLYGONS PARSE **/
            for (const polygon of kml_polygons) {
                let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                let kml_points = coords.split(" ");

                let points:NeuronInterfacePoint[] = [];
                for (const point of kml_points) {
                    points.push(point_from_coord(point.split(",")));
                }

                polygons.push(points);
            }
        }

        ret = { markers: markers, paths: paths, polygons: polygons };
    } else {
        console.error("Error while parsing KML string");
    }

    return ret;
}

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

export async function kml_download_from_neuron_data(markers:NeuronInterfacePoint[], waypoints:NeuronInterfacePoint[], polygons:NeuronInterfacePoint[][]) {
    const textXML = await kml_data_from_neuron_data(markers, waypoints, polygons);
    const file = new Blob(
        [textXML],
        {
            type: type_kml
        }
    );
    download_file(get_filename('kml'), file);
}

export async function kmz_download_from_neuron_data(markers:NeuronInterfacePoint[], waypoints:NeuronInterfacePoint[], polygons:NeuronInterfacePoint[][]) {
    const textXML = await kml_data_from_neuron_data(markers, waypoints, polygons);
    const kmz = await get_kmz_from_kml_data(textXML);
    download_file(get_filename('kmz'), kmz);
}

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

export async function kml_data_from_neuron_data(markers:NeuronInterfacePoint[], waypoints:NeuronInterfacePoint[], polygons:NeuronInterfacePoint[][]) {
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
    documentNode.appendChild(kml_create_path_node(xmlDocument, "flight-path", waypoints));

    //Polygons
    for(let i=0; i<polygons.length; i++) {
        documentNode.appendChild(kml_create_polygon_node(xmlDocument, `polygon-${i+1}`, polygons[i]));
    }

    return kml_document_to_string(xmlDocument);
}

export function kml_document_to_string(xmlDocument: XMLDocument) {
    let textXML = new XMLSerializer().serializeToString(xmlDocument);
    return '<?xml version="1.0" encoding="UTF-8"?>' + textXML;
}

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
