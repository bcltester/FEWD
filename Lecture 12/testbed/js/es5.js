// OBJECT CONSTRUCTOR SYNTAX (AKA ES5 STYLE)
console.log("Object Constructor AKA ES5 code:");
console.log("---------------------------------------------------");
console.log("");

// CREATE A USER-DEFINED OBJECT
// simulates defining a class via defining a function 

function Cat(name, breed, color) {
// function itself serves as Contructor (method that executes immediately when class instantiated)
    // PROPERTIES
    this._name = name;
    this._breed = breed;
    this._color = color;
    this._age = 0;

    console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
    
    // METHODS ARE DEFINED USING NESTED FUNCTIONS
    this.meow = function () {
        console.log(`${this._name} the ${this._color} ${this._breed} has meowed!`);
    }

    // PRIVATE MEMBERS: PROPERTIES AND METHODS
    // Private Property
    let _mood = 5;

    // Private Method: only visible inside Cat class
    let hungry = function() {
        _mood -= 2;        
        // console.log(`${this._name} is extremely hungry.`);  // Doesn't work when called by .timeTravel method because it becomes a method within a method at which point the Execution context reverts back to Global Execution context meaning 'this' refers to 'window'.
        // console.log(this);        // This shows that 'this' is Window object.
    }

    // Public Function that references the Private Method
    this.timeTravel = function() {
        this._age++;
        hungry();
        console.log(`${this._name} is now ${this._age} years old.`);
        console.log(`${this._name} mood is now ${_mood}.`);        
    }

    // ENCAPSULATION: USING GETTERS AND SETTERS
    Object.defineProperty(this, "_catLabel", {
        get() {
            return `${this._name} the ${this._color} ${this._breed}`;
        },
        set(str) {
            let arr = str.split(' ');
            this._name = arr[0];
            this._color = arr[2];
            this._breed = arr[3];
        }

    });


}

// PUBLIC METHOD CREATION VIA ATTACHING METHOD TO OBJECT'S PROTOTYPE
// This is an example of modifying the prototype property of a constructor function — methods added to the prototype are then available on all object instances created from the constructor.

Cat.prototype.tinter = function(color) {
    this._color = color;
    console.log(`Now the color of this cat is ${this._color}`);
}
// a fairly common pattern for more object definitions is to define the properties inside the constructor, and the methods on the prototype. 



// INSTANTIATE A NEW INSTANCE OF THAT OBJECT => SAME AS ES6

const cat1 = new Cat('Jack', 'tabby', 'orange');
cat1.meow();
// console.log(cat1._mood);    //undefined
// cat1.hungry();      // cat1.hungry() is not a function (because Private method)
cat1.timeTravel();
cat1.tinter('pink');
cat1.meow();

console.log(cat1._catLabel);
cat1._catLabel = 'Smokey the gray tabby';
console.log(cat1._catLabel);
cat1.meow();

// INHERITANCE

const Vehicle = function(make, model) {
    this._make = make;
    this._model = model;
    this._miles = 0;
}
Vehicle.prototype.drive = function(miles) {
    this._miles += miles;
    console.log(`Your ${this._doors} door ${this._make} ${this._model} has driven ${this._miles} miles.`);
}

const tractor = new Vehicle('Kubota', 'Bulldozer');
tractor.drive(39);

function Car (doors) {
    this._doors = doors;
}

Car.prototype = new Vehicle('Chevy', 'Camaro');

const myCar = new Car(2);
myCar.drive(2000);

// const forklift = new Vehicle('Caterpillar', 'Forklift');
// forklift.drive(48);