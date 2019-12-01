// 2.1 EXECUTION CONTEXT, HOISING & SCOPE

// console.log(nama);
// var nama ="Jaenudin";


// creation phase pada global Context
// nama var = undefined
// nama function = fn()
// hosting
// window = global object
// this = window



// execution phase

// var nama = 'Jaenudin';
// var umur ='28';

// console.log(sayHello());

// function sayHello() {
// 	return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// wiindow
// arguments
// hoisting


// var nama = 'Jaenudin';
// var username = '@jaenudin0901';

// function cetakURL(username) {
// 	var instagramURL = 'http://instagram.com/';
// 	return instagramURL + username;
// }

// console.log(cetakURL(username));



// function a(){
// 	console.log('ini a');

// 	function b(){
// 		console.log('ini b');

// 		function c(){
// 			console.log('ini c');
// 		}

// 		c();
	
// 	}

// 	b();

// }

// a();


function satu() {
	var nama = 'Jaenudin';
	console.log(nama);
}

function dua() {
	console.log(nama);
}

console.log(nama);
var nama ='Dwi';
satu();
dua('Safa');
console.log(nama)