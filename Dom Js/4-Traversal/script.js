const removebutton = document.querySelectorAll('.remove-profile');
const purple = document.querySelectorAll('.box');
// for (let i = 0; i < removebutton.length; i++) {
//     removebutton[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = "none";
//     });
// }

removebutton.forEach(function(el) {
    el.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });
});
// traversal = parentElement;
// parentNode,nextSibling,nextElementSibling,preiousSibling,previousElementSibling;
purple.forEach(function(ths) {
    console.log(ths);
    ths.addEventListener('click', function(ch) {
        console.log(ch);
        ch.target.style.backgroundColor = "purple";
    });
});
// penggunaan parameter dalam foreach melambangkan element itu sendiri
// menggunakan parameter ch pada eventlistener membutuhkan imbuhan target