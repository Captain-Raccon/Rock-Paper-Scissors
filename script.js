const weapons = ["Rock", "Paper", "Scissors"];

let userScore = 0;
let compScore = 0;
let playedRounds = 0;

let resultArea = document.getElementById("Text");

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

function startGame(userButt) {
  if (playedRounds == 5) {
    resultArea.textContent = checkWinnerOfGame();
  } else {
    let userChoice = getUserChoice(userButt);
    let computerChoice = getComputerChoice();

    resultArea.textContent = `${userChoice} ${computerChoice} ${checkWinnerOfRound(userChoice, computerChoice)}`;
  }
}

let buttonRock = document.getElementById("Rock");
buttonRock.addEventListener("click", () => {
  if (playedRounds >= 5) {
    resultArea.textContent = "Round ended! For replay just reload the page!";
    return;
  } else {
    startGame("Rock");
    playedRounds += 1;
  }
});

let buttonPaper = document.getElementById("Paper");
buttonPaper.addEventListener("click", () => {
  if (playedRounds >= 5) {
    resultArea.textContent = "Round ended! For replay just reload the page!";
    return;
  } else {
    startGame("Paper");
    playedRounds += 1;
  }
});

let buttonScissors = document.getElementById("Scissors");
buttonScissors.addEventListener("click", () => {
  if (playedRounds >= 5) {
    resultArea.textContent = "Round ended! For replay just reload the page!";
    return;
  } else {
    startGame("Scissors");
    playedRounds += 1;
  }
});
