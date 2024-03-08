// 'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '✔ Correct Number!';

// document.querySelector('.number').textContent = 8;
// document.querySelector('.score').textContent = 17;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); 
    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    //when playes wins
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '✔ Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when guess is too high
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😢 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    //when guess is too low
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = '😢 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//Coding Challenge #1
    // Implement a game rest functionality, so that the player can make a new guess!
    // Your tasks :- 
        // 1. Select the element with the 'again' class and attach a click event handler
        // 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables
        // 3. Restore the initial conditions of the message, number, score and guess input fields
        // 4. Also restore the original background color (#222) and number width (15rem)

// point 1
document.querySelector('.again').addEventListener('click', function(){
    // point 2
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // point 3
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    // point 4
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
});