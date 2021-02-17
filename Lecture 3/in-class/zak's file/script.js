// Simple if Statement
// let num = prompt('Enter a number between 1 and 10');
// if (num === '5') {
//     document.write('You guessed the right number!');
// }

// Simple if else Statement
// let num = prompt('Enter a number between 1 and 10');
// if (num === '5') {
//     document.write('You guessed the right number!');
// } else {
//     document.write('You guessed the WRONG number!');
// }

// Single Statement Suite
// let num = prompt('Enter a number between 1 and 10');
// (num === '5') ? document.write('You guessed right!') : document.write('You guessed WRONG!');

// else if Statement
// let grade = Number(prompt('Enter the student\'s grade'));
// if (grade >= 90) {
//     document.write('The student received an A');
// } else if (grade >= 80) {
//     document.write('The student received an B');
// } else if (grade >= 70) {
//     document.write('The student received an C');
// } else if (grade >= 60) {
//     document.write('The student received an D');
// } else {
//     document.write('The student failed the course');
// }

// switch Statement
let grade = prompt('Enter the student\'s grade');
switch (grade) {
    case 'A':
        document.write('The student received an A');
        break;
    case 'B':
        document.write('The student received an B');
        break;
    case 'C':
        document.write('The student received an C');
        break;
    case 'D':
        document.write('The student received an D');
        break;
    default:
        document.write('The student failed the course');
}