// Array.map() berfungsi melakukan looping pada array serta melakukan return menjadi array baru
// parameter .map () akan menerima parameter sebuah function

let nilai = [10,12,11,14];
let nilaiMap = nilai.map ((item) => {
    return item;
});
console.log(nilaiMap);


let biodata = [
    {
        nama : 'winda',
        alamat : 'jakarta',
        nilai : 90
    },
    {
        nama : 'widodo',
        alamat : 'jakarta',
        nilai : 80
    },
    {
        nama : 'win',
        alamat : 'jakarta',
        nilai : 70
    },
];
let biodataMap = biodata.map((item) =>{
    return item.nama; //cara untuk mencari index satuan
});
console.log(biodataMap);



//array.forEach() memiliki kegunaan yang sama dg for of loop 

let arr = [10,20,30,25,15];
let total = 0;
arr.forEach(jumlah =>{
    total = total + jumlah;
});
console.log(total);