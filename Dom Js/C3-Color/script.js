const docu = document.querySelector('body');
const btn = document.querySelector('.button');

btn.addEventListener('click', function() {
    docu.style.backgroundColor = "white";
    displayRgb.value = "Rgb(255,255,255)";
    displayHex.value = "#FFFFFF";
});

const newbtn = document.createElement('button');
newbtn.textContent = "random color"
btn.after(newbtn);

newbtn.addEventListener('click', function() {
    var r = Math.round(Math.random() * 255 + 1);
    var g = Math.round(Math.random() * 255 + 1);
    var b = Math.round(Math.random() * 255 + 1);
    docu.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    displayRgb.value = "Rgb(" + r + "," + g + "," + b + ");";
    displayHex.value = "#" + Number(r).toString(16).toUpperCase() + Number(g).toString(16).toUpperCase() + Number(b).toString(16).toUpperCase();
});

// ***************************
const displayRgb = document.getElementById('dec_warna');
const displayHex = document.getElementById('hex_warna');
const rgbMerah = document.querySelector('input[name=red]');
const rgbHijau = document.querySelector('input[name=green]');
const rgbBiru = document.querySelector('input[name=blue]');
rgbMerah.addEventListener('input', function() {
    var rgbM = rgbMerah.value;
    var rgbH = rgbHijau.value;
    var rgbB = rgbBiru.value;
    docu.style.backgroundColor = "rgb(" + rgbM + "," + rgbH + "," + rgbB + ")";
    displayRgb.value = "Rgb(" + rgbM + "," + rgbH + "," + rgbB + ");";
    displayHex.value = "#" + Number(rgbM).toString(16).toUpperCase() + Number(rgbH).toString(16).toUpperCase() + Number(rgbB).toString(16).toUpperCase();
});
rgbHijau.addEventListener('input', function() {
    var rgbM = rgbMerah.value;
    var rgbH = rgbHijau.value;
    var rgbB = rgbBiru.value;
    docu.style.backgroundColor = "rgb(" + rgbM + "," + rgbH + "," + rgbB + ")";
    displayRgb.value = "Rgb(" + rgbM + "," + rgbH + "," + rgbB + ");";
    displayHex.value = "#" + Number(rgbM).toString(16).toUpperCase() + Number(rgbH).toString(16).toUpperCase() + Number(rgbB).toString(16).toUpperCase();
});
rgbBiru.addEventListener('input', function() {
    var rgbM = rgbMerah.value;
    var rgbH = rgbHijau.value;
    var rgbB = rgbBiru.value;
    docu.style.backgroundColor = "rgb(" + rgbM + "," + rgbH + "," + rgbB + ")";
    displayRgb.value = "Rgb(" + rgbM + "," + rgbH + "," + rgbB + ");";
    displayHex.value = "#" + Number(rgbM).toString(16).toUpperCase() + Number(rgbH).toString(16).toUpperCase() + Number(rgbB).toString(16).toUpperCase();
});

// docu.addEventListener('mouseover', function() {
//     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
//     const yPos = Math.round((event.clientY / window.innerWidth) * 255);
//     docu.style.backgroundColor = "rgb(" + xPos + "," + yPos + "," + 100 + ")";
// });