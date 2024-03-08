'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Base 10 i.e 0 to 9
// Binary base 2 i.e 0 and 1

console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

//Conversion
console.log('--- Conversion ---');
console.log(Number('23'));
console.log(+'23');

//Parsing
console.log('--- Parsing ---');
console.log(Number.parseInt('8px', 10));
console.log(Number.parseInt('e26', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

//isNaN (is not a number)
console.log('--- isNaN ---');
console.log(Number.isNaN(20)); // false bcz its a number
console.log(Number.isNaN('20')); // false bcz its a number
console.log(Number.isNaN(+'20X')); // true bcz its not a number
console.log(Number.isNaN(20 / 0)); // false bcz its a number infinity

// isFinite (isFinite() function determines whether the passed value is a finite number)
console.log('--- isFinite ---');
console.log(Number.isFinite(20)); // true bcz its a number
console.log(Number.isFinite('20')); // false bcz its not a number
console.log(Number.isFinite(+'20X')); // false bcz its not a number
console.log(Number.isFinite(20 / 0));// false bcz its not a number

//sqrt() 
console.log('--- sqrt ---');
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

//max()
console.log('--- max ---');
console.log(Math.max(5,18,23));
console.log(Math.max(5,18,'23'));
console.log(Math.max(5,18,'23px'));

//min()
console.log('--- min ---');
console.log(Math.min(5,18,23));
console.log(Math.min('5',18,23));
console.log(Math.min('5px',18,23));

//PI()
console.log('--- PI ---');
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random()
console.log('--- random ---');
console.log(Math.trunc(Math.random() * 6) + 1);

const randInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randInt(10, 15));

//truc()
console.log('--- truc ---');
console.log(Math.trunc(23.5));

//round()
console.log('--- round ---');
console.log(Math.round(24.3));
console.log(Math.round(24.9));

//ceil()
console.log('--- ceil ---');
console.log(Math.ceil(24.3));
console.log(Math.ceil(24.9));

//floor()
console.log('--- ceil ---');
console.log(Math.floor(24.3));
console.log(Math.floor(24.9));

//Round decimal
console.log('--- toFixed ---');
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));

//Reminder Operator
console.log('--- Reminder Operator ---');
console.log(5 % 2); 
console.log(5 / 2); // (5 = 2 * 2 + 1) so we get reminder % is 1 above

console.log(8 % 3);
console.log(8 / 3); // (8 = 2 * 3 + 2) so we get reminder % is 2 above

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

//check even number
console.log('--- check even number ---');
const isEven = n => n % 2 === 0 ? `${n} Is Even number => True` : `${n} Not Even Number => False`;
console.log(isEven(2));
console.log(isEven(23));
console.log(isEven(514));

//BigInt
console.log('--- BigInt ---');
console.log(2 ** 53 - 1); // safe number
console.log(Number.MAX_SAFE_INTEGER)

console.log(2 ** 53 + 1); // not safe number
console.log(2 ** 53 + 2); // not safe number
console.log(2 ** 53 + 3); // not safe number

console.log(90071992547409963435978);
console.log(90071992547409963435978n); // bigint
console.log(BigInt(90071992547409963435978)); // bigint

//operations with BigInt
console.log('--- Operations with BigInt ---');
console.log(10000n + 10000n);
console.log(90071992547409963435978n * 10n);
console.log(90071992547409963435978n * BigInt(20));

//creating dates
console.log('--- Create dates ---');
const now = new Date();
console.log(now);

console.log(new Date());
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

//Working with dates
console.log('--- Working with dates ---');
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
console.log(future.toISOString());
console.log(future.getTime());

future.setFullYear(2040);
console.log(future);

//Operations with dates;
console.log('--- Operations with dates ---');
const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const passDays = calcDaysPassed(new Date(2022, 9, 10), new Date(2022, 9, 24));
console.log(`${passDays} days passed`);

//Internationalizing Numbers Intl
const num = 3884764.34
const options = {
  style: 'unit',
  unit: 'mile-per-hour',
  // useGrouping: false,
}
console.log('--- Internationalizing Numbers Intl ---');
console.log('UK:          ', new Intl.NumberFormat('en-UK', options).format(num));
console.log('Germany:     ', new Intl.NumberFormat('de-DE'
, options).format(num));
console.log('Syria:     ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options).format(num));

//setTimeout()
console.log('--- setTimeout() ---');
setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 1500, 'olives', 'spinach');

// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 3000, ...ingredients);
// if(ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval()
console.log('--- setInterval() ---');
setInterval(function(){
  const now = new Date();
  console.log(`${now.getSeconds()}`);
},1000);


