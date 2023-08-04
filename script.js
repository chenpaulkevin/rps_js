let playerScore = 0;
let computerScore = 0;

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
    console.log("Your Choice: " + playerChoice);
    console.log("Computer Choice: " + computerChoice);
  
    if (playerChoice === computerChoice) {
      console.log("It's a Tie!");
    } else if (
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
      playerScore++;
      console.log("You Win!");
    } else if (
      (playerChoice === "Rock" && computerChoice === "Paper") ||
      (playerChoice === "Paper" && computerChoice === "Scissors") ||
      (playerChoice === "Scissors" && computerChoice === "Rock")
    ) {
      computerScore++;
      console.log("You Lose!");
    } else {
      console.log("Invalid Choice");
    }
  
    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
  }
  
