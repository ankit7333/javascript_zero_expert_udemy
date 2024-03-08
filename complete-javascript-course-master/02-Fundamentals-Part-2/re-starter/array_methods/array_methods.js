'use strict';
// push
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
friends.push('jay');
console.log(friends);

// unshift
friends.unshift('john');
console.log(friends);

// pop
friends.pop();
console.log(friends);

// shift
friends.shift();
console.log(friends);

// indexOf
console.log(friends.indexOf('Steven'));

// includes
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends);
console.log(friends.includes('23'));
console.log(friends.includes(23));
if(friends.includes('Peter')){
    console.log(`You have a friend called ${friends.find(i => i === 'Peter')}`);
}