
//Type Conversion
//1. Strings to Numbers
const inputYear = '1991';
const strToNumber = Number(inputYear);
console.log(strToNumber , inputYear); // here original variable inputYear is still string only
console.log(typeof(strToNumber));
console.log(`${strToNumber + 18}`);
const strToNumberAdd = `${strToNumber + 18}`;
document.querySelector('.stringtonumber').insertAdjacentHTML('beforeend', strToNumberAdd);

//2. Number to String
const a = 1;
console.log(String(a), a);
const numToString = String(a);
console.log(numToString);
document.querySelector('.numbertostring').insertAdjacentHTML('beforeend', numToString);

//Type Coercion
console.log('I am ' + 23 + 'year old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

//Type Coercion game
let n = '1' + 1;
n = n - 1;
console.log(n);

