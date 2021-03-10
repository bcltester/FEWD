// GLOBAL VARIABLES
let monthlyRate;
let months;
let futureValue;
let monthlyInterest;
let rate;
let investment;
let years;
let output;
let calculate;

// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

investment  = $('investment');
rate        = $('rate');
years       = $('years');
output      = $('output');
calculate   = $('calculate');

// CALCULATE THE FUTURE VALUE
function calculateInvestment(investment, rate, years) {
    monthlyRate     = rate / 12 / 100;
    months          = years * 12;
    futureValue     = investment;

    for (let i = 1; i < months; i++) {
        monthlyInterest     = futureValue * monthlyRate;
        futureValue         += monthlyInterest;
    }

    return futureValue;
}

// GET THE VALUES OF THE DOM ELEMENTS, CALCULATE, AND DISPLAY RESULT
calculate.addEventListener('click', () => {
    // GET THE VALUES FROM THE 3 TEXT BOXES
    investment  = parseFloat(investment.value);
    rate        = parseFloat(rate.value);
    years       = parseInt(years.value);
    // CALCULATE THE INVESTMENT
    futureValue = calculateInvestment(investment, rate, years);
    // DISPLAY THE RESULT
    output.innerHTML = `Future value: $${futureValue.toFixed(2)}`;
});