/** Generates a generic file name based on the current time and date
 * @param  {string} ext file extension to give the file
 */
export function get_filename(ext:string) {
    return `neuron-planner${Date.now()}.${ext}`;
}

/** Initiates a file download for a given data blob
 * @param  {string} filename Filename preset of the downloaded file
 * @param  {Blob} data File data to be downloaded
 */
export async function download_file(filename:string, data:Blob) {
    var element = document.createElement('a');
    const burl = URL.createObjectURL(data);
    element.setAttribute('href', burl);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}