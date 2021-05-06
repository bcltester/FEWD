// ES5
function Cat(name, breed, color) {
    this._name = name;
    this._breed = breed;
    this._color = color;
    let _age = 0;
    let age = function() {
        _age++;
        return _age;
    }
    this.create = function() {
        console.log(`${this._name} the ${this._color} ${this._breed} has been created. He is ${age()} years old.`);
    }
}
const cat1 = new Cat('Nixon', 'Bengal', 'Snow Mink');
cat1.create();
const cat2 = new Cat('Reagan', 'Bengal', 'Grey');
cat2.create();

// // ES6
class Dog {
    constructor(name, breed, color) {
        this._name = name;
        this._breed = breed;
        this._color = color;
        this._age = 0;
    }
    create = function() {
        console.log(`${this._name} the ${this._color} ${this._breed} has been created. He is ${this.age}`);
    }
    get age()       {return this._age}
    set age(newAge) {this._age = newAge}
    static hungry = function() {
        console.log(`The dog is hungry and needs to be fed.`);
    }
}
const dog1 = new Dog('River', 'Aussie', 'Blue Merle');
dog1.age = 5;
dog1.create();
Dog.hungry();

localStorage.hits += 1;
console.log(localStorage.hits);