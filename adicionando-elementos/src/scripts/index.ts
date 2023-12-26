const addInput = () => {
    const ul = document.getElementById('inputs')

    const li = document.createElement('li')

    li.className = 'products-list'
    li.innerText = `produtos: `

    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'input'

    li.appendChild(input)
    ul?.appendChild(li)
}