// ES5
// function Animal(name, breed, color) {
//     this._name = name;
//     this._breed = breed;
//     this._color = color;
//     this.create = function() {
//         console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
//     }
// }
// function Cat() {
//     this.meow = function() {
//         console.log(`The cat has meowed!`);
//     }
// }
// function Dog() {
//     this.bark = function() {
//         console.log(`The dog barked!`);
//     }
// }
// Cat.prototype = new Animal('Nixon', 'Bengal', 'Snow Mink');
// Dog.prototype = new Animal('River', 'Aussie', 'Blue Merle');
// const cat1 = new Cat();
// cat1.create();
// cat1.meow();
// const dog1 = new Dog();
// dog1.create();
// dog1.bark();

// ES6
// class Animal {
//     constructor(name, breed, color) {
//         this._name = name;
//         this._breed = breed;
//         this._color = color;
//         // this._age = 0;
//     }
//     create = function() {
//         console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
//     }
//     speak = function(animal) {
//         console.log(`${animal ? 'The dog has barked' : 'The cat has meowed'}`);
//     }
//     // get age()       {return this._age}
//     // set age(newAge) {this._age = newAge}
//     // static hungry = function() {
//     //     console.log(`The dog is hungry and needs to be fed.`);
//     // }
// }
// class Cat extends Animal {
//     constructor(_name, _breed, _color) {
//         super(_name, _breed, _color);
//     }
// }
// class Dog extends Animal {
//     constructor(_name, _breed, _color) {
//         super(_name, _breed, _color);
//     }
// }
// const dog1 = new Dog('River', 'Aussie', 'Blue Merle');
// // dog1.age = 5;
// dog1.create();
// dog1.speak(1);
// // Dog.hungry();
// const cat1 = new Cat('Nixon', 'Bengal', 'Snow Mink');
// cat1.create();
// cat1.speak(0);

// OBJECT LITERAL SYNTAX
const Animal = {
    age: 5,
    init: function(name, breed, color) {
        return `${name} the ${color} ${breed} has been created. He is ${this.age} years old.`
    }
}
const Cat = Object.create(Animal, {
    type: {value: 'This is a cat.'}
});
Cat.hungry = false;
Cat.age += 1;
console.log(Cat.init('Nixon', 'Bengal', 'Snow Mink'));
console.log(Cat.type);
console.log(`The cat is ${Cat.hungry ? 'hungry' : 'not hungry'}.`);

// NAMESPACES
// const Animal = {
//     Cat: {
        
//     },
//     Dog: {

//     },
//     Bird: {

//     }
// }