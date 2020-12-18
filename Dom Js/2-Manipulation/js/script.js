const inner = document.getElementById('judul');
// .innerHTML
inner.innerHTML = "<h1>Hendridev</h1>";

const style = document.getElementsByClassName('p1')[0];
// .style.attr
style.style.backgroundColor = "salmon";

const attr = document.getElementById('li1');
attr.setAttribute('class', 'tog');

const idb = document.querySelector('#b');
var counter = 1;
idb.onclick = () => {
    idb.classList.add('tog');
    // add
    // remove
    // toggle
    // item
    // contain
    counter++;
    const textbaru = document.createElement('li');
    textbaru.textContent = `text baru no. ${counter}`;
    ul.append(textbaru);
}

// **********************************************************
// node manipulation
// insert node
const pBaru = document.createElement('li');
const teksPbaru = document.createTextNode('Hello World');
// simpan  teks ke element
pBaru.appendChild(teksPbaru);
// simpan node ke dalam ul;
const ul = document.getElementById('ul');
ul.appendChild(pBaru);
// didalam ul sebelum li1;
ul.insertBefore(pBaru, attr);
// 
// menghapus node
// namaparent.removeChild(namanode);
const seca = document.getElementById('a');
const p3 = document.querySelector('.p3');
seca.removeChild(p3);
// replace child
// namaparent.replaceChild(nodelama,nodebaru);

const textbaru = document.createElement('li');
textbaru.textContent = "text baru no. 1";
ul.append(textbaru);