import createLabel from "./createLabel";
import createInput from "./createInput";
const developers = [];
let inputRows = 0;
const devInfo = document.getElementById('devInfos');
const button = document.getElementById('addTools');
button === null || button === void 0 ? void 0 : button.addEventListener('click', (ev) => {
    ev.preventDefault();
    const stacks = document.getElementById('stacks');
    const newRow = document.createElement('li');
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = `inputRow-${rowIndex}`;
    newRow.className = 'inputRow';
    const techNameLabel = createLabel('Nome da tecnologia: ', `techName-${rowIndex}`);
    const techNameInput = createInput(`techName-${rowIndex}`, 'techName', '', 'text', 'Insira o nome da tecnologia...');
    newRow.append(techNameLabel, techNameInput);
    stacks === null || stacks === void 0 ? void 0 : stacks.appendChild(newRow);
});
