"use strict";
const register = (ev) => {
    const sectionElement = ev.currentTarget.parentNode;
    const username = (sectionElement === null || sectionElement === void 0 ? void 0 : sectionElement.children.namedItem('username')).value;
    const password = (sectionElement === null || sectionElement === void 0 ? void 0 : sectionElement.children.namedItem('password')).value;
    const confirmPassword = (sectionElement === null || sectionElement === void 0 ? void 0 : sectionElement.children.namedItem('confirmPassword')).value;
    if (password !== confirmPassword) {
        return alert('As senhas não conferem!');
    }
    alert('Usuário cadastrado com sucesso!');
};
const button = document.getElementById('register-button');
button === null || button === void 0 ? void 0 : button.addEventListener('click', register);
const removeEvent = () => {
    button === null || button === void 0 ? void 0 : button.removeEventListener('click', register);
    alert('event removed');
};
