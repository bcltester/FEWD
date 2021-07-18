// CLOSURE EXAMPLE

// const clickCounter = function() {
//     let count = 0;
//     const counter = function () {
//         count++;
//         console.log(`${this.id} count is ${count}`);
//     }
//     return counter;
// };

// window.addEventListener('load', () => {
//     document.getElementById('button1').addEventListener('click',clickCounter());        
//     document.getElementById('button2').addEventListener('click',clickCounter());        // These two are separate function calls and thus separate instances of function which creates two separate instances of count variable which is how the counts stay separate.
// });


// CALLBACK EXAMPLE

// const calculateSalesTax = function(amount, taxRate, getTaxableAmount) {
//     // set default taxable amount
//     let taxable = amount;

//     // check to make sure callback exists and is a function
//     if (getTaxableAmount && typeof getTaxableAmount === 'function') {
//         taxable = getTaxableAmount(amount);         // This is where the amount argument is passed into the getTaxableAmount callback
//     }
//     let tax = taxable * taxRate;
//     return tax
// };

// const getTaxableAmount = function(amount) {
//     return amount * .90;
// };

// let tax = calculateSalesTax(100, .08);
// let taxWithDiscount = calculateSalesTax(100, .08, getTaxableAmount);

// console.log(tax);
// console.log(taxWithDiscount);



// ADVANCED CALLBACK EXAMPLE

// const calculateSalesTax = function(amount, taxRate, getTaxableAmount) {
//     // set default taxable amount
//     let taxable = amount;

//     // check to make sure callback exists and is a function
//     if (getTaxableAmount && typeof getTaxableAmount === 'function') {
//         taxable = getTaxableAmount(amount);         // This is where the amount argument is passed into the getTaxableAmount callback
//     }
//     let tax = taxable * taxRate;
//     return tax
// };

// const exemptFood = function(amount) {
//     let total = amount, item;
//     if (Array.isArray(amount)) {
//         total = 0;
//         for (let i = 0; i < amount.length; i++) {
//             item = (amount[i].type === 'food') ? 0 : amount[i].total;
//             total = total + item;
//         }
//     }
//     return total;
// };

// const items = [{type: 'food', total: 35.00}, {type: 'clothing', total: 35.00}, {type:'pet supplies',total:45.00}];
// let tax = calculateSalesTax(100, .08, exemptFood);
// let itemized = calculateSalesTax(items, .08, exemptFood);
// console.log('Tax: ' + tax + '\nItemized Tax: ' + itemized);


// RECURSIVE EXAMPLE - CALCULATE FACTORIAL
// FIRST, A TRADITIONAL WAY TO CALCULATE FACTORIAL (USING CLASSIC 'FOR' LOOP):

// function factor(factorial) {
//     let result = 1;
//     for (let count = factorial; count > 1; count--) {
//         result *= count;
//     }
//     return result;
// }
// console.log(factor(6));

// FACTORIAL VIA RECURSIVE FUNCTION

// function factor(factorial) {
//     if (factorial <= 1) {
//         return 1;
//     } else {
//         return (factorial * factor(factorial - 1));
//     }
// }
// console.log(factor(6));

// GENERATOR FUNCTIONS

function * generatorFunction() {
    console.log('This will be executed first.');
    yield 'First yield';
    console.log('This will be executed second.');
    yield 'Second yield';
    return "You've ended the execution of this generator.";
}

const gen = generatorFunction();
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function * generateID() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const gen2 = generateID();
for (let i = 1; i <= 10; i++) {
    console.log(gen2.next().value);
}