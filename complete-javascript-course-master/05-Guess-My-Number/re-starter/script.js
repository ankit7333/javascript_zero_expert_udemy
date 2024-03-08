'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;
//display message 
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    //When there is no input
    if(!guess){
        displayMessage(`⛔ No Number!`);
        //When player wins
    }else if(guess === secretNumber){
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        displayMessage(`🎉 Correct Number!`);

        //highscore store when play wins
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    //when guess is wrong
    else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? `📉Too High!` : `📈 Too Low!`);
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage(`👎 You Lost the game!`);
            document.querySelector('.score').textContent = 0;
        }
    }
    //When guess is too high
    // else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = `📉Too High!`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = `👎 You Lost the game!`;
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     //When guess is too low
    // }else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = `📈 Too Low!`;
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = `👎 You Lost the game!`;
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    displayMessage(`Start guessing...`);
    document.querySelector('.guess').value = '';
});