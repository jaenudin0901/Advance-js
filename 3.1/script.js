// const tampilNama = (nama) => { return `Hallo, ${nama}`;}

// console.log('Jaenudin');

// const tampilNama = (nama, waktu) => {
// 	return `selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('jaenudin', 'siang'));

// const tampilNama = nama => `Hallo, ${nama}`;

// console.log('Jaenudin');


// const tampilNama = () => `Hello Jaenudin`;
// console.log(tampilNama());

let mahasiswa =['Jaenudin','safa myesa qurratuaini', 'dwi nuryati'];
// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama =>({ nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);