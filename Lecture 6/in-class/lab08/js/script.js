window.addEventListener('load', main);

function main() {
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

    output      = $('futurevalue');
    calculate   = $('calculate');

    // CALCULATE THE FUTURE VALUE
    function calculateInvestment(investment, rate, years) {
        monthlyRate = rate / 12 / 100;
        months = years * 12;
        futureValue = investment;
        for (let i = 0; i < months; i++) {
            futureValue = futureValue * (1 + monthlyRate);
        };
        return futureValue;
    }

    // GET THE VALUES OF THE DOM ELEMENTS, CALCULATE, AND DISPLAY RESULT
    calculate.addEventListener('click', () => {
        investment  = $('investment').value;
        rate        = $('rate').value;
        years       = $('years').value;

        //CALCULATE THE INVESTMENT
        futureValue = parseFloat(calculateInvestment(investment, rate, years));

        //DISPLAY THE RESULTS
        output.innerHTML = `Future value: $${futureValue.toFixed(2)}.`;

    }); 

}