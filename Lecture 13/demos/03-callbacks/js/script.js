// BASIC CALLBACK EXAMPLE
// const calculateSalesTax = function (amount, taxRate, getTaxableAmount) {
//     // set default taxable amount
//     let taxable = amount;
//     // check to make sure callback exists and is a function
//     if (getTaxableAmount && typeof getTaxableAmount === 'function') {
//         taxable = getTaxableAmount(amount);
//     }
//     // calculate and return tax
//     let tax = taxable * taxRate;
//     return (isNaN(tax)) ? 'Invalid calculation.' : tax;
// };

// // Code that uses the utility function with no callback
// let tax = calculateSalesTax(100, 0.08); // tax = 8

// // Code that uses the utility function with a callback
// const getTaxableAmount = function (amount) {
//     return amount * 0.90; // 10 percent discount before tax
// };
// let tax = calculateSalesTax(100, 0.08, getTaxableAmount); // tax = 8
// console.log(tax);

// // ADVANCED CALLBACK EXAMPLE
// const calculateSalesTax = function (amount, taxRate, exemptFood) {
//     // set default taxable amount
//     let taxable = amount;
//     // check to make sure callback exists and is a function
//     if (exemptFood && typeof exemptFood === 'function') {
//         taxable = exemptFood(amount);
//     }
//     // calculate and return tax
//     let tax = taxable * taxRate;
//     return (isNaN(tax)) ? 'Invalid calculation.' : tax;
// };

// const exemptFood = function (amount) {
//     let total = amount, item; // set default value of total
//     if (Array.isArray(amount)) {
//         total = 0;
//         for (let i = 0; i < amount.length; i++) {
//             item = (amount[i].type === 'food') ? 0 : amount[i].total;
//             total = total + item;
//         }
//     }
//     return total;
// };

// const items = [
//     {type: 'food', total: 35.00},
//     {type: 'clothing', total: 35.00},
//     {type: 'pet supplies', total: 45.00}
// ];

// //Code that uses the utility with a callback and a numeric first argument
// let tax = calculateSalesTax(100, 0.08, exemptFood); // tax = 8
// //Code that uses the utility with a callback and an array as the first argument
// let itemized = calculateSalesTax(items, 0.08, exemptFood); // tax = 6.4

// console.log(tax);
// console.log(itemized);