// variable object kumpulan data berupa key dan value

//object di bungkus menggunakan {}

var biodata = {
   //key   //value
    nama : 'winda',
    addres : 'bekasi',
    umur : 21,
    jurusan : 'Teknik informatika',
    //cara menggunakan pake tanda petik dua("")
    "tanggal-lahir" : "11/11/2011"
};

console.log(biodata.jurusan);

//cara pake "" menggunakan tanda[]
console.log(biodata["tanggal-lahir"]);



// cara mengubah dan menambah data pada object
var merek_mobil = {
    honda  : 'jazz',
    toyota : 'alphard',
    suzuki : 'karimun'
};

merek_mobil.honda = 'beat';
merek_mobil.mobil_toyota ='agya';
console.log(merek_mobil);




//array of object
var arr_obj = [
    {
        nama  : 'winda',
        nilai : 90 ,
        status : 'lulus',
    },
    {
        nama  : 'widodo',
        nilai : 70 ,
        status : 'cukup',
    },
    {
        nama  : 'adi',
        nilai : 30 ,
        status : 'tidak lulus',
    },
];

console.log(arr_obj[2].nama);






//looping mencari nilai melalui index
for(var i = 0 ; i < arr_obj.length; i++)
{
    console.log(arr_obj[i].nilai);
}