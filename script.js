// Function for computer selection
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let rNum = Math.floor(Math.random() * 3);
  return choices[rNum];
}

// Function for player selection
function getPlayerChoice() {
  let pChoice = prompt("* rock | paper | scissors *").toLowerCase();
  return pChoice;
}

// function to play one round
function playOneRound(pChoice, cChoice) {
  // Choices :
  if (pChoice === "rock" || pChoice === "paper" || pChoice === "scissors") {
    console.log(`Your choice : ${pChoice}`);
    console.log(`Computer's choice : ${cChoice}`);
  } else {
    console.log(`wrong choice : ${pChoice}`);
    console.log("you can only choose between : * rock | paper | scissors *");
  }
  // Result :
  if (
    (pChoice === "rock" && cChoice === "rock") ||
    (pChoice === "paper" && cChoice === "paper") ||
    (pChoice === "scissors" && cChoice === "scissors")
  ) {
    console.log(`Tie, You both choose ${pChoice} `);
  } else if (
    (pChoice === "rock" && cChoice === "scissors") ||
    (pChoice === "paper" && cChoice === "rock") ||
    (pChoice === "scissors" && cChoice === "paper")
  ) {
    console.log(`You won, ${pChoice} beats  ${cChoice}`);
  } else if (
    (pChoice === "scissors" && cChoice === "rock") ||
    (pChoice === "paper" && cChoice === "scissors") ||
    (pChoice === "rock" && cChoice === "paper")
  ) {
    console.log(`You lost, ${cChoice} beats ${pChoice}`);
  }
}

// run the game
playOneRound(getPlayerChoice(), getComputerChoice());
