'use strict';

function logger(){
    console.log(`My Name is Dahesh`);
}
//calling / invoking/ running the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
const orangeJuice = fruitProcessor(0,2);
console.log(orangeJuice);