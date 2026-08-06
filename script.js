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
  if (value) {
    result = arr[value];
    return result;
  } else {
    return "error";
  }
}

function getWinnerOfRound(userAnswer, compAnswer) {
  if (userAnswer === compAnswer) {
    return "Draw!";
  } else if (
    (userAnswer == "Rock" && compAnswer == "Scissors") ||
    (userAnswer == "Scissors" && compAnswer == "Paper") ||
    (userAnswer == "Paper" && compAnswer == "Rock")
  ) {
    userScore += 1;
    return "User WINS!";
  } else {
    compScore += 1;
    return "Computer WINS!";
  }
}

function getWinnerOfGame(userScore, compScore) {
  if (userScore > compScore) {
    return `${userScore} : ${compScore} User WINS THE GAME!`;
  } else if (userScore == compScore) {
    return `${userScore} : ${compScore} TOTAL DRAW!`;
  } else {
    return `${userScore} : ${compScore} compute WINS THE GAME!`;
  }
}

console.log(getUserChoice(1));
console.log(getComputerChoice());

//функция с сравнением, которая сравнивает ответы пользователя
// и ответ компьютера к тому же записывает кто побеждает  и добавляет в общий счет,
// раундов
//будет пять.

// цикл из пяти итерация раундов

//функция сравненния счета, кто победил в сумме.

//функция игры полной, которая вызывает каждую функцию вместе
