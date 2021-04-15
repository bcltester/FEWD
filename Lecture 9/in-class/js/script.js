let employees = ["Sally", "Zak", "Mark", "Fred", "Pepe", "Sue", "Zak"];

// let employees = [];
// employees[30] = 'zak';

// console.log(`%c${employees}`, `font-size: 24px;`);

// console.log(employees);

// PROCESS USING TRADITIONAL FOR LOOP   
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i]);
// }

// Array.prototype.sayHello = () => {
//     return 'Hello World';
// };

// console.log(employees.sayHello());

// // PROCESS USING FOR IN LOOP (problem with ES5 For In loop)
// for (let employee in employees) {
//     console.log(employees[employee]);
// }
// // unfortunately, For-In (ES5) loop treats these functions as members of the array
// // Therefore, it has to be done like this:
// for (let employee in employees) {
//     if (employees.hasOwnProperty(employee)) {
//         console.log(employees[employee]);
//     }
// }

// // PROCESS USING ES2015 FOREACH FUNCTION
// employees.forEach((employee) => { //callback function
//     console.log(employee);
// });

// // PROCESS USING ES6 FOR/OF LOOP
// for (let employee of employees) {
//     console.log(employee);
// }

// employees.push('Frank');

// console.log(employees.indexOf('Zak'));

// console.log(employees.lastIndexOf('Zak'));

// console.log(employees.indexOf('Jim'));

// name = 'Zak';

// if (employees.indexOf(name) >= 0) {
//     console.log('Found');
// } else {
//     console.log('Not Found');
// }

// console.log(employees.sort());
// console.log(employees.reverse());

let yearsWithCompany = [5, 7, 10, 12, 15, 20];

let seniority = yearsWithCompany.find((value, index, array) => {
    return value > 10;
});

// let seniority = yearsWithCompany.find(() => true);  //my own test

console.log(seniority);

// let newEmployeesArray = employees.concat(yearsWithCompany);

// console.log(newEmployeesArray);

// let newEmployeesJoin = employees.join(' | ');

// console.log(newEmployeesJoin);


// let employees2 = [
//     "Sally", 5,
//     "Zak", 7,
//     "Mark", 10,
//     "Fred", 12,
//     "Pepe", 15,
//     "Sue", 20,
//     ];

// let seniority = employees2.filter(item => {
//     return typeof item === 'number';
// });

// let seniority = employees2.filter(item => {
//     return parseInt(item) > 10;
// });

// let seniority = employees2.every(item => {
//     return typeof item === 'number';
// });

// let seniority = employees2.some(item => {
//     return typeof item === 'number';
// });


// console.log(seniority);
// console.log(seniority.toString());
// console.log(Array.isArray(employees2));

// REST OPERATOR DEMO
// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// SPREAD OPERATOR DEMO
// const sum = (x, y, z) => {return x + y + z};
// const numbers = [1, 2, 3];
// console.log(sum(numbers));

const sum = (x, y, z) => {return x + y + z};
const numbers = [1, 2, 3];
console.log(sum(...numbers));               // 6
