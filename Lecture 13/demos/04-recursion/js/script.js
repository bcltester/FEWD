//CLASSIC LOOP: USING A NAMED FUNCTION DECLARATION
// factor = (factorial) => {
//     let result = 1;
//     for (let count = factorial; count > 1; count--) {
//         result *= count;
//     }
//     return result;
// }
// console.log(factor(6)); // 720

//CLASSIC LOOP: USING AN IIFE
// (function factor(factorial) {
//     let result = 1;
//     for (let count = factorial; count > 1; count--) {
//         result *= count;
//     }
//     console.log(result); // 720
// }(6));

//RECURSIVE FUNCTION: USING A NAMED FUNCTION DECLARATION
// factor = (factorial) =>{
//     if (factorial <= 0) {
//         return 1;
//     } else {
//         return (factorial * factor(factorial - 1));
//     }
// }
// console.log(factor(6)); // 720