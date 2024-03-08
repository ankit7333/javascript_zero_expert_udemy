'use strict';

//Object example
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2022 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};

console.log(jonas);
console.log(jonas.firstName);
console.log(jonas['firstName']);

//challange 'Jonas has 3 friends and his best friend is called Michael'
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends.find(i => i === 'Michael')}`);