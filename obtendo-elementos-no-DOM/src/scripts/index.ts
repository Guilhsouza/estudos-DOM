const show = () => {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)
}

const listElements = document.getElementsByTagName('li')
console.log(listElements)

const listClass = document.getElementsByClassName('contact-input')
console.log(listClass)

const getElementsByName = document.getElementsByName('contact2')
console.log(getElementsByName)

const contacts = document.querySelectorAll('#contact-list')
console.log(contacts)

const firstContact = document.querySelector('#contact-list > li > label')
console.log(firstContact)