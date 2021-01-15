const arr = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// filter
// const arrbaru = [];
// angka >= 3
// for (let i = 0; i < arr.length; i++) {
//     arr[i] >= 3 ? arrbaru.push(arr[i]) : '';
// }
// console.log(arrbaru);

// const newarr = arr.filter((a) => {
//     return a >= 3;
// })

// or

// const newarr = arr.filter(a =>
//     a >= 0
// )
// console.log(newarr);


// // map
// const newarr = arr.map(
//     (a) => a * 2
// )
// console.log(newarr);
// or
// const newarr = arr.map(
//     (a) => {
//         return a > 0 ? a * 2 : a;
//     }
// )

// console.log(newarr);


// reduce

// const newarr = arr.reduce(
//     (accumulator, currentValue) => {
//         return accumulator + currentValue;
//     }, 100 <== nilai awal
// )
// console.log(newarr);

// reduce right (mulai dari kanan)

// const newarr = arr.reduce(
//     (cur, val) => {
//         return cur - val;
//     }
// )
// console.log(newarr);



// reverse
// const newarr = arr.reverse();
// console.log(newarr);
// or
// const newarr = arr.filter(
//     a => a >= 0
// ).reverse();
// console.log(newarr);

// sort
// const newarr = arr.filter(
//     a => a >= 0
// ).sort();
// console.log(newarr);

// method chaining
const hasil = arr.filter(a => a > 5).map(a => a * 3).reduce((acc, cur) => acc + cur);
console.log(hasil);