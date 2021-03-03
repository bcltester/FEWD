function displayTitle() {
    alert('Welcome to the Guess the Number Game.');
}
function playGame() {
    let number = Math.floor(Math.random() * 10 + 1);     //private variable
    let count = 1;      //private variable
    let guess;      //private variable
    alert('I\'m guessing a number between 1 and 10;');
    while (true) {
        guess = Number(prompt('Enter your guess'));
        if (number > guess) {
            alert('Too Low!');
            count++;
        } else if (number < guess) {
            alert('Too High!');
            count++;
        } else if (number === guess) {
            alert(`You guessed it! It took you ${count} tries.`);
            return;
        } else {
            alert('You did not enter a valid number guess');
        }
    }
}
function main () {
    displayTitle();
    let playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = prompt('Do you want to play again (y or n)?');
    }
    alert('Thanks for playing the game.');
}
main();