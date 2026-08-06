//Псевдокод;

const arr = ["Rock", "Paper", "Scissors"];

let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  let result = arr[random - 1];
  return result;
}

function getUserChoice(value) {
  let result = null;
  if (value !== undefined && value <= 2) {
    result = arr[value];
    return result;
  } else {
    return "error";
  }
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

function checkWinnerOfGame(userScore, compScore) {
  if (userScore > compScore) {
    return `---- ${userScore} : ${compScore} User WINS THE GAME! ----`;
  } else if (userScore == compScore) {
    return `---- ${userScore} : ${compScore} TOTAL DRAW! ---`;
  } else {
    return `----- ${userScore} : ${compScore} computer WINS THE GAME! ----`;
  }
}

function RockPaperScissors() {
  let userChoice = getUserChoice(
    Number(prompt("Write number in answer  0 = Rock, 1 = Paper, 2 = Scissors")),
  );
  let computerChoice = getComputerChoice();

  console.log(userChoice, computerChoice);
  console.log(checkWinnerOfRound(userChoice, computerChoice));
}

function getRounds() {
  for (let i = 0; i <= 5; i++) {
    RockPaperScissors();
  }
  console.log(checkWinnerOfGameg(userScore, compScore));
}

getrounds();
