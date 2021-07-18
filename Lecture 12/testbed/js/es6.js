// ES6 SYNTAX
console.log("ES6 code:");
console.log("---------------------------------------------------");
console.log("");

// CREATE A USER-DEFINED OBJECT

class Dog {
    constructor(name, breed, color) {
        // PROPERTIES
        // Properties set in constructor are not publically accessible
        this._name = name;
        this._breed = breed;
        this._color = color;
        this._age = 0;

        console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
        }

    // METHODS
    // Methods are defined without 'this', i.e. not this.bark =, but bark =
    // Methods also must be outside of the constructor
    bark = function() {
        console.log(`${this._name} the ${this._color} ${this._breed} has barked!`);
    }

    // Static Methods available in ES6 classes. Static methods can only be called on the class itself, not an instance of that class.
    static run = function() {
        // console.log(`${this} ran around the block!!!`); // Doesn't make sense because 'this' refers to the entire class Dog block.
        return new this('Chewy', 'Sphinx', 'red');
    }    

    // PRIVATE MEMBERS: PROPERTIES AND METHODS
    // Everything that I've read says that you cannot define private members in JavaScript. It's being experimented with Stage 3 of JavaScript using a #.

    // ENCAPSULATION: USING GETTERS AND SETTERS
    get _moniker() {
        return `${this._name} the ${this._color} ${this._breed}`;
    }

    set _moniker(str) {
        let arr = str.split(' ');
        this._name = arr[0];
        this._color = arr[2];
        this._breed = arr[3];
    }

}

// INSTANTIATE A NEW INSTANCE OF THAT OBJECT => SAME AS ES5

const dog1 = new Dog('Muffy', 'laborador', 'black');
dog1.bark();
const test = Dog.run();  
// dog1.run();     // dog1.run is not a function because it's a static method
console.log(dog1._breed);   // confirms that JS class object properties are public by default

console.log(dog1._moniker);
dog1._moniker = 'Genoa the brown poodle';
console.log(dog1._moniker);
dog1.bark();

// INHERITANCE

class Machine {
    constructor(make, model) {
        this._make = make;
        this._model = model;
        this._miles = 10;
    }
    drive = function(miles) {
        this._miles += miles;
        console.log(`Your ${this._doors} door ${this._make} ${this._model} has driven ${this._miles} miles.`);
    }
}

class Robot extends Machine {   // subclass gets all the functions of the parent Class (in this case 'drive')
    constructor(make, model, doors) {
        super(make, model);     // super calls the parent Class's constructor function
        this._doors = doors;
    }
}

const myRobot = new Robot('Sony', 'Aibo', 0);
myRobot.drive(30);