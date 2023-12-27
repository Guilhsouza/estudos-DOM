const addContact = () => {
    const contactList = document.getElementById('contact-list')

    const ul = document.createElement('ul')

    const nameList = document.createElement('li')
    nameList.innerText = 'name: '

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'nameOfContacts'

    ul.appendChild(nameList)
    nameList.appendChild(nameInput)

    const phoneList = document.createElement('li')
    phoneList.innerText = 'phone: '

    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phoneOfContacts'

    ul.appendChild(phoneList)
    phoneList.appendChild(phoneInput)

    contactList?.append(ul)
}

const removeContact = () => {
    const contactList = document.getElementById('contact-list')

    const contacts = document.getElementsByTagName('ul')

    contactList?.removeChild(contacts[contacts.length - 1])
}