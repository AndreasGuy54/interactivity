'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//reset game when user clicks again button
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //reset score, secretnumber, background-color and input
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

//when the user clicks the check button (main game logic)
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

    //is current score greater than the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
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
