let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt("Enter miles driven:"));
    gallons = parseFloat(prompt("Enter gallons of gas used:"));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {    //To account for the case where a string could be entered into the prompts
        mpg = miles / gallons;
        document.write(`Your MPG is ${mpg.toFixed(2)}.`);
    } else {
        alert("One or both entries are invalid.");
    }
    again = prompt("Do you want to continue using the MPG App? (y or n)", "y");
} while (again === 'y');