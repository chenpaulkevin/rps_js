let playerScore = 0;
let computerScore = 0;
let computerScoreElement = document.querySelector(".computer-score");
let userScoreElement = document.querySelector(".user-score");
let roundResultElement = document.querySelector(".round-result");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}
function getPlayerChoice(playerAction) {
  const validActions = ["Rock", "Paper", "Scissors"];

  if (validActions.includes(playerAction)) {
    playRound(playerAction, getComputerChoice());
  } else {
    return "Invalid Choice";
  }
}
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    game("Tie");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    game("You Win!");
  } else if (
    (playerChoice === "Rock" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Rock")
  ) {
    computerScore++;
    game("You Lose!");
  } else {
    console.log("Invalid Choice");
  }
}


function game(result) {
  if (playerScore >= 5 || computerScore >= 5) {
    const message = playerScore >= 5 ? "You've won" : "You've lost";
    alert(`${message} the game!`);
    playerScore = 0;
    computerScore = 0;
    roundResultElement.textContent = "";
  } else {
    roundResultElement.textContent = result;
  }

  computerScoreElement.textContent = computerScore;
  userScoreElement.textContent = playerScore;
}
