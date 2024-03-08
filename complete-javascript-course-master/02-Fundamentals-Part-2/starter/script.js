'use strict';

let hasDriversLicense = false;
let passTest = true;
if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('You can drive :D');


//functions
function logger(){
    console.log('My name is Rabindra');
}
//calling or running or executing or invoking the function
logger();
logger();
logger();


function fruitProcessor(apples, oranges){
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(4, 4);
console.log(appleOrangeJuice);

//Function Declarations
function calcAge1(birthYear){
    return 2026 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

//Function Expressions
const calcAge2 = function(birthYear){
    return 2026 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

//Arrow Function
const calcAge3 = birthYear => 2026 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUnitRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirment = 65 - age;
    //return retirment;
    return `${firstName} retires in ${retirment}`;
}
console.log(yearUnitRetirement(1991, 'Jonas'));
console.log(yearUnitRetirement(1994, 'Bob'));

// Functions Calling Other Functions
const cutFruitPieces = fruit => fruit * 4;
const fruitProcessor1 = (apples, oranges) => {
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const juice1 = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
    return juice1;
}
console.log(fruitProcessor1(2, 3));

//Array
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//const years = new Array(1990,1995,2000,2005);

const friends = ['Musheer','Suraj','Suhas'];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Rabindra';
const rabindra = [firstName, 'Negi', 2022 - 1988, 'developer', friends];
console.log(rabindra);
console.log(rabindra.length);

//Exercise
const calcAgeArray = function(birtYearArray){
    return 2022 - birtYearArray;
}
const years = [1990, 1967, 2002, 2010, 2018];

const calcAgeArray1 = calcAgeArray(years[0]);
const calcAgeArray2 = calcAgeArray(years[1]);
const calcAgeArray3 = calcAgeArray(years[years.length - 1]);

console.log(calcAgeArray1, calcAgeArray2, calcAgeArray3);

const ages = [calcAgeArray1, calcAgeArray2, calcAgeArray3];

console.log(ages);

//Basic array operations (methods)
const colleague = ['Musheer', 'Anil', 'Suhas'];
const newlength = colleague.push('Jay'); // push method add element into array at the last
console.log(colleague);
console.log(newlength);

colleague.unshift('John'); // unshift method add element into array at the first
console.log(colleague);

colleague.pop() // remove last element from array
console.log(colleague);

const popped = colleague.pop();
console.log(popped);

colleague.shift(); // remove first element from array
console.log(colleague);

console.log(colleague.indexOf('Anil')); // indexOf shows the position of element from array we specify in indexOf.
console.log(colleague.indexOf('Bob'));

console.log(colleague.includes('Anil')); // includes method check if specify element is present in array or not (and show in boolean value true/false)
console.log(colleague.includes('Bob'));

colleague.push(23);
console.log(colleague.includes('23')); // Also check the equality === operator, weather value is string or number
console.log(colleague.includes(23));

if(colleague.includes('Peter')){
    console.log('You have a colleague called Peter');
}else{
    console.log(`You don't have a colleague name Peter`);
}

// Objects
const rabindraObject = {
    firstName: 'Rabindra',
    lastName: 'Negi',
    age: 2022 - 1988,
    job: 'developer',
    colleagues: ['Sukhraj', 'Kamlesh', 'Sushmita']
}
console.log(rabindraObject);

//Dot VS. Bracket
console.log(rabindraObject.lastName); // Dot Notation
console.log(rabindraObject['lastName']); // Bracket Notation

const nameKey = 'Name';
console.log(rabindraObject['first' + nameKey]); // we can do expression in Barket Notation
console.log(rabindraObject['last' + nameKey]);

//console.log(rabindraObject.'last' + nameKey); // we can not do expression with Dot Notation

const intrestedIn = prompt('What do you want to know about Rabindra? Choose between firstName, lastName, age, job and colleagues');

if(rabindraObject[intrestedIn]){
    console.log(rabindraObject[intrestedIn]); // Bracket Notation
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job and colleagues');
}

rabindraObject.location = 'Mumbai'; // Dot Notation
rabindraObject['instagram'] = '@rabiNnegi'; // Bracket Notation
console.log(rabindraObject);

console.log(`${rabindraObject.firstName} has ${rabindraObject.colleagues.length} colleagues, and his best colleague is ${rabindraObject.colleagues[0]}`);

//Object Methods
const tusharObject = {
    firstName: 'Tushar',
    lastName: 'Moolya',
    birthYear: 1996,
    job: 'FrontEnd Developer',
    colleagues: ['Sukhraj', 'Kamlesh', 'Sandeep'],
    hasDriversLicense: true,
    calcAge: function(birthYear){
        return 2022 - birthYear;
    },
    calcAge1: function(){
        console.log(this);
        return 2022 - this.birthYear;
    },
    calcAge2: function(){
        this.age = 2022 - this.birthYear; 
        return this.age;
    },
    calcAge3: function(){
        return `${this.firstName} is a ${this.calcAge1()}-year old ${this.job}, and he has ${hasDriversLicense ? 'a':'no'} driver's license.`;
    }
};
console.log(tusharObject.calcAge(1996)); // Dot Notation
console.log(tusharObject.calcAge1());
console.log(tusharObject.calcAge2());
console.log(tusharObject.calcAge3());
//console.log(tusharObject['calcAge'](1996)); // Bracket Notation

//For Loop :- is keep running until the condition is true
for(let rep = 1;rep <= 10;rep++){
    console.log(`Lifting weights repetition ${rep}`);
}

//Looping Array, Breaking And Continuing
const kamleshObject = [
    'Kamlesh',
    'Kelji',
    2022 - 1988,
    'UI Developer',
    ['Keval','Poonam','Sneha','Gayatri'],
    true
];
const types = []; //empty array
for(let i = 0;i < kamleshObject.length;i++){
    console.log(kamleshObject[i], typeof kamleshObject[i]);
    
    //types[i] = typeof kamleshObject[i]; // filling empty array name types
    types.push(typeof kamleshObject[i]) // filling empty array name types bt methods name push()
}
console.log(types);

{
    const years = [1991, 2007, 1969, 2020];
    const ages = [];
    for(let i = 0;i < years.length;i++){
        ages.push(2022 - years[i]);
    }
    console.log(ages);
}

//continue statement
console.log('----ONLY STRINGS----');
for(let i = 0;i < kamleshObject.length;i++){
    if(typeof kamleshObject[i] !== 'string') continue;
    console.log(kamleshObject[i], typeof kamleshObject[i]);
}

//break statement
console.log('----BREAK WITH NUMBER----');
for(let i = 0;i < kamleshObject.length;i++){
    if(typeof kamleshObject[i] === 'number') break;
    console.log(kamleshObject[i], typeof kamleshObject[i]);
}

// Looping Backwards array
const sunnyObject = [
    'Sunny',
    'Tailor',
    2022 - 1985,
    'UI Designer',
    ['Deepak','Sameer-Ji','Ninad','Pavan'],
    true
]
for(let i = sunnyObject.length - 1; i >= 0; i--){
    console.log(i, sunnyObject[i]);
}

//Loops in Loops
for(let exercise = 1;exercise < 4;exercise++){
    console.log(`---- Start exercise ${exercise}`);
    for(let rep = 1;rep < 5;rep++){
        console.log(`Lifting weight repetation ${rep}`);
    }
}
//While Loop
{
    let rep = 1;
    while(rep <= 8){
        console.log(`Lifting weight repetation ${rep}`);
        rep++;
    }

    let dice = Math.trunc(Math.random() * 6) + 1;
    while(dice !== 6){
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if(dice === 6){
            console.log('Loop is about to end...');
        }
    }
}
