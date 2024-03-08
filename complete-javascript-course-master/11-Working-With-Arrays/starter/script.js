'use strict';
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
const accounts = [account1, account2, account3, account4];

console.log('----------- Simple Array Methods -----------');
{
    let arr = ['a', 'b', 'c', 'd', 'e'];

    console.log('----------- Slice Method -----------');
    // Slice Method
    console.log(arr.slice(2)); // start from index 2
    console.log(arr.slice(2,4)); // slice method incluce/start from index 2 first parameter and excluded last paramater
    console.log(arr.slice(-2)); // negative parameter will take last entery/value from array
    console.log(arr.slice(-1)); // negative parameter will take last entery/value from array
    console.log(arr.slice(1,-2)) // start from index 1 and excluded last 2 values from array
    console.log(arr.slice()) // will return copy of orignal array if we dont specify parameter
    console.log([...arr]) // will return copy of orignal array

    console.log('----------- Splice Method -----------');
    // Splice Method :- splice mutate original array
    // console.log(arr.splice(2)); // start from index 2
    arr.splice(-1); // negative parameter will take last entery/value from array
    console.log(arr);
    arr.splice(1,2); // delete index 1 and 2 from array
    console.log(arr);

    console.log('----------- Reverse Method -----------');
    // Reverse Method :- reverse mutate orignal array and reverse the array
    const arr1 = ['j', 'i', 'h', 'g', 'f'];
    console.log(arr1.reverse());
    console.log(arr1);

    console.log('----------- Concat Method -----------');
    // Concat Method :- to join two arrays
    const letters = arr.concat(arr1);
    console.log(letters);
    console.log([...arr, ...arr1]); // spread operator

    console.log('----------- Join Method -----------');
    // Join Method :- to join array with some seprator which we define
    console.log(letters.join(' - '));
}

{
    console.log('----------- at Method -----------');
    //at Method :- 
    const arr = [23, 35, 44];
    console.log(arr[0]);
    console.log(arr.at(0));
    console.log('Jonas'.at(0));

    console.log('----- length, slice and at Method to access last array element -----');
    // getting last array element
    console.log(`length method ${arr[arr.length -1]}`);
    console.log(`slice method ${arr.slice(-1)[0]}`);
    console.log(`at method ${arr.at(-1)}`);
    console.log('Jonas'.at(-1));
}

console.log('---- For Each Method ----');
//forEach :- continue and break statement is not able to use in this
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
{
    //Below example with for of loop
    // for(const movement of movements){
    for(const [i, movement] of movements.entries()){
        if(movement > 0){
            console.log(`Movement ${i + 1} : You deposited ${movement}`);
        }else{
            console.log(`Movement ${i + 1} : You widthdraw ${Math.abs(movement)}`); // Math.abs() will return absolute value, remove minus sign from number
        }
    }
    console.log('--------');
    //Below example with forEach loop Method
    movements.forEach(function(movement, index, array){
        if(movement > 0){
            console.log(`Movement ${index + 1} : You deposited ${movement}`);
        }else{
            console.log(`Movement ${index + 1} : You widthdraw ${Math.abs(movement)}`); // Math.abs() will return absolute value, remove minus sign from number
        }
    });
}

console.log('---- forEach with Maps and Sets ----');

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
{
    // forEach with Maps
    currencies.forEach(function(value, key, map){
        console.log(`${key} : ${value}`);
    });

    // forEach with Sets
    const currenciesUnique = new Set(['USD','GBP','USD','EUR', 'EUR']);
    console.log(currenciesUnique);
    currenciesUnique.forEach(function(value, key, map){
        console.log(`${key} : ${value}`);
    });
}

console.log('--- map method ---');
{
    const euroToUsd = 1.1;

    console.log('--- 1. map method with callback function ---');
    const movementsUsd = movements.map(function(mov){
        return mov * euroToUsd;
    });
    console.log(movements);
    console.log(movementsUsd);

    console.log('--- 2. map method with arrow function ---');
    const movementsUsd1 = movements.map(mov => mov * euroToUsd);
    console.log(movementsUsd1);

    console.log('--- 3. map method with arrow function ---');
    const movementsDescriptions = movements.map((mov, i) =>
        `Movement ${i + 1} : You ${mov > 0 ? 'deposited' : 'widthdraw'} ${Math.abs(mov)}`
        // if(mov > 0){
        //     return `Movement ${i + 1} : You deposited ${mov}`;
        // }else{
        //     return `Movement ${i + 1} : You widthdraw ${Math.abs(mov)}`;
        // }
    );
    console.log(movementsDescriptions);
}

console.log('--- filter method ---');
{
    console.log('--- show only deposits amount ---');
    const deposits = movements.filter((mov, i, arr) => mov > 0); //show only deposits amount
    console.log(movements);
    console.log(deposits);

    console.log('--- show only withdrawal amount ---');
    const withdrawals = movements.filter(mov => mov < 0); //show only withdrawal amount
    console.log(movements);
    console.log(withdrawals);
}

console.log('--- reduce method ---');
{
    const balance = movements.reduce(function(acc, curr, i, arr){
        console.log(`Iteration ${i} : ${acc}`)
        return acc + curr;
    }, 0);
    console.log(movements);
    console.log(balance);

    //maximum value
    const maxValue = movements.reduce((acc, curr) => acc > curr ? acc : curr, movements[0]);
    const maxValue1 = movements.reduce((acc, curr) => {
        if(acc > curr) return acc;
        else return curr;
    }, movements[0]);
    console.log(maxValue);
    console.log(maxValue1);
}
console.log('--- find method ---');
{
    const firstWithdrawal = movements.find(mov => mov < 0);
    console.log(movements);
    console.log(firstWithdrawal);

    console.log(accounts);
    const account = accounts.find(acc => acc.owner === 'Jessica Davis');
    console.log(account);
}
{
    console.log('-- includes method --');
    console.log(movements);
    console.log(movements.includes(-130));
    
    console.log('--- some method ---');
    const anyDeposit = movements.some(mov => mov > 0);
    console.log(anyDeposit);
    const anyDeposit1 = movements.some(mov => mov > 1500); // has one value greater than 1500
    console.log(anyDeposit1);
    const anyDeposit2 = movements.some(mov => mov === -130);
    console.log(anyDeposit2);

    console.log('--- every method ---');
    console.log(movements.every(mov => mov > 0));
    console.log(account4.movements.every(mov => mov > 0));

    console.log('--- seperate callback ---');
    const deposit = mov => mov > 0;
    console.log(movements.some(deposit));
    console.log(movements.every(deposit));
    console.log(movements.filter(deposit));
}

{
    console.log('--- flat method ---');
    const arr = [[1, 2, 3], [8, 0, 4], 6, 5, 7];
    console.log(arr.flat());
    const deepArr = [[1, [2, 3]], [8, [0, 4]], 6, 5, 7];
    console.log(deepArr.flat(2));

    // const accountMovements = accounts.map(acc => acc.movements);
    // console.log(accountMovements);
    // const allMovements = accountMovements.flat();
    // console.log(allMovements);
    // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
    // console.log(overalBalance);

    const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
    console.log(overalBalance);

    console.log('--- flatMap method ---');
    const overalBalance1 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
    console.log(overalBalance1);
}

{
    console.log('-- sort method --');
    //String example
    const owners = ['kamlesh', 'rais', 'rabindra', 'sunny', 'gayatri', 'sukhraj', 'rakhi', 'susmita', 'sagar'];
    console.log(owners.sort());
    //Numbers example
    console.log(movements);
    console.log(movements.sort());

    console.log('-- sort numbers array in accessending order with sort method --');
    // movements.sort((a,b) => {
    //     //retrun > 0 //A, B
    //     //retrun < 0 //B, A
    //     if(a > b) return 1;
    //     if(a < b) return -1;
    // });
    movements.sort((a, b) => a - b) // this will also return in accesending order
    console.log(movements);

    console.log('-- sort numbers array in descending order with sort method --');
    // movements.sort((a,b) => {
    //     //retrun > 0 //A, B
    //     //retrun < 0 //B, A
    //     if(a > b) return -1;
    //     if(a < b) return 1;
    // });
    movements.sort((a, b) => b - a) // this will also return in descending order
    console.log(movements);
}

{
    console.log('---- creating array dynamic ----');
    const arr = [1,2,3,4,5,6,7,8];
    console.log(new Array(1,2,3,4,5,6,7,8));
    const x = new Array(8);
    console.log(x);

    console.log('---- fill method ----');
    // syntax :- array.fill(value, start, end)
    x.fill(1);
    console.log(x);
    arr.fill(23,4,6);
    console.log(arr);

    console.log('---- from method ----');
    const y = Array.from({length:8}, () => 1);
    console.log(y);
    const z = Array.from({length:8}, (_, i) => i + 1);
    console.log(z);
}

{
    console.log('--- deposit bank amount sum ---');
    const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, curr) => sum + curr, 0);
    console.log(bankDepositSum);

    console.log('--- number of deposit more and equal to 1000 from normal method ---');
    const numberDeposit1000 = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;
    console.log(numberDeposit1000);

    console.log('--- number of deposit more and equal to 1000 from reduce method ---');
    const numberDeposit1000exmpl1 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
    console.log(numberDeposit1000exmpl1);

    //prefixed ++ operator
    let a = 10;
    console.log(++a);

    console.log('--- Display Bank Deposit and Withdrawal ---');
    const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements)
    .reduce((sumvalue, curvalue) => {
        curvalue > 0 ? (sumvalue.deposits += curvalue) : (sumvalue.withdrawals += curvalue);
        return sumvalue;
    }, {deposits: 0, withdrawals: 0});
    console.log(deposits, withdrawals);

    console.log('--- title case example');
    //this is a nice title => This Is a Nice Title
    const convertTitlecase = function(title){
        const capitalize = str => str[0].toUpperCase() + str.slice(1);
        const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
        const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => (exceptions.includes(word) ? word : capitalize(word)))
        .join(' ');
        return capitalize(titleCase);
    }
    console.log(convertTitlecase('this is a nice title'));
    console.log(convertTitlecase('this is a LONG title but not too long'));
    console.log(convertTitlecase('and here is another title with an EXAMPLE'));
}
    