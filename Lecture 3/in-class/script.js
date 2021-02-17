
// // Simple if Statement
// let num = prompt("Enter a number between 1 and 10");
// num = Number(num);
// if (num === 5) {
//     //Conditional code if true
//     document.write("You guessed the right number.");
// } 

// // Simple if else Statement
// let num = prompt("Enter a number between 1 and 10");
// num = Number(num);
// if (num === 5) {
//     //Conditional code if true
//     document.write("You guessed the right number.");
// } else {
//     document.write("You guessed the wrong number.");
// }

// // single statement suite
// let num = prompt("Enter a number");
// (num === '7') ? document.write('Got it') : document.write('No way');

// else if statement
// let grade = prompt('Enter your student\'s grade');
// grade = Number(grade);
// if (grade >= 90) {
//     document.write("The student received an A");
// } else if (grade >= 80) {
//     document.write("The student received a B");
// } else if (grade >= 70) {
//     document.write("The student received a C");
// } else if (grade >= 60) {
//     document.write("The student received a D");
// } else {
//     document.write("The student failed.");
// } 

// switch statement

let grade = prompt('Enter your student\'s grade');

switch (grade) {
    case 'A':
        document.write('The student received an A');
        break;
    case 'B':
        document.write('The student received a B');
        break;
    case 'C':
        document.write('The student received a C');
        break;
    case 'D':
        document.write('The student received a D');
        break;
    default:
        document.write('The student did not pass');
}
