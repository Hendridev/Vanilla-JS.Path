// DOM SELECTION
// getElementById
// seleect satu id
const judul = document.getElementById('judul');
judul.style.color = "red";
judul.style.border = "1px solid red";
judul.innerHTML = "Hendridev";

// getElementByTagName() - > html collection
// mengselect semua tag name input dalam bentuk array/obj
const tag_name = document.getElementsByTagName('p');
for (i = 0; i < tag_name.length; i++) {
    tag_name[i].style.color = "salmon";
};
// getElementByClassName() -> html collection
// mengselect semua kelas kemudian memilih kelas atau mau looping
var tag_name_one = document.getElementsByClassName('p1')[0];
tag_name_one.style.color = "gold";
tag_name_one.innerHTML = "Ini get by class";
tag_name_one.style.backgroundColor = "brown";

function onmouse(a, clr) {
    a.style.transform = "Scale(2,2)";
    a.style.transition = "2s";
    a.style.color = clr;
    a.innerHTML = "ini menggunakan function onmouse";
};

function outmouse(a, clr) {
    a.style.transform = "Scale(1,1)";
    a.style.transition = "2s";
    a.style.color = clr;
    a.innerHTML = "Ehhhee";
};

tag_name_one.onmouseover = () => onmouse(tag_name_one, "white") ;
tag_name_one.onmouseout = () => outmouse(tag_name_one, "gold");

// document.querySelector()
// spesifikasikan 1 element tapi lewat id atau class.
// optimal dibanding by id
const p2 = document.querySelector('#a .p3');
p2.style.backgroundColor = "whitesmoke";
p2.onmouseover = () =>onmouse(p2, "lightblue");
p2.onmouseout = () => outmouse(p2, "salmon") ;

// document.querySelectorAll()
// mengselect semua node yang ada di dalam nya, perlu looping
const lithium = document.querySelectorAll('li');
console.log(lithium);
for(let i = 0; i < lithium.length ;i++){
    lithium[i].style.backgroundColor = "salmon";
}
// spesifik
const upper = document.querySelector('ul');
const li2 = upper.querySelectorAll('li')[1];
li2.style.color = "white";