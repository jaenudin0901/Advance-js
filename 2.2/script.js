// function init() {
// 	let nama ='Jaenudin';
// 	// let umur = '28';
// 	function tampilNama() {
// 		console.log(nama);
// 		// console.log(umur);
// 	}

// 	console.dir(tampilNama);
// }
// init();




// function ucapkanSalam(waktu){
// 	return function (nama){
// 		console.log(`Halo ${nama}, Selamat ${waktu}, semoga hari menyenangkan!`);
// 	}
// }


// let SelamatPagi = ucapkanSalam('pagi');
// let SelamatSore = ucapkanSalam('Sore');
// let SelamatMalam = ucapkanSalam('Malam');


// SelamatPagi('Jaenudin');
// SelamatMalan('safa');

// console.dir(SelamatMalam('Jaenudin'));


// contoh clasik



let add = (function() {

let counter = 0;

	return function(){

return ++counter;
	} 
})();



counter =10;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
