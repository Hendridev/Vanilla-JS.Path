// const kegiatan = function(nama, tanggal) {
//     this.namaKegiatan = nama;
//     this.hariKegiatan = tanggal;
//     this.tampilKegiatan = function() {
//             console.log(`${this.namaKegiatan} akan dimulai pada hari ${this.hariKegiatan}`);
//         }
//         // tidak bisa pakai this
//         // return function() {
//         //     console.log(this.namaKegiatan);
//         // }

//     // pakai this
//     // return () => {
//     //     console.log(this.namaKegiatan);
//     // }

// }

// const kg = new kegiatan('produktif', 'rabu');

const box = document.querySelector('.box');

box.addEventListener('click', function() {
    this.classList.toggle('flow');
    setTimeout(() => {
        setInterval(() => {
            this.classList.toggle('star');
        }, 1000);
    }, 500);
});