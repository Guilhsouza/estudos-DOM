export default function createInput(id: string, name: string, value: string, type: string = 'text', placeholder: string = '') {
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder

    return input
}