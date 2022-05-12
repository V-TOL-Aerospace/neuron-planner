import { NeuronInterfacePoint, NeuronUUID } from "./neuron_interfaces";
import * as zip from "@zip.js/zip.js";

const type_kml = "application/vnd.google-earth.kml+xml";
const type_kmz = "application/vnd.google-earth.kmz";

export interface NeuronKMLData {
    markers:NeuronInterfacePoint[];
    polygons:NeuronInterfacePoint[][];
}

export async function kml_load_file(file:Blob, cb_file_loaded:CallableFunction) {
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
            let polygons:NeuronInterfacePoint[][] = [];

            for(const e of entries) {
                const text:string = await e.getData(new zip.TextWriter());
                const r = await kml_extract_features(text);

                if(r.markers.length || r.polygons.length) {
                    got_data = true;
                    markers.push(...r.markers);
                    polygons.push(...r.polygons);
                }
            }

            if(got_data) {
                result = {
                    polygons: polygons,
                    markers: markers,
                }
            }

            break;
        }
    }

    console.log(result);
    cb_file_loaded(result);
}

export async function kml_extract_features(kml_plain_text:string) {
    //XXX: Only supports google marks/placemarks and polygons
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(kml_plain_text, "text/xml");
    let ret:NeuronKMLData = null;

    if (xmlDoc.documentElement.nodeName == "kml") {
        let polygons:NeuronInterfacePoint[][] = [];
        let markers:NeuronInterfacePoint[] = [];

        for (const item of xmlDoc.getElementsByTagName('Placemark') as any) {
            let placeMarkName = item.getElementsByTagName('name')[0].childNodes[0].nodeValue.trim();
            let kml_polygons = item.getElementsByTagName('Polygon');
            let kml_markers = item.getElementsByTagName('Point');

            /** POLYGONS PARSE **/
            for (const polygon of kml_polygons) {
                let coords = polygon.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                let kml_points = coords.split(" ");

                let points:NeuronInterfacePoint[] = [];
                for (const point of kml_points) {
                    let coord = point.split(",");
                    points.push(new NeuronInterfacePoint(
                        Number.parseFloat(coord[1]),
                        Number.parseFloat(coord[0])
                    ));
                }

                polygons.push(points);
            }

            /** MARKER PARSE **/
            for (const marker of kml_markers) {
                var coords = marker.getElementsByTagName('coordinates')[0].childNodes[0].nodeValue.trim();
                let coord = coords.split(",");
                markers.push(new NeuronInterfacePoint(
                    Number.parseFloat(coord[1]),
                    Number.parseFloat(coord[0])
                ));
            }
        }

        ret = { markers: markers, polygons: polygons };
    } else {
        console.error("Error while parsing KML string");
    }

    return ret;
}

function get_filename(ext:string) {
    return `neuron-planner${Date.now()}.${ext}`;
}

export async function kml_download_from_points(coordinates:NeuronInterfacePoint[]) {
    const textXML = await kml_data_from_coordinates(coordinates);
    const file = new Blob(
        [textXML],
        {
            type: type_kml
        }
    );
    // `data:${data_type}${is_text ? ';charset=utf-8' : ''},` + encodeURIComponent(data)
    download_file(get_filename('kml'), file);
}

export async function kml_download_from_polygon(coordinates:NeuronInterfacePoint[]) {
    const textXML = await kml_data_from_polygon(coordinates);
    const file = new Blob(
        [textXML],
        {
            type: type_kml
        }
    );
    download_file(get_filename('kml'), file);
}

export async function kmz_download_from_points(coordinates:NeuronInterfacePoint[]) {
    const textXML = await kml_data_from_coordinates(coordinates);
    const kmz = await get_kmz_from_kml_data(textXML);
    download_file(get_filename('kmz'), kmz);
}

export async function kmz_download_from_polygon(coordinates:NeuronInterfacePoint[]) {
    const textXML = await kml_data_from_polygon(coordinates);
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

async function download_file(filename:string, data:Blob) {
    var element = document.createElement('a');
    const burl = URL.createObjectURL(data);
    element.setAttribute('href', burl);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export async function kml_data_from_coordinates(coordinates:NeuronInterfacePoint[]) {
    let xmlDocument = document.implementation.createDocument("", "", null);
    const kmlNode = xmlDocument.createElement('kml');
    kmlNode.setAttribute('xmlns', 'http://www.opengis.net/kml/2.2');
    const  documentNode = xmlDocument.createElement('Document');
    kmlNode.appendChild(documentNode);
    xmlDocument.appendChild(kmlNode);
    for(let i=0; i<coordinates.length; i++) {
        documentNode.appendChild(
            kml_create_point_node(xmlDocument, i.toString(), coordinates[i].latitude, coordinates[i].longitude)
        );
    }

    return kml_document_to_string(xmlDocument);
}

export async function kml_data_from_polygon(coordinates:NeuronInterfacePoint[]) {
    let xmlDocument = document.implementation.createDocument("", "", null);
    const kmlNode = xmlDocument.createElement('kml');
    kmlNode.setAttribute('xmlns', 'http://www.opengis.net/kml/2.2');
    const documentNode = xmlDocument.createElement('Document');
    kmlNode.appendChild(documentNode);
    xmlDocument.appendChild(kmlNode);
    documentNode.appendChild(kml_create_polygon_node(xmlDocument, "path", coordinates));
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
