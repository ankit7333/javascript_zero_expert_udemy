'use strict';

//for loop inside loop
console.log(`-- for loop --`);
for(let excersie = 1; excersie < 4; excersie++){
    console.log(`---Start Excersie ${excersie}`);
    for(let rep = 1; rep < 5; rep++){
        console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}

//while loop
{    
    console.log(`-- while loop --`);
    let rep = 1;
    while(rep <= 10){
        console.log(`Lifting weight repetition ${rep} 🏋️‍♀️`);
        rep++;
    }
}

{
    let dice = Math.trunc(Math.random() * 6) + 1;
    while(dice !== 6){
        console.log(`You rolled a ${dice}`);
        dice = Math.trunc(Math.random() * 6) + 1;
        if(dice === 6) console.log(`Loop is about to end...`);
    }
}