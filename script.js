'use strict';

let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
// console.log(randomNumber);
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const highScoreMessage = document.querySelector('.highscore');
const scoreMessage = document.querySelector('.score');
const hiddenNumber = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

const check = function () {
  const userInput = Number(document.querySelector('.guess').value);
  if (!userInput) {
    message.textContent = 'Enter a number';
  } else if (userInput <= 0 || userInput > 20) {
    message.textContent = 'Only between 1 & 20';
    score--;
    scoreMessage.textContent = score;
  } else if (userInput > randomNumber) {
    message.textContent = 'Try Lower';
    score--;
    scoreMessage.textContent = score;
  } else if (userInput < randomNumber) {
    message.textContent = 'Try Higher';
    score--;
    scoreMessage.textContent = score;
  } else {
    message.textContent = 'Winner!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    hiddenNumber.textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      highScoreMessage.textContent = highScore;
    }
  }
};

checkButton.addEventListener('click', function () {
  check();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') check();
});

againButton.addEventListener('click', function () {
  score = 20;
  scoreMessage.textContent = score;
  message.textContent = 'start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  hiddenNumber.textContent = '?';
  randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
});
