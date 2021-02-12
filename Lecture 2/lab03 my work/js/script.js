//Global variables
let score1, score2, score3, total = 0, average;

//Get 3 scores from user and add them together
score1 = prompt("Enter the first score:");
total += parseFloat(score1);

score2 = prompt("Enter the second score:");
total += parseFloat(score2);

score3 = prompt("Enter the third score:");
total += parseFloat(score3);

//Calculate the average
average = total / 3;

//Display the result
console.log(`The average is ${average}.`);
console.log(`The average is ${average.toFixed(2)}.`);

document.write(`The first score was ${score1}.<br/>`);  //We use <br> here not \n because we are writing HTML directly to the page
document.write(`The second score was ${score2}.<br/>`);
document.write(`The third score was ${score3}.<br/>`);
document.write(`The average of the three scores was ${average.toFixed(2)}.`);
document.write(`The average of the three scores was ${parseInt(average)}.`);
document.write(`The average of the three scores was ${average.toPrecision(1)}.`);

