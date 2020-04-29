

// 	mhs.push(liMhs[i]. textContent);
// console.log(...mhs[0]);
// console.log(mhs);
// console.log(mhs);
// console.log(mhs);
// console.log(orang);
// const dosen = ['ade','hendra', 'wanda'];
// const liMhs = document.querySelectorAll('li');
// const mhs = ['Jaenudin', 'Safa','Nuryati'];
// const mhs = ['Jaenudin', 'Safa','Nuryati'];
// const mhs = ['Jaenudin', 'Safa','Nuryati'];
// const mhs = liMhs.map(m => m.textContent);
// const mhs =[];
// const mhs1 =[...mhs];
// const mhsl = mhs;
// const orang =[...mhs, 'aji',...dosen];
// for (let 1 =0; i < liMhs.length; i++) {
// Memecah iterables menjadi single element
// meng-copy array
// menggabungkan 2 array
// mhs1[0]='fajar';
// mhs[0] ='fajar';
// Spread Operator
// }

const nama = document.getElementsByClassName('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;