// SIMPLE FOR LOOP
/*
for (let i = 1; i <= 10; i++) {
    document.write(`Item: ${i}<br>`);
}
*/

// PRACTICAL USE OF THE FOR LOOP
/*
let loanAmount = parseFloat(prompt('Enter the amount you want to borrow'));
for (let i = 0; i < 5; i++) {
    loanAmount = loanAmount + (loanAmount * 5.9/100);
}
document.write(`The total amount of the loan is $${loanAmount.toFixed(2)}.`);
*/

// SIMPLE WHILE LOOP
/*
let num = 0;
while (num < 10) {
    num++;
    document.write(`The current number is ${num}.<br>`);
}
document.write("You have reached the end.");
*/

// PRACTICAL USE OF A WHILE LOOP
/*
let num;
while (true) {
    num = parseInt(prompt('Enter a number between 1 and 10'));
    if (num >= 1 && num <= 10) {
        break;
    } else {
        console.error(`${num} is not between 1 and 10.`);
    }
}
console.log(`%c${num} is between 1 and 10.`, `color:purple; font-size: 2.4em;`);
*/

// SIMPLE DO WHILE LOOP
let num = 0;
do {
    num++;
    document.write(`You are on number ${num}.<br>`);
} while (num < 10);
document.write("You have reached the end.");

// do-while loop
/*
let num;
let again = "y";

do {
    num = parseInt(prompt("Enter a number between 1 and 10"));
    if (num === 5) {
        alert(`${num} is the correct number.`);
    } else {
        alert(`${num} was NOT the correct number.`);
    }
    again = prompt("Do you want to play again? (y or n)","y");
} while (again === "y");
*/

//nested loop statements
/*
let totalScore = 0, i, score;

for (i = 0; i < 3; i++) {
    while (true) {
        score = parseInt(prompt("Enter a number between 1 and 100"));
        if (score >= 1 && score <= 100) {
            totalScore += score;
            break;
        } else {
            console.error("This number is not between 1 and 100.");
        }
    }
}
alert(`The total score is ${totalScore}.`);
*/

// SIMPLE FOR IN LOOP (OBJECT)

/*
let props;
let car = {make: "Chevy", model: "Camaro", color: "white"};

for (props in car) {
    document.write(car[props] + "<br>");
}
*/

// SIMPLE FOR IN LOOP (ARRAYS)
/*
let employee;
let company = ["Anna", "Barbara", "Cindy"];
for (employee in company) {
    document.write(company[employee] + "<br>");
}
*/

// SIMPLE FOR OF LOOP (ARRAYS)
// It seems like this is the equivalent to what I'm used to in Python (i.e. where it iterates through the members of a list or array)
/*
let employee;
let company = ["Anna", "Barbara", "Cindy"];
for (const employee of company) {   //They want you do set const employee here due to scope, so that this employee variable is not used elsewhere in the code
    document.write(employee + "<br>");
}
*/