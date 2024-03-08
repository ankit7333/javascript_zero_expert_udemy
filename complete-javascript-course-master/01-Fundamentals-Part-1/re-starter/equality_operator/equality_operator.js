// === and ==
const age = 18;
if(age === 18) console.log('You just become an adult (strict)');
if(age == 18) console.log('You just become an adult (loose)'); 

const favNumber = prompt(`What's your favourite number`);
console.log(favNumber);
console.log(typeof favNumber);

// Loose equality operator
if(favNumber == 8){ //'8' == 8
    console.log(`Cool! 8 is an amazing number!`);
}

//Strict equality operator
if(Number(favNumber) === 9){ //9 === 9
    console.log(`Cool! 9 is an amazing number!`);
}

