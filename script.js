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

console.log(getUserChoice(1));
console.log(getComputerChoice());

// Массив с значениями
//// две переменные которые хранят счет, победы компьютера и человека

//Функция которая через math random возращает либо 1, 2, 3

//функция которая получается ответ от пользователя и конвентирует это ответ в
// один из ответов в массиве -1

//функция с сравнением, которая сравнивает ответы пользователя
// и ответ компьютера к тому же записывает кто побеждает  и добавляет в общий счет,
// раундов
//будет пять.

// цикл из пяти итерация раундов

//функция сравненния счета, кто победил в сумме.

//функция игры полной, которая вызывает каждую функцию вместе
