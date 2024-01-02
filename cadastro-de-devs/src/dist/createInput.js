export default function createInput(id, name, value, type = 'text', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.name = name;
    input.value = value;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}
