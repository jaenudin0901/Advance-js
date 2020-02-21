// Togged Templates
// const nama ='Jaenudin';
// const umur =33;

// function coba(strings, ...values){
// 	let result ='';
// 	strings.forEach((str, i)=>{
// 		result +=`${str}${values[i] || ''}`;
// 	});
// 	return result;
// }

// return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'')
// }

// const str = coba`Halo, Nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// Highlight
const nama ='Jaenudin';
const umur =33;
const email ='jaenudin090191@gmail.com'
function highlight(strings, ...values){
return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'');
}

const str = highlight `Halo, Nama saya ${nama}, saya ${umur} tahun, dan Email saya adalah : ${email}.`;

document.body.innerHTML= str;
