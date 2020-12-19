const input = document.getElementById('inp');
const input2 = document.getElementById('inp2');
const button = document.getElementById('button');
const output = document.getElementById('out');
const disp = document.getElementById('disp');
const operator = document.getElementsByClassName('operator');
const mult = operator[0];
const dec = operator[1];
const plus = operator[2];
const min = operator[3];
var action = 0;
plus.onclick = function() {
    disp.innerHTML = '+';
    action = "plus";
};
min.onclick = function() {
    disp.innerHTML = '-';
    action = "min";
};
mult.onclick = function() {
    disp.innerHTML = 'x';
    action = "mult";
};
dec.onclick = function() {
    disp.innerHTML = '/';
    action = "dec";
};

button.onclick = function() {
    var inp = Number(input.value);
    var inp2 = Number(input2.value);
    sum = 0;
    switch (action) {
        case "plus":
            sum += inp + inp2;
            break;
        case "min":
            sum += inp - inp2;
            break;
        case "mult":
            sum += inp * inp2;
            break;
        case "dec":
            sum += inp / inp2;
            break;

    }
    output.value = sum;
    if (sum == 69) {
        alert('wow');
    }
};