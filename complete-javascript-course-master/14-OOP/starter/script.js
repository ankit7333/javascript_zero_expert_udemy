'use strict';

console.log('---- Constructor Functions and other Operator ----');
const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
const jonas = new Person('Jonas', 1991);
console.log(jonas);
console.log(jonas instanceof Person);

//1. New {} is created
//2. Function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log('---- Prototypes ----');

console.log(Person.prototype);

Person.prototype.calAge = function(){
    console.log(2022 - this.birthYear);
}
jonas.calAge();
matilda.calAge();

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('sapiens'));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [7, 4, 6, 2, 7, 9, 9, 8, 1, 6];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
   return [...new Set(this)];
}
console.log(arr.unique());

console.log('---- ES6 Classes ----');
//class declaration
class PersonCl{
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    //Instance Method
    calAge(){
        console.log(2022 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.firstName}`);
    }
    // Static Methods
    static hey(){
        console.log('Hey there');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calAge();
console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();

//1. Classes are not hoisted
//2. Classes are first-class citizes
//3. Classes are excuted in strict mode

console.log('---- setters and getters ----');
const account = {
    owner : 'Jonas',
    movements: [200, 530, 120, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

PersonCl.hey();

console.log('---- Object.create ----');
const PersonProto = {
    calAge(){
        // console.log(2037 - this.birthYear);
        console.log(`${this.firstName}'s age is ${2037 - this.birthYear}`);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calAge();

console.log('---- Inheritance Between Classes : Constructor Functions ----');
const Person1 = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}
Person1.prototype.calAge = function(){
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person1.call(this, firstName, birthYear);
    this.course = course;
}
Student.prototype = Object.create(Person1.prototype);
Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
console.log(mike);
mike.calAge();

console.log('---- Inheritance Between Classes : ES6 Classes ----');

class PersonCl1{
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    //Instance Method
    calAge(){
        console.log(2037 - this.birthYear);
    }
    greet(){
        console.log(`Hey ${this.fullName}`);
    }
    set fullName(name){
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not full name!`);
    }
    get fullName(){
        return this._fullName;
    }
}
class StudentCL1 extends PersonCl1{
    constructor(fullName, birthYear, course){
        super(fullName, birthYear);
        this.course = course;
    }
    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calAge(){
        console.log(`I'm ${2037 - this.birthYear} year old, but as a student I feel more like ${2037 - this.birthYear + 10}`)
    }
}

const martha = new StudentCL1('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calAge();

console.log('---- Inheritance Between Classes : Object.create ----');

const PersonProto1 = {
    calAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function(firstName, birthYear, course){
    PersonProto1.init.call(this, firstName, birthYear);
    this.course = course;
}
StudentProto1.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto1);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calAge();

console.log('---- Another Class Example ----');
class Account{
    //1. Public fields (instances)
    locale = navigator.language;
    
    //2. Private fields (instances)
    #movements = [];
    #pin;
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        //Protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;
        console.log(`Thanks for opening an account, ${this.owner}`);
    }
    //Public interface or 3.Public Methods
    getMovements(){
        return this.#movements;
    }
    deposit(val){
        this.#movements.push(val);
        return this;
    }
    widthdraw(val){
        this.deposit(-val);
        return this;
    }
    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }
    // 4. Private Methods
    #approveLoan(val){
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
acc1.widthdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());

// console.log(acc1#movements);
// console.log(acc1#pin);
console.log(acc1);

//chaining
acc1.deposit(300).deposit(500).widthdraw(35).requestLoan(25000).widthdraw(4000);
console.log(acc1.getMovements());