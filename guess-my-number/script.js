'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    // if guess is high decrease score, prompt user of high guess and show decrement on DOM
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📈 Too High!';
      document.querySelector('.score').textContent = score;
    }
    //when score reaches zero, prompt game loss
    else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // if guess is low decrease score, prompt user of low guess and show decrement on DOM
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '📉 Too Low!';
      document.querySelector('.score').textContent = score;
    }
    //when the scoer reaches 0, prompt game loss
    else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
