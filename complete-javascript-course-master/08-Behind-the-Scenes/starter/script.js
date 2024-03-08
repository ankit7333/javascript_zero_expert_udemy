'use strict';

// let and const are block scope
// var is function scope

//Scope Chain
const myName = 'Rabindra'; // global scope variable

function first(){
    const age = 35; // function scope variable
    if(age >= 35){
        const decade = 3;
        var millenial = true;
    }
    function second(){
        const job = 'HTML Developer'; // function scope variable
        console.log(`${myName} is a ${age} year old and he is a ${job}`);
    }
    second();
}
first();

//scope in practice
function calcAge(birthYear){
    const age = 2022 - birthYear;
    console.log(firstName);// firstName is a global variable then it can avalable here or console here.

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            //Creating NEW variable with same name as outer scope's variable
            const firstName = 'Steven';
            //reassign outer scope's variables
            output = 'New output';

            const str = `oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b){
                return a + b;
            }
        }
        //console.log(str); // ReferenceError: str is not defined, Bcz its outside the block scope
        console.log(millenial); // this can be access outside the block bcz it is a function scope varible and the if block is itself inside the function
        //add(2,3);// cannot access bcz function is define inside the block, so then it will access only in if block not outside the if block and also we have use 'use strict' mode on top of the script
        console.log(output);
    }
    printAge();
    return age;
}
const firstName = 'Jonas';
calcAge(1991);
//console.log(age); // cannot log/print variable outside the function scope, Bcz age variable is defined inside the function scope and it will give an ReferenceError age is not define.
//printAge(); // same for functions also.

//Hoisting with variables
// console.log(you);
// console.log(job);
// console.log(year);
var you = 'Rabindra';
let job = 'HTML Developer';
const year = 1991;

//Hoisting with functions

console.log(functionDeclaration(1,1)); // work bcz its a function declaration
// console.log(functionExpression(2,2)); // not work bcz its a function expression
// console.log(arrowFunction(3,3)); // not work bcz its a arrow function

function functionDeclaration(a,b){
    return a + b;
}
const functionExpression = function(a,b){
    return a + b;
}
const arrowFunction = (a,b) => a + b;

//Example
if(!numberProduct){
    deleteShopCart();
}
var numberProduct = 10;
function deleteShopCart(){
    console.log('All products deleted!');
}

//'this' keyword
console.log(this);

//'this' in function declaration gives undefined
const calAge1 = function(birthYear){
    console.log(2022 - birthYear);
    console.log(this);
}
calAge1(1991);

//'this' in arrow function gives access of parent scope and parent scope is window in this case
const calAgeArrow = (birthYear) => {
    console.log(2022 - birthYear);
    console.log(this);
}
calAgeArrow(1990);

//'this' in object
const jonas = {
    year: 1991,
    calcAge2:function(){
        console.log(this);
        console.log(2022 - this.year);
    }
}
jonas.calcAge2();

const matila = {
    year: 2017,
}

matila.calcAge2 = jonas.calcAge2;
matila.calcAge2();

// Regular Functions vs Arrow Functions
var yourName = 'Paresh';
const kamlesh = {
    yourName: 'Kamlesh',
    year: 1988,
    calcAge: function(){
        console.log(this);
        console.log(2022 - this.year);
    },
    greet: () => {
        console.log(`Hey ${this.yourName}`);
    }
};
kamlesh.greet();

// primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

//object
const me = {
    name: 'John',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

//example or practice for primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

//example or practice for object/reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marrage', jessica);
console.log('Before Marrage', marriedJessica);

//copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice','Bob'],
};
const jessicaCopy = Object.assign({},jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marrage', jessica2);
console.log('After Marrage', jessicaCopy);
