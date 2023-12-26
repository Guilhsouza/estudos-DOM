var show = function () {
    var contactList = document.getElementById('contact-list');
    console.log(contactList);
};
var listElements = document.getElementsByTagName('li');
console.log(listElements);
var listClass = document.getElementsByClassName('contact-input');
console.log(listClass);
var getElementsByName = document.getElementsByName('contact2');
console.log(getElementsByName);
var contacts = document.querySelectorAll('#contact-list');
console.log(contacts);
var firstContact = document.querySelector('#contact-list > li > label');
console.log(firstContact);
