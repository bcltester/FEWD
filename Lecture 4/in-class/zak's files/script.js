// BASIC FOR LOOP
// for (let i = 1; i <= 10; i++) {
//     document.write(`You are on number: ${i}<br>`);
// }

// LOAN CALCULATOR USING A FOR LOOP
// let loanAmount = parseFloat(prompt('Enter the amount you want to borrow.'));
// for (let i = 1; i <= 5; i++) {
//     loanAmount = loanAmount + (loanAmount * 5.9 / 100);
// }
// document.write(`The total cost of the loan is: $${loanAmount.toFixed(2)}`);

// SIMPLE WHILE LOOP
// let num = 0;
// while (num < 10) {
//     num++;
//     document.write(`You are on number ${num}<br>`);
// }
// document.write(`You have reached the end of the loop.`);

// KEEPING PROMPT ALIVE WITH A WHILE LOOP
// let num;
// while (true) {
//     num = prompt('Enter a number between 1 and 10');
//     if (num >= 1 && num <= 10) {
//         break;
//     } else {
//         console.error('Please enter a number between 1 and 10.');
//     }
// }
// console.log(`%c${num} is between 1 and 10.`, `color:yellow;font-size:2em;`);

// SIMPLE DO WHILE LOOP
// let num = 0;
// do {
//     num++;
//     document.write(`You are on number ${num}<br>`);
// } while (num < 10);
// document.write(`You have reached the end of the loop.`);

// GUESS THE NUMBER GAME WITH DO WHILE LOOP
// let num;
// let again = 'y';
// do {
//     num = parseInt(prompt('Enter a number betwen 1 and 10'));
//     if (num === 5) {
//         alert(`${num} was the correct number.`);
//     } else {
//         alert(`${num} was NOT the correct number.`);
//     }
//     again = prompt('Do you want to play again? (y or n)', 'y');
// } while (again === 'y');
// alert('Thank you for playing.');

// SIMPLE FOR IN LOOP (OBJECT)
// let props;
// let car = {make: "Chevy", model: "Camaro", color: "white"};
// for (props in car) {
//     document.write(car[props] + '<br>');
// }

// SIMPLE FOR IN LOOP (ARRAYS)
// let employee;
// let company = ["Zak", "Sally", "Fred", "Sue", "Mike"];
// for (employee in company) {
//     document.write(company[employee] + '<br>');
// }

// SIMPLE FOR OF LOOP (ARRAYS)
let company = ["Zak", "Sally", "Fred", "Sue", "Mike"];
for (const employee of company) {
    document.write(employee + '<br>');
}