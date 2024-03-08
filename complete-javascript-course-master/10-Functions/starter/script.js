'use strict';
console.log('----------- Default Parameters -----------');
{
const bookings = [];
const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers){
    //ES5 method below
    //numPassengers = numPassengers || 1;
    //price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
    // console.log(bookings);
}
createBooking('LH88');
createBooking('LH08',2,800);
createBooking('LH08',4);
createBooking('LH08',5);
createBooking('LH08', undefined, 900);
}

console.log('----------- How Passing Arguments Works: Value vs. Reference -----------');
{
    const flight = 'LH123';
    const jonas = {
        name: 'Jonas Schmedtmann',
        passport: 24789456,
    };
    const checkIn = function(flightNum, passenger){
        flightNum = 'LH888';
        passenger.name = 'Mr. ' + passenger.name;
        if(passenger.passport === 24789456){
            alert('Checked in');
        }else{
            alert('Wrong passport');
        }
    }
    checkIn(flight, jonas);
    console.log(flight);
    console.log(jonas);
    //Is the same as doing...
    const flightNum = flight;
    const passenger = jonas;

    const newPassport = function(person){
        person.passport = Math.trunc(Math.random * 10000);
    }
    newPassport(jonas);
    console.log(jonas);
    checkIn(flight, jonas);
}
console.log('--- First-Class and Higher-Order Functions or Functions Accepting Callback Functions ---')
{
    const oneWord = function(str){ // function will replace all space from string and lowercase
        return str.replace(/ /g, '').toLowerCase();
    }
    const upperFirstWord = function(str){
        const [first, ...others] = str.split(' ');
        return [first.toUpperCase(), ...others].join(' ');
    }
    //Higher-Order function
    const transformer = function(str,fn){
        console.log(`Original string: ${str}`);
        console.log(`Transformed string: ${fn(str)}`);

        console.log(`Transformed by : ${fn.name}`);
    }
    transformer('javaScript is the hard language for Ankit Adulkar', upperFirstWord);
    transformer('javaScript is the hard language for Ankit Adulkar', oneWord);

    const high5 = function(){
        console.log('Hi');
    }
    document.body.addEventListener('click', high5);
}

console.log('--- Functions Returning Functions ---');
const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Kamlesh');
greet('Hello')('Sukhraj');

const greetArr = (greeting) => name => console.log(`${greeting} ${name}`);
greet('Hy')('Sunny');

{
    console.log('--- The Call and Apply Method ---');
    const lufthansa = {
        airline: 'Lufthansa',
        iataCode: 'LH',
        bookings: [],
        // book: function(){}
        book(flightNum, name){
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
            this.bookings.push({flight : `${this.iataCode}${flightNum}`, name});
        }
    };
    lufthansa.book(224, 'Jonas Schmedtmann');
    lufthansa.book(314, 'John Smith');

    const eurowings = {
        airline: 'Eurowings',
        iataCode: 'EW',
        bookings:[],
    };

    //call method
    const book = lufthansa.book;

    //book(23, 'Sarah Williams'); //this not working
    book.call(eurowings, 23, 'Sarah Williams');
    console.log(eurowings);
    book.call(lufthansa, 88, 'Kamlesh Kelji');
    console.log(lufthansa);

    const swiss = {
        airline: 'Swiss Airline',
        iataCode: 'LX',
        bookings:[],
    }
    book.call(swiss, 323, 'Rabindra Negi');
    console.log(swiss);

    //apply method :- apply method take array as a argument
    const flightData = [233, 'Rais Pinjari'];
    book.apply(swiss, flightData);
    console.log(swiss);
    book.call(swiss, ...flightData);
    console.log(swiss);
    
    // Bind Method
    console.log('--- The Bind Method ---');
    const bookEW = book.bind(eurowings);
    const bookLH = book.bind(lufthansa);
    const bookLX = book.bind(swiss);
    bookEW(23, 'Steven William');
    bookLH(23, 'John Cena');
    bookLX(23, 'Kane');
    console.log(eurowings);
    console.log(lufthansa);
    console.log(swiss);

    const bookEW23 = book.bind(eurowings, 23);
    bookEW23('Kamlesh Kelji');
    bookEW23('Santosh Kelji');

    // with event listner
    lufthansa.planes = 300;
    console.log(lufthansa);
    lufthansa.buyPlane = function(){
        console.log(this);
        this.planes++;
        console.log(this.planes);
    };
    document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

    //partial application
    const addTax  = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));
    const addVAT = addTax.bind(null, 0.23);
    // above addVAT will work like addVAT = value => value + value * 0.23;
    console.log(addVAT(100));
    console.log(addVAT(300));

    // with functions call functions
    console.log('--- with functions call functions ---');
    const addTax1 = function(rate){
        return function(value){
            return value + value * rate;
        }
    }
    const addVAT1 = addTax1(0.23);
    console.log(addVAT1(100));
    console.log(addVAT1(300));
    console.log(addTax1(0.23)(100));
}

{
    //Immediately invoked Function Expressions
    console.log('---Immediately invoked Function Expressions---');
    const runOnce = function(){
        console.log('This will never run again');
    }
    runOnce();

    (function(){
        console.log('This will never run again');
        const isPrivate = 88;
    })();
    // console.log(isPrivate);

    (() => console.log('This will never run again'))();

    {
        const isPrivate = 99;
        var notPrivate = 9;
    }
    // console.log(isPrivate);
    console.log(notPrivate);
}

{
    //closures
    console.log('------ closures ------');
    const secureBooking = function(){
        let passengerCount = 0;
        return function(){
            passengerCount++;
            console.log(`${passengerCount} passengers`);
        }
    }
    const booker = secureBooking();
    booker();
    booker();
    booker();
    console.dir(booker);

    //Example 1
    let f;

    const g = function(){
        const a = 23;
        f = function(){
            console.log(a * 2);
        }
    }

    const h = function(){
        const b = 77;
        f = function(){
            console.log(b * 2);
        }
    }

    g();
    f();
    console.dir(f);
    //re-assign f function to h
    h();
    f();
    console.dir(f);

    //Example 2
    const boardPassengers = function(n, wait){
        const perGroup = n / 3;
        setTimeout(function(){
            console.log(`We are now boarding all ${n} passengers`);
            console.log(`There are 3 groups, each with ${perGroup} passengers`);
        }, wait * 1000);
        console.log(`Will start boarding in ${wait} seconds`);
    }
    boardPassengers(180, 3);
}
