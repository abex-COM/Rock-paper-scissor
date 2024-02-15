function getUserChoice() {
  let playerSelection = prompt('Please enter your r for Rock, s for scissor or p for paper');
  return playerSelection;
}

function getComputerChoose()   {
  const char = ['r', 's', 'p'];
  let compChoose = char[Math.floor(Math.random() * 3)]; //generate r, s, or p
  return compChoose;
}

function playRound(compChoice, input) {
  if ((compChoice === 'r' && input === 's') ||
      (compChoice === 's' && input === 'p') ||
      (compChoice === 'p' && input === 'r')) {
      return 2;
  } else if ((compChoice === 's' && input === 'r') ||
      (compChoice === 'p' && input === 's') ||
      (compChoice === 'r' && input === 'p')) {
      return 1;
  } else if (compChoice === input) {
      return 3;
  } else {
      console.log('Wrong input please enter only r, s, or p');
      return null;
  }
}

function playGame() {
  console.log('Score');
  let player = 0;
  let computer = 0;

  for (let i = 0; i < 5; i++) {
      console.log(`Computer: ${computer} You: ${player}`);
      let result = playRound(getComputerChoose(), getUserChoice());

      if (result === 1) {
          player++;
      } else if (result === 2) {
          computer++;
      } else if (result === 3) {
          console.log("Tie");
          i--;
      }
  }

  console.log(`Final Score - Computer: ${computer} You: ${player}`);
  if (computer === 5) {
      console.log('You Lose');
  } else if (player === 5) {
      console.log('You Win');
  }
}

playGame();



