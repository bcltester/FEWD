let num = window.prompt('Guess a number between 1 and 10');     //prompt method of the window object

// Using an alert box
// alert('You guessed the number ' + num);

// Using confirm
con = confirm('Tell me yes');
con2 = confirm('Tell me no');

window.console.log('You first said ' + con + ' and then you said ' + con2); //gives output: "You first said true and then you said false"


window.console.log('You guessed the number ' + num);
window.console.info('You guessed the number ' + num);
window.console.warn('You guessed the number ' + num);
window.console.error('You guessed the number ' + num);

window.document.write('You guessed the number ' + num);

//access members of objects by using dot syntax

let arrNumbers = [5, 10, 20]; // [5, 10, 20] is an array literal expression.  let arrNumbers = [5, 10, 20] is a complex/variable expression 


//let strNum = prompt('Guess a number between 20 and 30');
//let message - 'This is a sentence of text.\n

let message = "Welcome to the Javascript course.";

//three ways to print a string
console.log(`Zak is the instructor. ${message}`);  //using Template Literal
console.log("Zak is the instructor.", message);
console.log("Zak is the instructor. " + message);



let car = new Object();
car.color = "red";
car.manufacturer = "Chevy";
car.model = "Camaro";
console.log(`The ${car.color} ${car.manufacturer} ${car.model} just drove off!`);
console.log("The " + car.color + " " + car.manufacturer + " " + car.model + " just drove off!");


if (num == 10) {
    alert('You guessed it!');
} // coercion -> this 10 is coerced to a string

if (num === '10') {   //Triple equal sign is Value AND Data Type.  Zak ALWAYS uses triple equal sign
    alert('You are the best!');
}

let myNum = 10;
myNum--;
alert(String(myNum));