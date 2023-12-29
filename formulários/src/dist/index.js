"use strict";
const form = document.getElementById('orderForm');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (ev) => {
    var _a;
    ev.preventDefault();
    const name = (_a = document.querySelector('input[name="name"]')) === null || _a === void 0 ? void 0 : _a.value;
    const address = document.querySelector('input[name="address"]').value;
    const breadType = document.querySelector('select[name="breadType"]').value;
    const main = document.querySelector('input[name="main"]:checked').value;
    const observations = document.querySelector('textarea[name="observations"]').value;
    const salad = [];
    const saladsInSnack = (document.querySelectorAll('input[name="salad"]:checked')).forEach((item) => {
        salad.push(item.value);
    });
    console.log({
        name,
        address,
        breadType,
        main,
        observations,
        salad
    });
});
