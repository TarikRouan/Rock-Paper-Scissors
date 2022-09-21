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

// score function
function result(Pscore, Cscore) {
  if (Pscore > Cscore) {
    console.log(`Your score : ${Pscore} | Computer score : ${Cscore}`);
    console.log("You Won");
  } else if (Pscore < Cscore) {
    console.log(`Your score : ${Pscore} | Computer score : ${Cscore}`);
    console.log("You Lost!");
  } else if (Pscore === Cscore) {
    console.log(`Your score : ${Pscore} | Computer score : ${Cscore}`);
    console.log("Tie!!");
  }
}

// playing function
function play(pChoice, cChoice) {
  // Choices :
  if (pChoice === "rock" || pChoice === "paper" || pChoice === "scissors") {
    console.log(`\nYour choice : ${pChoice}`);
    console.log(`Computer's choice : ${cChoice}`);
  } else {
    console.log(`\nwrong choice : ${pChoice}`);
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
    return (Pscore += 1);
  } else if (
    (pChoice === "scissors" && cChoice === "rock") ||
    (pChoice === "paper" && cChoice === "scissors") ||
    (pChoice === "rock" && cChoice === "paper")
  ) {
    console.log(`You lost, ${cChoice} beats ${pChoice}`);
    return (Cscore += 1);
  }
}

// run the game
let Pscore = 0;
let Cscore = 0;
for (i = 1; i <= 5; i++) {
  play(getPlayerChoice(), getComputerChoice());
}
result(Pscore, Cscore);
