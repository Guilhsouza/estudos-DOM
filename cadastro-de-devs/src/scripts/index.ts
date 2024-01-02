import createLabel from "./createLabel"
import createInput from "./createInput"
import radioOfTimeExp from "./radioOfTimeExp"

const developers: string[] = []
let inputRows: number = 0

const devInfo = document.getElementById('devInfos')
const button = document.getElementById('addTools')

button?.addEventListener('click', (ev: Event) => {
    ev.preventDefault()

    const stacks = document.getElementById('stacks')

    const newRow = document.createElement('li')

    const rowIndex = inputRows
    inputRows++
    newRow.id = `inputRow-${rowIndex}`
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome da tecnologia: ', `techName-${rowIndex}`)
    const techNameInput = createInput(`techName-${rowIndex}`, 'techName', '', 'text', 'Insira o nome da tecnologia...')

    newRow.append(techNameLabel, techNameInput)
    stacks?.appendChild(newRow)
})