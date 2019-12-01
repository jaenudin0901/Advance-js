
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


	return mahasiswa;
}

let jaenudin = Mahasiswa('Jaenudin', 10);
let dwinuryati = Mahasiswa('Dwinuryati', 20);


