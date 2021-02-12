
/*
  App: First JavaScript Application
  Author: me
  Date 2021-02-04
*/

// Allow the user to enter their guess
let num = prompt("Guess a number between 1 and 10");
// Check to see if the number is a winner
if (num == 5) {
  // if it is, they got it right
  alert("You guessed the right number!");
}
else {
  // if it isn't, they got it wrong
  alert("You guessed the wrong number.");
}
