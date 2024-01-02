export default function createLabel(text, htmlFor) {
    const label = document.createElement('label');
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label;
}
