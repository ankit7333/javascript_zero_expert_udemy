
//If else statement
const age = 15;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log(`Rabindra can start driving license`);
}else{
    const yearsLeft = 18 - age;
    console.log(`Rabindra is too young. Wait another ${yearsLeft} years`);
}

//Example 2
let century;
const birthYear = 1991;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);
