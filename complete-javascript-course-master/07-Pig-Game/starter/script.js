'use strict';

//selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0CurrentScore = document.querySelector('#current--0');
const player1CurrentScore = document.querySelector('#current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let score, currentScore, activePlayer, playing;

const init = function(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    player0CurrentScore.textContent = 0;
    player1CurrentScore.textContent = 0;
    //document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    //document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};
init();

//starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

// switching next player
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if(playing){
        // 1. Generating a random dice roll
        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        //console.log(diceNumber);

        // 2. Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${diceNumber}.png`;

        // 3. Check for rolled 1 : if true, switch to next player
        if(diceNumber !== 1){
            //currentScore = currentScore + diceNumber; // same as below line
            currentScore += diceNumber; // same as above commented line but this is in shortcut code as compare to above commented code line
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            // switching next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function(){
    if(playing){
        // 1. Add current score to active player's score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        // 2. check if player's score is >= 100
        if(score[activePlayer] >= 20){
            playing = false;
            // - finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
        }

        // switch next player
        else{
            switchPlayer();
        }
    }
});
//reset button for new game
btnNew.addEventListener('click', init);

const name = 'Rabindra';
const first = () => {
    let a = 1;
    const b = second(1,2);
    a += b;
    return a;
}
function second(x,y){
    var c = 3;
    return c;
}
const x = first();
console.log(x);