'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length); // can get length of array
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
console.log(friends[2]);

const years = new Array(1991, 1992, 1993, 1994);
console.log(years);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtman', 2022 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calAge = function(birtYear){
    return 2022 - birtYear;
}

const age1 = calAge(years[0]);
const age2 = calAge(years[1]);
const age3 = calAge(years[2]);

console.log(age1,age2,age3);