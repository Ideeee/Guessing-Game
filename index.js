const prompt = require('prompt-sync')();

const intro = () =>{
    const userName = prompt('Enter a username: ');

    console.log(`Hello ${userName}, Welcome to our guessing game.
For starters, Try to guess a number between 1 and 2.
You have 3 tries`);
}

let points = 0;

function game(range) {
  if(range > 10){
    return console.log( `You won! Your score is ${points} points`)
  }

  let attemptsLeft = 3;
  let correctNumber = Math.floor(Math.random() * range) + 1;

  while(attemptsLeft){
    const guess = prompt(`Guess a number between 1 and ${range}: `);

    if(guess == correctNumber){
      points += 1;
      console.log (`Correct! your score is ${points} `);

      game(range + 1);
      break;
    } 
    else{
      attemptsLeft -= 1;
      if(!attemptsLeft) console.log(`Sorry, you lose. Your score is ${points}`);
    }
  }
}

intro();
game(2);