// A SIMPLE EXAMPLE THAT DEMONSTRATES A GENERATOR FUNCTION
// function * generatorFunction() {
//     console.log('This will be executed first.');
//     yield 'Hello ';
//     console.log('I will be printed after the pause');  
//     yield 'World!';
// }
// const gen = generatorFunction();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// A PRACTICAL EXAMPLE OF A GENERATOR FUNCTION
function * generateID() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}
const id = generateID();
console.log(id.next().value);
console.log(id.next().value);