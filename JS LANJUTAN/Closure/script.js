function app(day) {
    return function(name) {
        console.log(`selamat ${day} ${name}`);
    }
}

let exe = app(`siang`);
exe(`hendri`);

let clc = (function clicks() {
    let clicks = 0;
    return function() {
        return clicks += 1;
    }
})();
console.log(clc());
console.log(clc());
console.log(clc());