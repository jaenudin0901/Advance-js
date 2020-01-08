// konsep this pada Arrow Function

// Constructor Function

// const Mahasiswa = function() {
// 	this.nama ='Jaenudin';
// 	this.umur = '29';
//  	this.sayHello = function() {
//  	console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//  }
// }

// const jaenudin = new Mahasiswa();


// Arrow Function

// const Mahasiswa = function() {
// 	this.nama ='Jaenudin';
// 	this.umur = '29';
//  	this.sayHello = () => {
//  	console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//  }
// }

// const jaenudin = new Mahasiswa();


// Object Literal
// const mhs1 = {
// 	nama:'Jaenudin',
// 	umur :29,
// 	sayHello: ()=>{
		// console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);

// 	console.log(this);
// 	}
// }




// const Mahasiswa = function() {
// 	this.nama ='Jaenudin';
// 	this.umur = 29;
// 	this.sayHello = function() {
// 		console.log(`Hello, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 			}


// 	setInterval(() => {
// 		console.log(this.umur++);

// 	} ,500);

// }

// 	const jaenudin = new Mahasiswa();	







const box = document.querySelector('.box');
box.addEventListener('click', function(){
// console.log(this);	

let satu ='size';
let dua ='caption';

if(this.classList.contains(satu)) {
	[satu, dua] = [dua,satu];
}

this.classList.toggle(satu);

setTimeout(()=>{
	this.classList.toggle(dua);
}, 600);

});