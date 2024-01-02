export default function createLabel(text: string, htmlFor: string) {
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor

    return label
}