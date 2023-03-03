
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number 😀'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() *20)+1;
let = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if(!guess) {
        document.querySelector('.message').textContent = ' No number enter ⛔️';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number 🎉'; 
    } else if(guess > secretNumber) {
  document.querySelector('.message').textContent = 'Too hight !'
  score--;
  document.querySelector('.score').textContent = score;
    } else if(guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low !'
        score--;
        document.querySelector('.score').textContent = score;
    }
});