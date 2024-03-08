'use strict';
const calAge = birthYear => 2022 - birthYear;
const myAge = calAge(1991);
console.log(myAge);

const yearsUnitRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 50 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

const retirementYearRemains = yearsUnitRetirement(1991, 'Ankit');
console.log(retirementYearRemains);