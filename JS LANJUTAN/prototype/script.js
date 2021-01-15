// 1.object literal
// let player = {
//     name: 'hendridev',
//     mana: 20,
//     hp: 1000,
//     onHit: function(hit) {
//         return this.hp = this.hp - hit;
//     },
//     itemList: ['sword', 'shield', 'armor', 'spear'],
//     using: '',
//     onUse: function(item) {
//         for (let i = 0; i < this.itemList.length; i++) {
//             if (item == this.itemList[i]) {
//                 this.using = item;
//             };
//         }
//     }
// };
// kelemahan : tidak bisa memiliki nama object yang sama
// input object akan tidak efektif





// 2.function declaration

// function player(nama, mana, hp) {
//     let player = {};
//     player.name = nama;
//     player.mana = mana;
//     player.hp = hp;
//     player.using = '';
//     player.itemList = ['sword', 'shield', 'armor', 'spear'];

//     player.onHit = function(hit) {
//         this.hp -= hit;
//         return console.log(`player was hit on ${hit} damage`);
//     }
//     player.onUse = function(item) {
//         for (let i = 0; i < this.itemList.length; i++) {
//             if (item == this.itemList[i]) {
//                 this.using = item;
//                 console.log(`player is equip ${item}`);
//             }
//         }
//     }
//     player.hasPut = function(item) {
//         this.itemList.push(item);
//         console.log(`${item} was added to player inventory`);
//     }
//     return player;
// };

// const hendri = player('hendridev', 200, 1000);
// const asphyxia = player('asphyxia', 500, 10000);

// kelemahan harus buat object dan mereturn object trsbt
// object yang dibuat tetap tereksekusi tergantung jumlah inputan





// 3. constructor function

// function player(nama, mana, hp) {
//     this.name = nama;
//     this.mana = mana;
//     this.hp = hp;
//     this.using = '';
//     this.itemList = ['sword', 'shield', 'armor', 'spear'];

//     this.onHit = function(hit) {
//         this.hp -= hit;
//         return console.log(`player was hit on ${hit} damage`);
//     }
//     this.onUse = function(item) {
//         for (let i = 0; i < this.itemList.length; i++) {
//             if (item == this.itemList[i]) {
//                 this.using = item;
//                 console.log(`player is equip ${item}`);
//             }
//         }
//     }
//     this.hasPut = function(item) {
//         this.itemList.push(item);
//         console.log(`${item} was added to player inventory`);
//     }
// };

// const hendri = new player('hendridev', 100, 1000);
// const asphyxia = new player('asphyxia', 1320, 3000);

// object yang dibuat tetap tereksekusi tergantung jumlah inputan





// 4. object.create()

// const playerEngine = {
//     onHit: function(hit) {
//         this.hp -= hit;
//         return console.log(`player was hit on ${hit} damage`);
//     },
//     onUse: function(item) {
//         for (let i = 0; i < this.itemList.length; i++) {
//             if (item == this.itemList[i]) {
//                 this.using = item;
//                 console.log(`player is equip ${item}`);
//             }
//         }
//     },
//     hasPut: function(item) {
//         this.itemList.push(item);
//         console.log(`${item} was added to player inventory`);
//     }
// };


// function player(nama, mana, hp) {
//     let player = Object.create(playerEngine);
//     player.names = nama;
//     player.mana = mana;
//     player.hp = hp;
//     player.using = '';
//     player.itemList = ['sword', 'shield', 'armor', 'spear'];

//     return player;
// };

// const hendri = new player('hendridev', 100, 1000);
// const asphyxia = new player('asphyxia', 1320, 3000);

// harus membuat 2 object dan dihubungkan

// prototype

// function player(nama, mana, hp) {
//     this.name = nama;
//     this.mana = mana;
//     this.hp = hp;
//     this.using = '';
//     this.inventory = ['sword', 'shield', 'spear', 'armor'];
// }

// player.prototype.onHit = function(hit) {
//     this.hp -= hit;
//     console.log(`player hp now is ${this.hp} hitted by ${hit}`);
// }

// player.prototype.onUse = function(item) {
//     for (let i = 0; i < this.inventory.length; i++) {
//         if (item == this.inventory[i]) {
//             this.using = item;
//             console.log(`${this.name} equipped ${item}`);
//         }
//     }
// }

// player.prototype.onPut = function(item) {
//     this.inventory.push(item);
//     console.log(`${item} was added to ${this.name} inventory`);
//     console.log(this.inventory);
// }

// let hendri = new player('hendridev', 900, 10000);







// class
class player {
    constructor(nama, mana, hp) {
        this.nama = nama;
        this.mana = mana;
        this.hp = hp;
        this.using = '';
        this.inventory = ['sword', 'shield', 'spear', 'armor'];
    }

    onHit(hit) {
        this.hp -= hit;
        console.log(hit);
    }

    onUse(item) {
        for (let i = 0; i < this.inventory.length; i++) {
            if (item == this.inventory[i]) {
                this.using = item;
                console.log(item);
            }
        }
    }

    onPut(item) {
        this.inventory.push(item);
        console.log(item);
    }
};

let hendri = new player('hendridev', 200, 300);