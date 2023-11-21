
// cara menghitung jumlah array di mulai dari nol
var warna = ['merah','hijau','kuning'];
console.log(warna);

//array length berfungsi untuk mengetahui jumlah array

var hewan = ['kelinci','ayam','bebek','kucing','singa','kelinci','ayam','bebek','kucing','singa','kelinci','ayam','bebek','kucing','singa','kelinci','ayam','bebek','kucing','singa','kelinci','ayam','bebek','kucing','singa','kelinci','ayam','bebek','kucing','singa'];
console.log(hewan.length); //cara

// method push berfungsi untuk menambah index pada array di akhir

//ctr+d untuk duplikat
var warna = ['merah','kuning','biru'];
warna.push('jingga','putih','hitam');
console.log(warna);

//method pop berfungsi untuk menghapus index terakhir

var jurusan = [
    'teknik informatika',
    'manajemen',
    'hukum'
];
jurusan.pop()
console.log(jurusan);

// method unshift berfungsi untuk menambah index array di awal

var club_indo = [
    'persija',
    'persib',
];
club_indo.unshift ('persikasi')
var club_luar = "barcelona"
club_indo.unshift(club_luar); //menjadikan index di awal
console.log(club_indo);

// method shift berfungsi menghapus index array di awal

var alamat = [
    'bekasi',
    'jakarta',
    'depok'
];
alamat.shift()
console.log(alamat);

// Method sort berfungsi mengurutkan abjad dari A-Z

var merek_laptop = ['thosiba','hp','asus','macbook','acer',];
merek_laptop.sort();
console.log(merek_laptop);

// method slice berfungsi untuk mengambil sebagian dari array

var merek_mobil = ['sigra','honda','jezz','agya','ayla','bmw','fortuner'];
var mobil = merek_mobil.slice(1); //index pertama di mulai nol,
console.log(mobil); // index ke dua di ambil sebelum akhir index yg di pake


// method splice berfungsi untuk menghapus dan menambakan data di tengah-tengah array 

// contoh struktur splice
// array.splice(index mulai,jumlah data dihapus,data1,data2 dan seterus nya)

var negara = ['indonesia','malaysia','singapura','thailand','myanmar','brunei','kamboja'];
negara.splice( 2 , 4 ,"timor lester","papua");
console.log(negara);


// method join berfungsi untuk menggabungkan data(berada di tengah) pada array sehingga membentuk sebuah string
// membuat variable baru sehingga value asli nya tidak berubah

var biodata = ['winda','widodo'];
var nama = biodata.join(" ")
console.log(nama);