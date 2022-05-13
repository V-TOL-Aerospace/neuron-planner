export function get_filename(ext:string) {
    return `neuron-planner${Date.now()}.${ext}`;
}

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