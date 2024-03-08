'use strict';

//function declaration example
function calAge(birthYear){
    console.log(birthYear);
    const age = `Dahesh age is ${2022 - birthYear}`;
    return age;
}
const myAge = calAge(1991);
console.log(myAge);

//function expression example
const calAge1 = function(birthYear){
    console.log(birthYear);
    const age = `Dahesh age is ${2022 - birthYear}`;
    return age;
}
const myAge1 = calAge1(1992);
console.log(myAge1);