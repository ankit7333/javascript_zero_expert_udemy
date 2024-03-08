'use strict';

//for loop
const rabindra = [
    'Rabindra',
    'Negi',
    2022 - 1988,
    'Developer',
    ['Deepika','Katrina','Karina'],
    true
]
const types = [];
for(let i = 0; i < rabindra.length; i++){
    //Reading from rabindra array
    console.log(rabindra[i], typeof rabindra[i]);
    //Filling or push types array with below 2 examples
    // types[i] = typeof rabindra[i];
    //and 
    types.push(typeof rabindra[i]);
}
console.log(types);

const years = [1991, 1992, 1993, 1994];
const ages = [];
console.log(ages);

for(let i = 0; i < years.length; i++){
    const d = new Date().getFullYear();
    const agesAll = d - years[i];
    ages.push(agesAll);
}
console.log(ages);

//continue
console.log('---print only string---');
for(let i = 0; i < rabindra.length; i++){
    if(typeof rabindra[i] !== 'string') continue;
    console.log(rabindra[i], typeof rabindra[i]);
}

//break
console.log('---Break with number---');
for(let i = 0; i < rabindra.length; i++){
    if(typeof rabindra[i] === 'number') break;
    console.log(rabindra[i], typeof rabindra[i]);
}