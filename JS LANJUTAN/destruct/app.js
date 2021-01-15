let arr = [1,2,3,4,5,6,7,8,9,10];
let [a,,c,...sisa] = arr;
// console.log(b); not define
console.log(c);
console.log(sisa);


// tuker value
let ply = ['player','computer'];
let [as,bs] = ply;
[as,bs] = [bs,as];
console.log(bs);


const val = {
    name : "hend",
    power : 32
}
const {name,power} = val;
console.log(name);
console.log(power);


(
    {nada,note} = {
        nada : "do",
        note : 1
    }
);
console.log(nada);
console.log(note);


({negara:flg,penduduk:ppl} = {
    negara : "indonesia",
    penduduk : 4000000000
});
console.log(flg);
console.log(ppl);


// default variabel
({song,singer,feat = "none"} = {
    song : "See you again",
    singer : "Charlie puth"
});
console.log(feat);

// get obj in func
const frame = {
    framework : "React.js",
    bahasa : "Javascript"
};
function getdata({bahasa}){
    return bahasa;
}

console.log(getdata(frame));
