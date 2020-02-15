// 1. HTML Fragments
 // const mhs = {
 // 	nama: 'Jaenudin',
 // 	umur: '29',
 // 	nim : '11170952',
 // 	email: 'jaenudin090191@gmail'
 // };

 // const el = `<div class='mhs'>
 // 	<h2>${mhs.nama}</h2>
 // 	<span class='nim'> ${mhs.nim}</span>
 // </div>`;

// 2. Looping
// const mhs = [
// 	{
// 		nama: 'Jaenudin',
// 		umur: '29'
// 	},
// 	{
// 		nama: 'Hendra Setiawan',
// 		umur: '32'
// 	},

// 	{
// 		nama: 'Wahyu Ridwan',
// 		umur: '28'
// 	}
// ];

// const el =`<div class="mhs">
// ${mhs.map (m => `<ul>
// 	<li>${m.nama}</li>
// 	<li>${m.umur}</li>
// 	</ul>`).join('')}
// 	</div>`;


// 3. Conditionals
// ternary
// const lagu = {
// 	judul: 'tetap dalam jiwa',
// 	penyanyi: 'Isyana Saraswati',
// 	feat:'Ray Putra'
// }

// const el =`<div class="lagu">
// <ul>
// 	<li>${lagu.penyanyi}</li>
// 	<li>${lagu.judul} (feat. ${lagu.feat}) </li>
// </ul>
// 	</div>`;


// 4. Nested 
// HTML Fragments Bersarang

const mhs = {
	nama :'jaenudin',
	semster: 5,
	mataKuliah: [
	'E-commerce',
	'Jaringan Komputer',
	'Kewarganegaran',
	'Perancangan web'
	]
};

function cetakMataKuliah(mataKuliah){
	return `
	<ol>
	${mataKuliah.map(mk => `<li>${mk}</li>`). join('')}
	</ol>
	`;
}

const el = `<div class="mhs">
	<h1>${mhs.nama}</h2>
	<span class="semster">Semster ${mhs.semster}</span>
	<h4>Mata Kuliah :</h4>
	${cetakMataKuliah(mhs.mataKuliah)}
	</div>`;






 document.body.innerHTML= el;
