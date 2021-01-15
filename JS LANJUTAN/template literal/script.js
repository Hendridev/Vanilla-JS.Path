const con = document.querySelector('.container');
const allplayer = [{
    nama: 'firsttime',
    username: 'stfu',
    hp: 200
}];
class player {
    constructor(nama, username, hp) {
        let players = {};
        players.nama = nama;
        players.username = username;
        players.hp = hp;
        allplayer.push(players);
        return players;
    }
}

new player('hendri', 'hendev', 301);
new player('hendridev', 'hedfn', 20);
new player('hendrizf', 'henfs', 310);

con.innerHTML = `${allplayer.map(
    play => `<ul class="ply">
        <li class="nama"> nama = ${play.nama}</li>
        <li class="nama">username = ${play.username}</li>
        <li class="nama">hp = ${play.hp}</li>
    </ul>`
).join('')}`