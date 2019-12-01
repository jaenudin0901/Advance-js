// Cara untuk membuat Object pada javascript
// 1. Object Literal
// Problem tidak efektif denga objec yang banyak
// let mahasiswa1 = {
// 	nama:'Jaenudin',
// 	energy:10,
// 	makan: function(porsi){
// 		this.energy = this.energy + porsi;
// 		console.log(`Hallo  ${this.nama}, Selamat makan!`);
// 	}
// }

// let mahasiswa2 = {
// 	nama:'Dwi nuryati',
// 	energy:10,
// 	makan: function(porsi){
// 		this.energy = this.energy + porsi;
// 		console.log(`Hallo  ${this.nama}, Selamat makan!`);
// 	}
// }

// 2. Function Declaration

// function Mahasiswa(nama, energy){
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energy = energy;

// 	mahasiswa.makan = function (porsi){
// 		this.energy += porsi;
// 		console.log(`Hallo ${this.nama}, Selamat makan!`);
// 	}

// 	mahasiswa.main = function(jam) {
// 		this.energy -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	}

// 	return mahasiswa;
// }

// let jaenudin = Mahasiswa('Jaenudin', 10);
// let dwinuryati = Mahasiswa('Dwinuryati', 20);

// Constructor Function

// function Mahasiswa(nama, energy){
	
// 	this.nama = nama;
// 	this.energy = energy;

// 	this.makan = function (porsi){
// 		this.energy += porsi;
// 		console.log(`Hallo ${this.nama}, Selamat makan!`);
// 	}

// 	this.main = function(jam) {
// 		this.energy -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	}
// }

// let jaenudin = new Mahasiswa('Jaenudin',10);

const methodMahasiswa = {
	makan: function (porsi){
		this.energy += porsi;
		console.log(`Hallo ${this.nama}, Selamat makan!`);
	},

	main: function (jam) {
		this.energy -= jam;
		console.log(`Halo ${this.nama}, selamat bermain!`);
	},

	tidur: function (jam) {
		this.energy += jam *2;
		console.log (`Hallo ${this.nama}, Selamat Tidur!`);
	}

}

function Mahasiswa(nama, energy){
	let mahasiswa = Object.create(methodMahasiswa);
	mahasiswa.nama = nama;
	mahasiswa.energy = energy;
	// mahasiswa.makan = methodMahasiswa.makan;
	// mahasiswa.main = methodMahasiswa.main;
	// mahasiswa.tidur = methodMahasiswa.tidur;

	return mahasiswa;
}

let jaenudin = Mahasiswa('Jaenudin', 10);
let dwinuryati = Mahasiswa('Dwinuryati', 20);


