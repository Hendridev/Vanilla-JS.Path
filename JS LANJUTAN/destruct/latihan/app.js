// function hitunglah(a,b){
//     return [a+b,a-b,a*b,a/b];
// };

// let [tambah,kurang,kali,bagi] = hitunglah(3,3);
// console.log(kali);

function hitung(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b,
        modulus: a % b,
        tampil: {
            nilai1: a,
            nilai2: b
        }
    }
};

let { tambah, kali, kurang, bagi, modulus, tampil: { nilai1, nilai2 } } = hitung(12, 3);
console.log(`hasil operasi dari ${nilai1} dan ${nilai2} adalah :`);
console.log('tambah : ' + tambah);
console.log('bagi : ' + bagi);
console.log('kali : ' + kali);
console.log('kurang : ' + kurang);
console.log('modulus : ' + modulus);

let array = [
    { nama: "hen", value: 0, status: false, ext: { ns: 010101, mp: 021020 } },
    { nama: "bin", value: 12, status: false },
    { nama: "dir", value: 35, status: false },
    { nama: "pwd", value: 2, status: false },
    { nama: "cd", value: 21, status: false },
    { nama: "mv", value: 35, status: false }
];

let [{ ext: { ns, mp } }, ...arr2] = array;
console.log(ns);
console.log(arr2);

let [{ nama }] = arr2;
console.log(nama);