/*
    Project: Lab 01: My First JavaScript Application
    Date: 2/4/21
    Author: Zak Ruvalcaba
*/

// Declare the variable and collect a number from the user
let num = prompt('Guess a number between 1 and 10:');
// Check and see if they entered the correct number
if (num == 5) {
    // Display message saying they won
    alert('You guessed the right number!');
} else {
    // Display message saying they lost
    alert('You guessed the wrong number!');
}