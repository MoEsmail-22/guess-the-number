'use strict';

let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
let score = 20;
let highScore = 0;

const message = document.querySelector('.message');
const highScoreMessage = document.querySelector('.highscore');
const scoreMessage = document.querySelector('.score');
const hiddenNumber = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const prompt = document.querySelector('.prompt');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close');

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

const showPrompt = function () {
  if (window.innerWidth <= 991 && !localStorage.getItem('promptShown')) {
    overlay.classList.remove('hidden');
    prompt.classList.remove('hidden');
    localStorage.setItem('promptShown', 'true');
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
  message.textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  hiddenNumber.textContent = '?';
  randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
});

closeButton.addEventListener('click', function () {
  prompt.classList.add('hidden');
  overlay.classList.add('hidden');
});

window.addEventListener('load', function () {
  showPrompt();
});

document.querySelector('.close').addEventListener('click', function () {
  overlay.classList.add('hidden');
  prompt.classList.add('hidden');
});
