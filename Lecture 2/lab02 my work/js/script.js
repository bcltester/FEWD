let milesDriven = prompt('How many miles did you drive?');

let gallons = prompt('How many gallons of fuel does your call hold?');

let milesPerGallon = milesDriven / gallons;

document.write(`Your car gets ${parseFloat(milesPerGallon)} miles per gallon.`); //doesn't shorten the number of digits beyond the decimal
document.write(`Your car gets ${milesPerGallon.toFixed(2)} miles per gallon.`);