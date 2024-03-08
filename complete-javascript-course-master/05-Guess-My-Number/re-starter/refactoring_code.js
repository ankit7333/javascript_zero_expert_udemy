// 'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//display message function
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); 
    //when there is no input
    if(!guess){
        displayMessage('⛔ No Number!');
    }
    //when playes wins
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('✔ Correct Number!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('😢 You lost the game!');
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
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    // point 4
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.number').style.width = '15rem';
});