let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, , c, ...sisa] = arr;
// console.log(b); not define
console.log(c);
console.log(sisa);
// membuat variabel berupa array kemudian memasukan array lama


// tuker value
let ply = ['player', 'computer'];
let [as, bs] = ply;
[as, bs] = [bs, as];
console.log(bs);
// menukar value menggunakan variabel baru yang ditukar


const val = {
    name: "hend",
    power: 32
}
const { name, power } = val;
console.log(name);
console.log(power);

// memanggil obj dari variabel obj dengan membuat variabel obj baru


({ nada, note } = {
    nada: "do",
    note: 1
});
console.log(nada);
console.log(note);

// membuat obj tanpa variabel dan memanggil sesuai dengan nama obj


({ negara: flg, penduduk: ppl } = {
    negara: "indonesia",
    penduduk: 4000000000
});
console.log(flg);
console.log(ppl);

// memanggil obj dengan definisi nama lain

// default variabel
({ song, singer, feat = "none" } = {
    song: "See you again",
    singer: "Charlie puth"
});
console.log(feat);

// membuat defaut variabel, memanggil disaat tak di definisi

// get obj in func
const frame = {
    framework: "React.js",
    bahasa: "Javascript"
};

function getdata({ bahasa, framework }) {
    return bahasa + ' mempunyai framework frontend bernama : ' + framework;
}

console.log(getdata(frame));


// membuat function dengan parameter nama obj variabel
// yang dipanggil dengan menuliskan nama variabel

//