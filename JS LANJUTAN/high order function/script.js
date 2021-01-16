let container = document.querySelector('.container');
let value = prompt('value');
let txt = prompt('text');

let pap = (value, txt) => {
    let temp = document.createElement(value);
    let text = document.createTextNode(txt);
    temp.append(text);
    container.appendChild(temp);
    temp.classList.add('box');
    console.log(txt);
};

container.addEventListener('click', function() {
    pap(value, txt);
})