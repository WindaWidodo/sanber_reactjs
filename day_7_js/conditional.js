// // if kondisi

var x = 10;
if (x < 5) {
  // akan berjalan jika kondisi benar
  console.log("mendapatkan nilai A");
} else {
  // jika tidak  di jalankan else
  console.log("tidak dapat nilai");
}
console.log("program selesai ");


// // kondisi else if

var x = 30 ;
if ( x == 10 ){ // x sama dengan 10 = false lanjut ke bawah
    console.log('masuk ke dalam if');
}else if ( x < 15){ // x kurang dari 15 = false lajut ke bawah
    console.log('masuk ke dalam else if');
}else{ // kondisi default , jadi keluar sebagai out put
    console.log('masuk ke dalam else');
}

console.log('program selesai');


//  switch case

var hewan = "ikan";

switch (hewan) {
    case 'ajing':
        console.log('hewan itu anjing');
        break;
    case 'ayam ':
        console.log('hewan itu kucing');
        break;
    case 'sapi':
        console.log('hewan itu sapi');
        break;
    default:
        console.log('tidak tau hewan itu apa');
        break;
}


// ternary operator


var angka = 15
// === harus memiliki nilai yang sama   // if  //:(atau)    //sebgai else
var bilangan = angka % 2 === 1 ? 'bilangan genap' : 'bilangan ganjil';
console.log(bilangan);

