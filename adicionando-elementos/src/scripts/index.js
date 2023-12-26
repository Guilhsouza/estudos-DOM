var addInput = function () {
    var ul = document.getElementById('inputs');
    var li = document.createElement('li');
    li.className = 'products-list';
    li.innerText = "produtos: ";
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'input';
    li.appendChild(input);
    ul === null || ul === void 0 ? void 0 : ul.appendChild(li);
};
