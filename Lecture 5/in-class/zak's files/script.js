// SIMPLE FUNCTION
// function displayMessage(fname, lname, course) {
//     console.log(`%cWelcome to the ${course} course ${fname} ${lname}.`, `font-size: 1.4em;`);
// }
// displayMessage('Zak', 'Ruvalcaba', 'JavaScript');
// displayMessage('Sally', 'Smith', 'JavaScript');
// displayMessage('Mark', 'Harrison', 'HTML');
// displayMessage('Jane', 'Doe', 'CSS');

// SIMPLE FUNCTION WITH DEFAULT PARAMETER
// function displayMessage(fname, lname, course = 'JavaScript') {
//     console.log(`%cWelcome to the ${course} course ${fname} ${lname}.`, `font-size: 1.4em;`);
// }
// displayMessage('Zak', 'Ruvalcaba');
// displayMessage('Sally', 'Smith');
// displayMessage('Mark', 'Harrison', 'HTML');
// displayMessage('Jane', 'Doe', 'CSS');

// FUNCTION BY VAL EXAMPLE
// function displayMessage(fname, lname, course = 'JavaScript') {
//     console.log(`%cWelcome to the ${course} course ${fname} ${lname}.`, `font-size: 1.4em;`);
// }
// let course1 = 'Python';
// let course2 = 'HTML';
// displayMessage('Zak', 'Ruvalcaba');
// displayMessage('Sally', 'Smith');
// displayMessage('Mark', 'Harrison', course1); // COPY OF THE ORIGINAL VARIABLE
// displayMessage('Jane', 'Doe', course2); // COPY OF THE ORIGINAL VARIABLE
// course2 = 'CSS'; // CHANGES ORIGINAL VARIABLE
// console.log(course2);

// FUNCTION BY REF EXAMPLE
// function showEmployees(company) {
//     console.log(`Employee: ${company[0]}`);
//     company[0] = 'John';
// }
// let employees = ['Zak', 'Sally', 'Mark'];
// showEmployees(employees);
// console.log(employees[0]);

// SIMPLE FUNCTION USING ARGUMENTS OBJECT
// function displayMessage(fname, lname, course) {
//     console.log(`%cWelcome to the ${arguments[2]} course ${arguments[0]} ${arguments[1]}.`, `font-size: 1.4em;`);
// }
// displayMessage('Zak', 'Ruvalcaba', 'JavaScript');
// displayMessage('Sally', 'Smith', 'JavaScript');
// displayMessage('Mark', 'Harrison', 'HTML');
// displayMessage('Jane', 'Doe', 'CSS');

//ADVANCED FUNCTION USING ARGUMENTS OBJECT
// function calculate(numbers) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     console.log(total);
// }
// calculate(5, 10, 20);
// calculate(5, 3);
// calculate(100, 200, 87, 32, 16);

//ADVANCED FUNCTION USING ARGUMENTS OBJECT THAT RETURNS A VALUE
// function calculate(numbers) {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// console.log(calculate(5, 10, 20));
// console.log(calculate(5, 3));
// console.log(calculate(100, 200, 87, 32, 16));

//SIMPLE EXAMPLE OF A VARIABLE ASSIGNMENT FUNCTION
// const displayMessage = function (fname, lname, course) {
//     return `Welcome to the ${course} course ${fname} ${lname}.`;
// }
// console.log(displayMessage('Zak', 'Ruvalcaba', 'JavaScript'));

//ADVANCED EXAMPLE OF A VARIABLE ASSIGNMENT FUNCTION: GETTING ELEMENTS FROM THE DOM
// //HELPER FUNCTION
// const $ = function (id) {
//     return document.getElementById(id);
// };

// //GET ELEMENTS FROM THE DOM
// let fname = $('fname').value;
// let lname = $('lname').value;
// let course = $('course').value;
// console.log(`Welcome to the ${course} course ${fname} ${lname}.`);

//SIMPLE EXAMPLE OF AN ARROW FUNCTION
// const displayMessage = (fname, lname, course) => {
//     return `Welcome to the ${course} course ${fname} ${lname}.`;
// }
// console.log(displayMessage('Zak', 'Ruvalcaba', 'Python'));

//SIMPLE EXAMPLE OF AN ARROW FUNCTION MINUS CURLY BRACES AND RETURN KEYWORD
// const displayMessage = (fname, lname, course) => `Welcome to the ${course} course ${fname} ${lname}.`;
// console.log(displayMessage('Zak', 'Ruvalcaba', 'Python'));

//SIMPLE EXAMPLE OF AN ARROW FUNCTION WITH ONLY ONE PARAMETER
// const displayMessage = course => `Welcome to the ${course} course.`;
// console.log(displayMessage('Python'));

//SIMPLE EXAMPLE OF AN ARROW FUNCTION WITH NO PARAMETERs
// const displayMessage = () => `Welcome to the JavaScript course.`;
// console.log(displayMessage());

//IMPORT A MODULE
// import {add} from "./modules/calculator.js";
// console.log(add(100, 50));

//OR

// import * as calc from "./modules/calculator.js";
// console.log(calc.add(100, 50));