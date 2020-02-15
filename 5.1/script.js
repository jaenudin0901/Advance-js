// Template Literals /Template String

// const nama ='Jaenudin';
// const umur = 33;

// console.log(`Hallo, nama saya ${nama}, dan saya ${umur} tahun.`);

// console.log('Halo, nama saya ' + nama +' , dan saya ' + umur + ' tahun .');


// Embedded Expressions
// console.log(`${1+1}`);
// console.log(`${alert('halo!')}`);

// const x =11;
// console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragments

 const mhs = {
 	nama: 'Jaenudin',
 	umur: '29',
 	nim : '111709',
 	email: 'jaenudin090191@gmail'
 };

 const el = `<div class='mhs'>
 	<h2>${mhs.nama}</h2>
 	<span class='nim'> ${mhs.nim}</span>
 </div>`;


 console.log(el);