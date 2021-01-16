// memecah iterals menjadi single element
const arr = ['hendri', 'agus', 'tono'];
// mengambil string pertama
const gabung = [...arr[0]];
console.log(...gabung);

// membuat string pertama menjadi array baru
const string1 = [...arr[0]];
console.log(string1);

// menggabungkan string di arr
console.log(...arr);

// menggabungkan dua array dengan metode spread
var arr2 = ["hendri", "dev"];
const orang = [...arr, 12, 10, ...arr2];
console.log(orang);

// menggabungkan dua array dengan metode concat
console.log(arr.concat(arr2));

// mengcopy array
const copy = [...arr];
copy[0] = 'hehe';
console.log(copy);





//  mengambil data dari html
const data = document.querySelectorAll('li');
var ambildata = [];
// looping dengan for
for (let i = 0; i < data.length; i++) {
    ambildata.push(data[i].textContent);
}

console.log(ambildata);


// looping dengan map

const databaru = [...data].map((h) => {
    return h.textContent;
});

console.log(databaru);



//  style ambil huruf di js

const hen = document.querySelector('#hen');
const abjad = [...hen.textContent].map((h) => {
    return `<span>${h}</span>`;
}).join('');
console.log(abjad);
hen.innerHTML = abjad;