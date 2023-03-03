
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number 😀'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 25;
// console.log(document.querySelector('.guess').value);

const number = Math.trunc(Math.random() *20)+1;
console.log(number)

document.querySelector('.check').addEventListener('click', function(){
    const guess = document.querySelector('.guess').value;
    console.log(guess)

    if(!guess) {
        document.querySelector('.message').textContent = ' No number enter ⛔️';
    }
});