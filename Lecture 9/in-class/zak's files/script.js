let employees = [
    'Sally', 5, true,
    'Zak', 7, true,
    'Mark', 10, true,
    'Fred', 12, true,
    'Pepe', 15, true,
    'Sue', 20, false
];

const sum = (x, y, z) => {
    return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers));	

// PROCESS USING TRADITIONAL FOR LOOP
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i]);
// }

// PROCESS USING ES5 FOR / IN LOOP
// for (let employee in employees) {
//     console.log(employees[employee]);
// }

// THE PROBLEM WITH USING ES5 FOR / IN LOOP
// Array.prototype.sayHello = () => {};
// for (let employee in employees) {
//     console.log(employees[employee]);
// }

// THE FIX FOR ES5 FOR / IN LOOP
// Array.prototype.sayHello = () => {};
// for (let employee in employees) {
//     if (employees.hasOwnProperty(employee)) {
//         console.log(employees[employee]);
//     }
// }

// PROCESS USING ES2015 FOREACH() FUNCTION
// employees.forEach(employee => {
//     console.log(employee);
// })

// PROCESS USING ES6 FOR / OF LOOP
// for (let employee of employees) {
//     console.log(employee);
// }