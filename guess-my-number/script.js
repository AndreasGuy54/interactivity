'use strict';

const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
  }
  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    //change styles and show secretNumber when player wins
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // if guess is high decrease score, prompt user of high guess and show decrement on DOM
  else if (guess > secretNumber) {
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
  }
  // if guess is low decrease score, prompt user of low guess and show decrement on DOM
  else if (guess < secretNumber) {
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
