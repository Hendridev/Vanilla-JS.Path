const ul = document.getElementsByTagName('li');
const jmlhVid = document.querySelector('.jumlah-video');
const totalDurasi = document.querySelector('.total-durasi');
const all = [];
for (let i = 0; i < ul.length; i++) {
    all.push(ul[i]);
}
const vid = all.filter(
    a => {
        return a.innerText.includes('JAVASCRIPT');
    }
)
console.log(vid);
jmlhVid.innerHTML = vid.length;
let dur = vid.map(
    a => a.dataset.duration
).map(
    a => {
        const spli = a.split(':').map(
            a => Number(a)
        );
        return Number(spli[0] * 60 + spli[1])
    }
).reduce(
    (awal, akhir) => {
        return awal + akhir;
    }
)
console.log(dur);
const hour = Math.floor(dur / 3600);
dur = dur - hour * 3600;
const min = Math.floor(dur / 60);
const sec = Math.floor(dur - min * 60);

totalDurasi.innerHTML = `${hour} Jam:${min} Menit:${sec} Detik`;