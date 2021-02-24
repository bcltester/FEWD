// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
rate = parseFloat(prompt('Enter rate as xx.x'));
years = parseInt(prompt('Enter the number of years'));

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue *= (1 + rate/100);
}

// DISPLAY RESULT
document.write(`Your original investment was: $${investment}.<br>`);
document.write(`The rate: ${rate}.<br>`);
document.write(`The years invested: ${years}.<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}.<br>`);
