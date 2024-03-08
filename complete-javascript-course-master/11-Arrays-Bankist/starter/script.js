'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-08-18T17:01:17.194Z',
    '2022-08-20T23:36:17.929Z',
    '2022-08-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-08-18T17:01:17.194Z',
    '2022-08-20T23:36:17.929Z',
    '2022-08-23T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const formatMovementsDate = function(date){
  const localLanguage = navigator.language;
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if(daysPassed === 0) return `Today`;
  if(daysPassed === 1) return `Yesterday`;
  if(daysPassed <= 7) return `${daysPassed} days ago`;
  else{
    // const day = `${date.getDate()}`.padStart(2,0);
    // const month = `${date.getMonth() + 1}`.padStart(2,0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(localLanguage).format(date);
  }
}

const formatCurr = function(value, locale, currency){
  return new Intl.NumberFormat(locale, {style:'currency', currency: currency}).format(value);
}

const displayMovements = function(acc, sort = false){
  containerMovements.innerHTML = '';

  //sort movements condition
  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements; 

  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date);
    
    //movements format
    const formatMovements = formatCurr(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formatMovements}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


//user name computing
const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()//1. used toLowerCase method to lower case the username.
    .split(' ')//2. then we split it by split method by adding space in first parameter.
    .map(name => name[0])//3. then we use map method bcz we need a first char of each string and iterate it.
    .join('');//4. the we join by an empty to create or get a new username string without an array.
  });
}
createUsernames(accounts);
console.log(accounts);

//Account Balance
const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
}

//account summary
const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, acc.locale, acc.currency);
  
  const amountOut = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(Math.abs(amountOut), acc.locale, acc.currency);
  
  const interest = acc.movements.filter(mov => mov > 0)
  .map(deposit => deposit * acc.interestRate/100)
  .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
  // `${interest.toFixed(2)}€`;
}

const updateUI = function(acc){
  //Display Movements
  displayMovements(acc);
  //Display Balance
  calcDisplayBalance(acc);
  //Display Summary
  calcDisplaySummary(acc);
}

//login counter
const StartLogoutTimer = function(){
  const tick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2,0);
    //in each call print remaining timer to UI
    labelTimer.textContent = `${min}:${sec}`;
    //When 0 seconds, stop timer and log out user
    if(time === 0){
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    //decerese timer by 1 second
    time--;
  };
  //set time to 5 minute
  let time = 10;
  //call timer every seconds
  tick();
  const timer = setInterval(tick, 1000);
}

//Login 
let currentAccount;
btnLogin.addEventListener('click', function(e){
  //to prevent default funtionality of submit button we pass 'e' as a parameter in callback function
  e.preventDefault();
  console.log('LOGIN');

  //timer function
  StartLogoutTimer();

  //Date Display after login
  //Experimenting API
  const now = new Date();
  const dateOptions = {
    hour : 'numeric',
    minute : 'numeric',
    day : 'numeric',
    month : 'long',
    year : 'numeric',
    weekday : 'long',
  }
  const localLanguage = navigator.language;
  // labelDate.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(now);
  labelDate.textContent = new Intl.DateTimeFormat(localLanguage, dateOptions).format(now);

  // const now = new Date();
  // const day = `${now.getDate()}`.padStart(2,0);
  // const month = `${now.getMonth() + 1}`.padStart(2,0);
  // const year = now.getFullYear();
  // const hour = `${now.getHours()}`.padStart(2,0);
  // const min = `${now.getMinutes()}`.padStart(2,0);
  // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if(currentAccount.pin === Number(inputLoginPin.value)){
    //Display Login Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    //Display UI
    containerApp.style.opacity = 1;
    //Empty/ Clear login details after user get logged in and also clear focus from field
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //update UI
    updateUI(currentAccount);
  }
});

//Transfer Amount
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
    console.log('Transfer Valid');
    //Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    //Add Transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    //update UI
    updateUI(currentAccount);
  }
});

//Close Account
btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    //Delete Account
    accounts.splice(index, 1);
    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Loan request
btnLoan.addEventListener('click', function(e, acc){
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1));
  // Add movement
  setTimeout(function(){
    currentAccount.movements.push(amount);
    currentAccount.requestedLoanAmount = amount;
    //Add Loan Date
    currentAccount.movementsDates.push(new Date().toISOString());
    //UI update
    updateUI(currentAccount)
  }, 2500);
});

//Sort button
let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUI);
});
