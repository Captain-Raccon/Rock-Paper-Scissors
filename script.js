const weapons = ["Rock", "Paper", "Scissors"];

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * weapons.length);
  let result = weapons[random];
  return result;
}

function getUserChoice(textAnswer) {
  let result = textAnswer.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}

function checkWinnerOfRound(userAnswer, compAnswer) {
  if (userAnswer == compAnswer) {
    return "** Draw! **";
  } else if (
    (userAnswer == "Rock" && compAnswer == "Scissors") ||
    (userAnswer == "Scissors" && compAnswer == "Paper") ||
    (userAnswer == "Paper" && compAnswer == "Rock")
  ) {
    userScore += 1;
    return "** User WINS! **";
  } else {
    compScore += 1;
    return "** Computer WINS! **";
  }
}

function checkWinnerOfGame() {
  if (userScore > compScore) {
    return `---- ${userScore} : ${compScore} User WINS THE GAME! ----`;
  } else if (userScore == compScore) {
    return `---- ${userScore} : ${compScore} TOTAL DRAW! ---`;
  } else {
    return `----- ${userScore} : ${compScore} computer WINS THE GAME! ----`;
  }
}

function startGame() {
  let userChoice = getUserChoice(prompt("Write answer Rock, Paper, Scissors"));
  let computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);
  console.log(checkWinnerOfRound(userChoice, computerChoice));
}

function startRounds() {
  userScore = 0;
  compScore = 0;
  for (let i = 0; i < 5; i++) {
    startGame();
  }
  console.log(checkWinnerOfGame());
}

startRounds();
