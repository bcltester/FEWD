// // ES5

// function Cat(name, breed, color) {
//     this._name = name;                  // Accessible via constructor
//     this._breed = breed;                // Accessible via constructor                              // Zak likes to use underscore characters for properties
//     this._color = color;                // Accessible via constructor
//     this._age = 0;                      // This is public and can be accessed publicly
//     this.create = function() {
//         console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
//     }
//     this.age = function() {
//         this._age++;
//         console.log(`${this._name} has aged by one year. He is now ${this._age}.`);
//     }
// }

// function privateCat(name, breed, color) {
//     this._name = name;                  // Accessible via constructor
//     this._breed = breed;                // Accessible via constructor                              
//     this._color = color;                // Accessible via constructor
//     let _age = 0;                      // private
//     this.create = function() {
//         console.log(`${this._name} the ${this._color} ${this._breed} has been created. He is now ${age()} years old.`);
//     }
//     let age = function() {      // private method
//         _age++;
//         return _age;
//         console.log(`${this._name} has aged by one year. He is now ${_age}.`);
//     }
// }

// const cat1 = new Cat('Nixon', 'Bengal', 'Snow Mink');
// cat1.create();

// const cat2 = new Cat('Reagan', 'Bengal', 'Grey');
// cat2.create();

// cat1.age();

// // WAY TO CREATE CLASS THAT ZAK DOES NOT PREFER
// // const Wolf = function() {

// // }

// // ES6

// class Dog {
//     constructor(name, breed, color) {
//         this._name = name;                  
//         this._breed = breed;                
//         this._color = color;                
//         this._age = 0;
//         this._mood = 5;
//         this._hungry = 5;                       
//         console.log(`${this._name} is a ${this._color} ${this._breed}.`);
//     }
//     create = function() {
//         console.log(`${this._name} the ${this._color} ${this._breed} has been created. He is ${this.age} years old.`);
//     }
//     // age = function(aged) {
//     //     this._age += aged;
//     //     console.log(`${this._name} has aged ${aged} years. It is now ${this._age} years old.`);
//     // }
//     get age()             {return this._age;}
//     set age(newAge)       {this._age = newAge;}

//     hungry = function() {
//         this._hungry--;
//         if (this._hungry <= 3) {
//             console.log(`${this._name} is hungry and needs to be fed.`);
//         }
//     }
// }
// const dog1 = new Dog('Bubba', 'Retriever', 'Blue Merle');
// dog1.create();
// // dog1.age(12);
// dog1.hungry();
// dog1.hungry();
// console.log(dog1._hungry);
// dog1.hungry();
// console.log(dog1._hungry);

// dog1.age = 5;
// dog1.create();

// Fake a Namespace in JavaScript (but didn't get Zak's syntax right)

// const Animal = {
//     Cat: {
//         "tail": true;
//     },
//     Dog: {
//     }
// };

// console.log(Animal.Cat.tail);



// INHERITANCE
// ES5

// function Animal (name, breed, color) {
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
//         console.log(`The cat has meowed!`);
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



// // ES6

// class Animal {
//     constructor (name, breed, color) {
//         this._name = name;
//         this._breed = breed;
//         this._color = color;
//     }
//     create = function() {
//         console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
//     }
//     speak = function(animal) {
//         console.log(`${animal ? 'The dog has barked' : 'The cat has meowed'}`);     // use a switch statement here if you have more than two animals
//     }
// }

// class Cat extends Animal {
//     constructor(_name, _breed, _color) {
//         super(_name, _breed, _color);       // "make these properties from the parent class available in the Cat class"
//     }
//     meow = function () {
//         console.log(`${this._name} has meowed!`);
//     }
// }

// class Dog extends Animal {
//     constructor(_name, _breed, _color) {
//         super(_name, _breed, _color);       // "make these properties from the parent class available in the Cat class"
//     }
//     bark = function () {
//         console.log(`${this._name} has barked!`);
//     }
// }
// const dog1 = new Dog('River', 'Aussie', 'Blue Merle');
// dog1.create();
// // dog1.bark();
// dog1.speak(true);

// const cat1 = new Cat('Nixon', 'Bengal', 'Pink');
// cat1.create();
// // dog1.bark();
// cat1.speak(false);


// OBJECT LITERAL SYNTAX (Note: I didn't write down all of this)
const Cat = {
    age: 5,
    init: function(name, breed, color) {                  // You can call it
        return `${name} the ${color} ${breed} has been created. He is ${this.age} years old.`;
    }
}
Cat.hungry = false;
Cat.age += 1;
console.log(Cat.create('Nixon', 'Bengal', 'Snow Mink'));


const Animal = {
    age: 5,
    create: function(name, breed, color) {
        return `${name} the ${color} ${breed} has been created. He is ${this.age} years old.`;
    }
}


// NAMESPACES
const Animal = {
    Cat: {

    },
    Dog: {

    },
    Bird: {

    }
}

