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

/*
//TODO: For KMZ download
// use a BlobWriter to store with a ZipWriter the zip into a Blob object
const blobWriter = new zip.BlobWriter("application/zip");
const writer = new zip.ZipWriter(blobWriter);

// use a TextReader to read the String to add
await writer.add("filename.txt", new zip.TextReader("test!"));

// close the ZipReader
await writer.close();

// get the zip file as a Blob
const blob = blobWriter.getData();
*/

export class KMLExporter  {
    xmlDocument: XMLDocument;

    constructor(coordinates:NeuronInterfacePoint[] = null, create_as_polygon=false) {
        if(coordinates) {
            if(create_as_polygon) {
                this.createPolygonAndDownloadKML(coordinates);
            } else {
                this.createAndDownloadKML(coordinates);
            }
        }
    }

    createAndDownloadKML(coordinates:NeuronInterfacePoint[]) {
        const textXML = this.createKMLFileFromCoordinates(coordinates);
        this.download(`neuron-planner${Date.now()}.kml`, textXML);
    }

    createPolygonAndDownloadKML(coordinates:NeuronInterfacePoint[]) {
        const textXML = this.createKMLFileFromPolygon(coordinates);
        this.download(`neuron-planner${Date.now()}.kml`, textXML);
    }

    download(filename:string, xmlDocument:string): void {
      var element = document.createElement('a');
      element.setAttribute('href', `data:${type_kml};charset=utf-8,` + encodeURIComponent(xmlDocument));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    createKMLFileFromCoordinates(coordinates:NeuronInterfacePoint[]): string {
      this.xmlDocument = document.implementation.createDocument("", "", null);
      const kmlNode = this.xmlDocument.createElement('kml');
      kmlNode.setAttribute('xmlns', 'http://www.opengis.net/kml/2.2');
      const documentNode = this.xmlDocument.createElement('Document');
      kmlNode.appendChild(documentNode);
      this.xmlDocument.appendChild(kmlNode);
      coordinates.forEach((coord, i) => {
        documentNode.appendChild(this.createPointNode(i.toString(), coord.latitude, coord.longitude));
      });
      return this.xmlDocumentToString(this.xmlDocument);
    }

    createKMLFileFromPolygon(coordinates:NeuronInterfacePoint[]): string {
      this.xmlDocument = document.implementation.createDocument("", "", null);
      const kmlNode = this.xmlDocument.createElement('kml');
      kmlNode.setAttribute('xmlns', 'http://www.opengis.net/kml/2.2');
      const documentNode = this.xmlDocument.createElement('Document');
      kmlNode.appendChild(documentNode);
      this.xmlDocument.appendChild(kmlNode);
      documentNode.appendChild(this.createPolygonNode("path", coordinates));
      return this.xmlDocumentToString(this.xmlDocument);
    }

    xmlDocumentToString(xmlDocument: XMLDocument): string {
      let textXML = new XMLSerializer().serializeToString(xmlDocument);
      textXML = '<?xml version="1.0" encoding="UTF-8"?>' + textXML;
      return textXML;
    }

    createPointNode(name:string, lat:number, lng:number): HTMLElement {
      const placemarkNode = this.xmlDocument.createElement('Placemark');
      const nameNode = this.xmlDocument.createElement('name');
      nameNode.innerHTML = name;
      const descriptionNode = this.xmlDocument.createElement('description');
      const pointNode = this.xmlDocument.createElement('Point');
      const coordinatesNode = this.xmlDocument.createElement('coordinates');
      coordinatesNode.innerHTML = `${lng},${lat}`;
      placemarkNode.appendChild(nameNode);
      placemarkNode.appendChild(descriptionNode);
      placemarkNode.appendChild(pointNode);
      pointNode.appendChild(coordinatesNode);
      return placemarkNode;
    }

    createPolygonNode(name:string, coordinates:NeuronInterfacePoint[]): HTMLElement {
      const placemarkNode = this.xmlDocument.createElement('Placemark');
      const nameNode = this.xmlDocument.createElement('name');
      nameNode.innerHTML = name;
      const descriptionNode = this.xmlDocument.createElement('description');
      const polygonNode = this.xmlDocument.createElement('Polygon');
      const boundaryNode = this.xmlDocument.createElement('outerBoundaryIs');
      const ringNode = this.xmlDocument.createElement('LinearRing');
      const coordinatesNode = this.xmlDocument.createElement('coordinates');
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
  }
