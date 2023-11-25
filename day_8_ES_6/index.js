//variable  ES 6 mempunyai dua variable
//- variable const berfungsi secara global
//- variable let hanya bisa di akses pada blok kode tertentu

//contoh variable var

// var x = 5;
// if ( x === 5){
//     var x = 3;
// }
// console.log(x);

// variable let
//hanya bisa digunakan pada blok kode tertentu
// let win = 5;
// if (win === 5) {
//     let win = 2;
//     console.log(win);
// }
// console.log(win);

//variable const adalah variable yang sudah dideklarasi tidak bisa diganti

const person = {name: 'winda widodo'}; //deklarasi yang atas dan bawah nilai nya harus sama
person.age = 30; // person.age sebagi properti dan 30 sebagai Nilai
person.alamat = {kota :'cibitung'};
person.universitas = {jurusan:'teknik informatika'};
console.log(person);


//string literal adalah suatu cara untuk menuliskan variable dalam suatu string
// penulisan string literal menggunakan tanda ``

let nilai = 10;
console.log(`Nilai kamu adalah ${nilai} anda lulus`);




// looping pada ES 6

let x = ['kucing','anjing','ayam','sapi'];
for (hewan of x ) {
    console.log(hewan);
} 


//Destructure adalah proses mengekstrak suatu value dari sebuah object atau array kepada sebuah variable

let merek_mobil = ['honda','suzuki','toyota'];
let [pertama,kedua,ketiga] = merek_mobil;
console.log(pertama,ketiga);


//Spread Operator berfungsi menggabungkan sebuah object dengan object lain nya

const obj1 = {
    nama: 'winda',
    umur: 20
};
const obj2 = {
    alamat: 'bekasi',
    tanggal_lahir: '16-01-2012',
};
const object ={ ... obj1, ...obj2};
console.log(object);