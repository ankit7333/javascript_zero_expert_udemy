'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; 
  },
  orderDelivery({
    starterIndex = 3, 
    mainIndex = 0, 
    time = '20:00', 
    address
  }){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3){
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredients, ...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
};

const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

//destructuring array below with 'arr' array
const [x, y, z] = arr;
console.log(x, y, z);

//destructring array below with restraunt object inside any array for e.g 'categories' array
let [main, , secondary] = restaurant.categories; // by add space between two comma we skip the 2nd categoey from 'categories' array
console.log(main,secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
//or
//we have destructure i.e main to secondary and secondary to main in below e.g
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2,0));
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

//Nested array destructuring
const nested = [2, 4, [6, 8]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//------destructuring Object-------//
//Example 1
{
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);
}
//Example 2
const {name: restaurantName, openingHours: openHours, categories: tags} = restaurant;
console.log(restaurantName, openHours, tags);
//Example 3
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 888;
const obj = {a: 23, b:7, c:14};
({a, b} = obj);
console.log(a,b);

//Nested object
const {fri} = openHours;
console.log(fri);

const {fri:{open,close}} = openHours;
console.log(open, close);

restaurant.orderDelivery({
  time:'22:30',
  address:'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address:'Via del Sole, 21',
  starterIndex: 1,
});

//The spread operator (...)
const basearr = [7, 8, 9];
const badNewArray = [1, 2, basearr[0], basearr[1], basearr[2]];
console.log(badNewArray);
const newArray = [1, 2, ...basearr];
console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join 2 arrays
const newMenuJoin = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(newMenuJoin);

//Iterables : array, map, string, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, '', 'A.'];
console.log(letters);
console.log(...str);

//Real-world example
const ingredients = [
  prompt('Let\'s make pasta! Ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?')
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);

//object
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant, 
  founder: 'Guiseppe'
};
console.log(newRestaurant);

{
//SPREAD, bcz on RIGHT side of equal to '='
const arrr = [1, 2, ...[3, 4]];

//REST, bcz on LEFT side of equal to '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
]
console.log(pizza, risotto, otherFood);

//object
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

//function
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(2, 6);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 5);
const x = [2, 6];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
}

//short circuiting with OR || operator
console.log('---short circuiting with OR || operator---');
{
  //use any data types, return any data types, short-circuiting
  console.log(3 || 'jonas') ;
  console.log('' || 'jonas') ;
  console.log(true || 0) ;
  console.log(undefined || null) ;
  console.log(undefined || 0 || '' || 'Hello' || 23 || null) ;

  restaurant.numGuests = 23;
  const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guest1);
  const guest2 = restaurant.numGuests || 10;
  console.log(guest2);
}
//short circuiting with AND && operator
console.log('---short circuiting with AND && operator---');
{
  console.log(0 && 'jonas') ;
  console.log(7 && 'jonas') ;
  console.log('Hello' && 23 && null && 'jonas') ;
}

{
  //Logical Assignment Operators
  const rest1 = {
    name:'Capri',
    numGuest: 20,
  }
  const rest2 = {
    name:'La Piazza',
    owner: 'Giovonni Rossi',
    numGuest: 0,
  }
  // 1. OR assignment operator
  // console.log('---OR assignment operator---');
  // rest1.numGuest = rest1.numGuest || 10;
  // rest2.numGuest = rest2.numGuest || 10;
  // console.log(rest1);
  // console.log(rest2);
  // rest1.numGuest ||= 10;
  // rest2.numGuest ||= 10;
  // console.log(rest1);
  // console.log(rest2);
  // 2. nullish assignment operator
  console.log('---nullish assignment operator---');
  rest1.numGuest ??= 10;
  rest2.numGuest ??= 10;
  console.log(rest1);
  console.log(rest2);
}

{
  //Looping Arrays: The for-of Loop
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(menu);
  for(const item of menu){
    console.log(item);
  }
  for(const [i,el] of menu.entries()){
    console.log(`${i + 1}: ${el}`);
  }
}

{
  //without optinal chaining
  if(restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open);
  }
  //with optinal chaining
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);
  //Example
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  for(const day of days){
    const open = restaurant.openingHours[day]?.open ?? 'Closed';
    console.log(`On ${day} we open at, ${open}`);
  };
  //Methods (optinal chaining working with methods)
  console.log(restaurant.order?.(0,1) ?? 'Method does not exit');
  console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exit');
  //Array (optinal chaining working with arrays)
  const user = [
    {
      name: 'Jonas',
      email: 'hello@jonas.io',
    }
  ]
  console.log(user[0]?.name ?? 'user array empty');
}

// looping of Object
{
  //Property NAMES
  for(const day of Object.keys(openingHours)){
    console.log(day);
  }
  const properties = Object.keys(openingHours);
  console.log(properties);
  let openString = `We are open on ${properties.length} days:`;
  for (const day of properties){
    openString += `${day},`;
  }
  console.log(openString);

  //Property VALUES
  const values = Object.values(openingHours);
  console.log(values);

  //Entire object
  const entries = Object.entries(openingHours);
  console.log(entries);
  for(const x of entries){
    console.log(x);
  }
  //key and values
  for(const [day , {open, close}] of entries){
    console.log(`On ${day} we open at ${open} and close at ${close}`);
  }
}

//Sets
console.log('--Sets--');
{
  const ordersSet = new Set(['Pizza', 'Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
  console.log(ordersSet);
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
  // ordersSet.clear();
  console.log(ordersSet);
  for(const order of ordersSet) console.log(order);
  //Example set to array using spread operator
  const staff = ['Waiter', 'Chef', 'Waiter', 'manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);
}
//Maps
console.log('--Maps:Fundamental--');
{
  const rest = new Map();
  rest.set('name', 'Classico Italiano');
  rest.set(1, 'Firenze Italy');
  rest.set(2, 'Lisbon Portugal');
  console.log(rest);
  rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open',11)
  .set('close',23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get('categories'));
  const time = 21;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
  console.log(rest.has('categories'));
  rest.delete(2);
  // rest.clear();
  console.log(rest);
  console.log(rest.size);
}
console.log('--Maps:Iteration--');
{
  const question = new Map([
    ['question','What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'javaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again!'],
  ]);
  console.log(question);
  //convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);
  //Quiz app
  console.log(question.get('question'));
  for(const [key,value] of question){
    if(typeof key === 'number')console.log(`Answer ${key}: ${value}`);
  }
  const answer = Number(prompt('Your answer'));
  console.log(answer);
  console.log(question.get(question.get('correct') === answer));
  //convert map to array
  console.log([...question]);
  console.log([...question.entries()]);
  console.log([...question.keys()]);
  console.log([...question.values()]);
}

// Strings :- Part 1
const airline = 'TAP Air Portugal';
const plane = 'A088';

console.log(plane[0]);
console.log('A088'[2]);

console.log(airline.length);
console.log('A088'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // + 1 we to remove space

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
  // B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E'){
    console.log(`You got the middle seat and the seat number is ${seat}`);
  }else{
    console.log(`You are lucky and the seat number is ${seat}`);
  }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

console.log(airline.toLowerCase());
console.log('jonas'.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//Comparing email
const email = 'hello.jonas.io';
const loginEmail = ' Hello.Jonas.io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

//Replace
const priceGB = '288,79£';
const priceUS = priceGB.replace('£', '$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); //g means global

//Booleans
const plane1 = 'Airbus A008neo';
console.log(plane1.includes('A008'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')){
  console.log('Part of the new airbus family');
}

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are NOT allowed on board!');
  }else{
    console.log('Welcome aboard!');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//split method
console.log('-----split methhod-----');
console.log('a+very+nice+string'.split('+'));
console.log('jonas schmedtman'.split(' '));

const [firstName, lastName] = 'jonas schmedtman'.split(' ');

//join method
console.log('-----join methhod-----');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const nameUpper = [];
  for(const n of names){
    //nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtman');

//padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(25, '+'));
console.log('jonas'.padStart(20, '+').padEnd(25, '+'));

const maskCreditCard = function(number){
  const stringCardNumber = number + '';
  const lastDigit = stringCardNumber.slice(-4);
  return lastDigit.padStart(stringCardNumber.length, '*');
}
console.log(maskCreditCard(34257498));
console.log(maskCreditCard(79643560256743562));
console.log(maskCreditCard('79643560256743562'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(4));

const planesInLine = function(n){
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}.`);
}
planesInLine(2);
planesInLine(4);
planesInLine(8);
