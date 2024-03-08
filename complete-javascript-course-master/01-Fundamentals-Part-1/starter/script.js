let js = 'Hard';
if(js === 'Hard') alert('Ankit is not good in JavaScript');
console.log(3+8+20+40);

console.log('Rabindra');
console.log('08');

//variable name conventions
let firstName = 'Kamlesh';
console.log(firstName);

//Data types
let javascriptIsHard = true;
console.log(javascriptIsHard);

console.log(typeof true);
console.log(typeof 18);
console.log(typeof 'Rabindra');
console.log(typeof javascriptIsHard);

javascriptIsHard = 'YES!';
console.log(typeof javascriptIsHard);

let year;
console.log(year);
console.log(typeof year);

year = 1988;
console.log(typeof year);

//let,const and var
let age = 32;
age = 33;

const birthYear = 1988;
//birthYear = 1991;

var job = 'HTML/CSS Coder';
job = 'Learner';

//Math operators
const now = 2022;
const ageRabindra = now - 1988;
const ageSarah = now - 1992;
console.log(ageRabindra, ageSarah);

console.log(ageRabindra * 2, ageSarah / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

let colleagueFirstName = 'Rabindra';
let colleagueLastName = 'Negi';
console.log(colleagueFirstName + ' ' + colleagueLastName);

//Assignment Operators
let x = 4 + 4; // 4 + 4 = 8
x += 9; //x = x + 10 (x = 8 so 8 + 10 then x = 17)
x *=4; // x = x * 4 (x = 68)
x++; // x + 1 (x = 69)
x--; // x - 1 (x = 68)
console.log(x);

// Comparison Operators
console.log(ageRabindra > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 36);

// Operator Precedence
console.log(now - 1988 > now - 1992)
console.log(25 - 10 - 5);

let a,b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a,b);

const averageAge = (ageRabindra + ageSarah) / 2;
console.log(ageRabindra, ageSarah, averageAge);

//Strings
const nameFirst = 'Ankit';
const myjob = 'HTML developer';
const mybirthYear = 1991;
const currentYear = 2022;

const ankitData = "I'm " + nameFirst + ', a ' + (currentYear - mybirthYear) + ' year old ' + myjob + '!';
console.log(ankitData);

//Templates Literals
const ankitDataNew = `I'm ${nameFirst}, a ${currentYear - mybirthYear} year old ${myjob}!`
console.log(ankitDataNew);
console.log(`Just a regulat string...`);

//strings for new lines or to break lines we use in ES5 "\n\"
console.log('Sting with \n\
multiple \n\
lines')

//Templates Literals for new lines or to break lines we dont use any thing just see the code below
console.log(`String
multiple
lines`)

//if else statements
const agekamlesh = 34;
const oldEnough = agekamlesh >= 18;
if(oldEnough){
    console.log(`Rabindra can start driving license`);
}
const ageSushmita = 15;
if(ageSushmita >= 18){
    console.log(`Sushmita can start driving license`);
} else{
    const yearsLeft = 18 - ageSushmita;
    console.log(`Sushmita is too young. Wait another ${yearsLeft} years`);
}

const birthYearAnkit = 1991;
let century;
if(birthYearAnkit <= 2000){
    century = `Ankit born in 20th century`;
} else{
    century = `Ankit is not born in 21st century`;
}
console.log(century);

//type conversion
const yearData = '1991';
console.log(Number(yearData), yearData);
console.log(yearData + 18);
console.log(Number(yearData) + 18); // string value get converted into number bt Number();

console.log(Number('Rabindra'));
console.log(typeof NaN); // NaN itself a number

console.log(String(23), 23);

//type coercion
console.log('I am ' + 8 + ' years old');
console.log('23' - '10' - '3'); //minus operator convert string to number
console.log('23' * '3'); //multiple operator convert string to number
console.log('23' / '3'); //dividing operator convert string to number

let n = '1' + 1;
n = n - 1;
console.log(n);

//truly and falsy values
 // 5 falsy values : 0, '', undefine, null, NaN

 console.log(Boolean(0));
 console.log(Boolean(''));
 console.log(Boolean(undefined));
 console.log(Boolean('Rabindra'));
 console.log(Boolean({}));

 const money = 0;
 if(money){
    console.log("Don't spend it all");
 }else{
    console.log('I should get a job!');
 }
 // in above e.g we know that zero is a falsy value so condition will goes in else statement.

 let height;
 if(height){
    console.log('YAY! Height is defined');
 }else{
    console.log('Height is undefined');
 }
 // in above e.g we know that we do not assign any value to variable height then it is a falsy value so condition will goes in else statement.

 // Equality Opreator: '==' vs '==='

 let ageMeena = '18';
 if(ageMeena === 18) console.log('You just become an adult (strict)');
 if(ageMeena == 18) console.log('You just become an adult (loose)');
 //prompt(`What's your favourite number?`);
 const favourite = Number(prompt(`What's your favourite number?`));
 console.log(favourite);
 console.log(typeof favourite);
 if(favourite == 23){ // '23' == 23
    console.log('Cool! 23 is a amazing number!');
 }
 if(favourite === 24){ // '24' === 24
    console.log('Cool! 24 is a amazing number!');
 }
 if(favourite === 25){ // 25 === 25
    console.log('Cool! 25 is a amazing number!');
 }
 if(favourite === 26){
    console.log('Cool! 26 is a amazing number!');
 }else if(favourite === 7){
    console.log('7 is also a cool number');
 }else if(favourite === 9){
    console.log('9 is also a cool number');
 }else{
    console.log('Number is not 20 or 7 or 9');
 }
 if(favourite !== 23) console.log('Why not 23?');

 //Locigal Operator
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision){
   console.log('Rabindra is able to drive!');
}else{
   console.log('Someone else should drive...');
}

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
   console.log('Rabindra is able to drive!');
}else{
   console.log('Someone else should drive...');
}

//The Switch Statement

const day = 'Thrusday';
switch(day){
   case 'Monday':
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
   case 'Tuesday':
      console.log('Prepare theory videos');
      break;
   case 'Wednesday':
   case 'Thrusday':
      console.log('Write a code examples');
      break;
   case 'Friday':
      console.log('Record videos');
      break;
   case 'Saturday':
   case 'Sunday':
      console.log('Enjoy the weekends');
      break;
   default:
      console.log('Not a valid day');
}

if(day === 'Monday'){
   console.log('Plan course structure');
   console.log('Go to coding meetup');
}else if(day === 'Tuesday'){
   console.log('Prepare theory videos');
}else if(day === 'Wednesday' || day === 'Thrusday'){
   console.log('Write a code examples');
}else if(day === 'Friday'){
   console.log('Record videos');
}else if(day === 'Saturday' || day === 'Sunday'){
   console.log('Enjoy the weekends');
}else{
   console.log('Not a valid day');
}

// The Conditional (Ternary) Operator
{
   const age = 23;
   age >= 18 ? console.log('I like to drink Wine') : console.log('I like ton drink Water');
}

{
   const age = 23;
   const drink = age >= 18 ? 'Drink wine' : 'Drink water';
   console.log(drink);
}

{
   const age = 7;
   console.log(`I link to drink ${age >= 18 ? 'Drink wine' : 'Drink water'}`);
}

{
   const age = 8;
   let drink;
   if(age >= 18){
      drink = 'Drink wine';
   }else{
      drink = 'Drink water';
   }
   console.log(drink);
}
