"use strict";
const register = (element) => {
    const name = element.children.namedItem('name').value;
    const password = element.children.namedItem('password').value;
    const confirmPassword = element.children.namedItem('confirmPassword').value;
    console.log([name, password, confirmPassword]);
};
