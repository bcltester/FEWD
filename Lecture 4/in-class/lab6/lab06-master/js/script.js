/*eslint-env browser*/

//GLOBAL VARIABLES
var futureValue;
var investment;
var rate;
var years;
var i;

//COLLECT VALUES FROM USER
investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
rate = parseFloat(window.prompt("Enter interest rate as xx.x"));
years = parseInt(window.prompt("Enter number of years"), 10);

//CALCULATE FUTURE VALUE
futureValue = investment;
for (i = 1; i <= years; i += 1) {
    futureValue = futureValue + (futureValue * rate / 100);
}

//DISPLAY RESULT
window.document.write("Investment amount: $" + investment + "<br>");
window.document.write("Interest rate: " + rate + "%<br>");
window.document.write("Years: " + years + "<br>");
window.document.write("Future value: $" + parseInt(futureValue, 10));