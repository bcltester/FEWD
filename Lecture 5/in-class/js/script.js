
//SIMPLE FUNCTION
/*
function displayMessage(fname, lname, course) { //course, fname, lname are parameters.
    console.log(`%cWelcome to the ${course} course ${fname} ${lname}.`,`font-size: 1.8em;`);
}

displayMessage('Zak', 'Ruvalcaba'); // has undefined
displayMessage('Sally', 'Smith'); // has undefined
displayMessage('Mark', 'Harrison', 'JavaScript');
displayMessage('Bobby', 'Flay', 'Python');
*/

//SIMPLE functionW DEFAULT PARAMETER
/*
function displayMessage(fname, lname, course = 'JavaScript') { //course, fname, lname are parameters. Default value is 'JavaScript'
    console.log(`%cWelcome to the ${course} course ${fname} ${lname}.`,`font-size: 1.8em;`);
}

displayMessage('Zak', 'Ruvalcaba');
displayMessage('Sally', 'Smith');
displayMessage('Mark', 'Harrison');
displayMessage('Bobby', 'Flay');
*/

//FUNCTION BY VALUE
/*
function displayMessage(fname, lname, course = 'JavaScript') { //course, fname, lname are parameters. Default value is 'JavaScript'
    console.log(`%cWelcome to the ${course} course ${fname} ${lname}.`,`font-size: 1.8em;`);
}

let course1 = 'Python';
let course2 = 'HTML';
displayMessage('Zak', 'Ruvalcaba');
displayMessage('Sally', 'Smith');
displayMessage('Mark', 'Harrison', course1);
displayMessage('Bobby', 'Flay', course2);
course2 = 'CSS';
console.log(course2);       //This shows that a COPY of a primitive is passed into the function
*/
// FUNCTION BY REF

/*
function showEmployment(company) {
    console.log(`Employee: ${company[0]}`);
    company[0] = 'John';
}
let employees = ['Zak', 'Sally', 'Mark'];
showEmployment(employees);
console.log(employees[0]);
*/

/*
//using arguments object
function displayMessage(fname, lname, course = 'JavaScript') { //course, fname, lname are parameters. Default value is 'JavaScript'
    console.log(`%cWelcome to the ${arguments[2]} course ${arguments[0]} ${arguments[1]}.`,`font-size: 1.8em;`);
}

displayMessage('Zak', 'Ruvalcaba', 'HTML');
displayMessage('Sally', 'Smith', 'HTML');
displayMessage('Mark', 'Harrison', 'HTML');
displayMessage('Bobby', 'Flay');        //Notice that there is 'undefined' in the output. This is because we only inputted two parameters, so even though there is a default parameter for 'course' arguments[2] doesn't receive a value
*/

// ADVANCED FUNCTION USING ARGUMENTS OBJECT (WHY WE'D FIND ARGUMENTS OBJECT USEFUL)

/*
function calculate(numbers) {
    let base = 0;
    for (let i = 0; i < arguments.length; i++) {        // arguments get turned into an array on the fly
        base += arguments[i];
    }
    console.log(base);
}
calculate(4, 10, 20);
calculate(9, 18);
calculate(100, 200, 87, 21, 15);
*/

// ADVANCED FUNCTION USING ARGUMENTS OBJECT THAT RETURNS A VALUE.  THIS IS MORE IN LINE WITH HOW FUNCTIONS ARE SUPPOSED TO WORK.

/*
function calculate(numbers) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {        // arguments get turned into an array on the fly
        total += arguments[i];
    }
    return total;
}
console.log(calculate(4, 10, 20));
console.log(calculate(9, 18));
console.log(calculate(100, 200, 87, 21, 15));
*/

// SIMPLE EXAMPLE OF A VARIABLE ASSIGNMENT FUNCTION
/*
const displayMessage = function (fname, lname, course) {
    return `Welcome to the ${course} course ${fname} ${lname}`;
}
console.log(displayMessage('Zak', 'Ruvalcaba', 'JavaScript'));
*/

//ADVANCED EXAMPLE OF A VARIABLE ASSIGNMENT FUNCTION: GETTING ELEMENTS FROM THE DOM
/*
// HELPER FUNCTION
const $ = function (id) {       //he prefers to use the $ because jQuery uses $ to grab anything. So he thinks of us writing our own jQuery mini-library right here
    return document.getElementById(id);
};

//GET ELEMENTS FROM THE DOM
let fname = $('fname').value;       //.value gets the value from this element
let lname = $('lname').value;
let course = $('course').value;
console.log(`Welcome to the ${course} course ${fname} ${lname}.`);

//It would be a lot harder to do this with a named function. This is why he preferred a variable assignment function. They are more dynamic.
*/

// SIMPLE EXAMPLE OF AN ARROW FUNCTION
/*
const displayMessage = (fname, lname, course) => {
    return `Welcome to the ${course} course ${fname} ${lname}`;
}
console.log(displayMessage('Zak', 'Ruvalcaba', 'Python'));
*/

// SIMPLE EXAMPLE OF AN ARROW FUNCTION MINUS CURLY BRACES AND RETURN KEYWORD. only works if there is only one statement in the block statement
// const displayMessage = (fname, lname, course) => `Welcome to the ${course} course ${fname} ${lname}`;
// console.log(displayMessage('Zak', 'Ruvalcaba', 'Python'));

// SIMPLE EXAMPLE OF AN ARROW FUNCTION WITH ONLY ONE PARAMETER
// const displayMessage = course => `Welcome to the ${course} course.`;
// console.log(displayMessage('Python'));

// SIMPLE EXAMPLE OF AN ARROW FUNCTION WITH NO PARAMETERS
// const displayMessage = () => `Welcome to the JavaScript course.`;
// console.log(displayMessage());

// ARROW FUNCTION WITH ARGUMENTS OBJECT
/*
const displayMessage = (employees) => {
    return `Welcome to the course ${arguments[0]}, ${arguments[1]}, ${arguments[2]}!`;
}
let peep = ['Anna', 'Barbara', 'Cindy'];
console.log(displayMessage(peep));
*/

// IMPORT A MODULE
import {add} from "./modules/calculator.js";    //goes to the root. iN this case the /js/ folder
console.log(add(100, 50));

//OR

// import * 