// Destructuring Variable / Assigment

// Destructuring
// const perkenalan =['Halo','nama', 'saya', 'Jaenudin'];

// const [salam, satu, dua, nama ] = perkenalan;

// skipping items
// const [salam, , , nama ] = perkenalan;
// console.log(nama);


// swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b]=[b,a];
// console.log(a);
// console.log(b);


// return value pada function

// function coba(){
// 	return[1,2];
// }

// const [a,b]= coba();
// console.log(b);


// Rest parameter
// const[a, ...values]=[1,2,3,4,5];
// console.log(a);
// console.log(values);


// Destruction Object
// const mhs = {
// 	nama:'Jaenudin',
// 	umur: 29
// }

// const{nama, umur}= mhs;
// console.log(nama);


// Assigment tanpa deklarasi object
// ({nama, umur}= { nama:'Jaenudin', umur: 29 });
// console.log(nama);


// Aaigment ke variabel baru
// const mhs = {
// 	nama:'Jaenudin',
// 	umur: 29
// }

// const{nama: n, umur: u }= mhs;
// console.log(u);



// Memberikan Default Value
// const mhs = {
// 	nama:'Jaenudin',
// 	umur: 29,
// 	email:'jaenudin0901@bsi.ac.id'
// }

// const{nama, umur, email ='jaenudin090191@gmail.com'}= mhs;
// console.log(email);


// Memberikan nilai default + assign ke variabel baru
// const mhs = {
// 	nama:'Jaenudin',
// 	umur: 29,
// 	email:'jaenudin0901@bsi.ac.id'
// }

// const{nama:n, umur:u, email:e ='jaenudin090191@gmail.com'}= mhs;
// console.log(u);


// Rest Parameter
// const mhs = {
// 	nama:'Jaenudin',
// 	umur: 29,
// 	email:'jaenudin0901@bsi.ac.id'
// }

// const{nama, ...value}= mhs;
// console.log(value);



// Mengambil Fiels pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
	id:123,
	nama:'jaenudin',
	umur:29,
	email:'jaenudin090191@gmail.com'
}

function getIdMhs({id}){
	return id;
}

console.log(getIdMhs(mhs));