'use strict';

//Object example
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function(birthYear){
        const d = new Date();
        return d.getFullYear() - this.birthYear;
    },
    getSummary: function(){
        return `${this.firstName} is ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};
console.log(jonas.calcAge());
// console.log(jonas.calcAge(1993));
// console.log(jonas['calcAge'](1994));

//challenge
//"Jonas is 46-years old teacher, and he has a driver's license"

console.log(jonas.getSummary());