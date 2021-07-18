// OBJECT LITERAL SYNTAX
console.log("Object Literal code:");
console.log("---------------------------------------------------");
console.log("");

// CREATE A USER-DEFINED OBJECT
// Note that this is not a Class, but more like an instance

const Bird = {
    _age: 0,
    _eggColor: 'red',
    // METHODS
    displayInfo: function(name, breed, color) {
        return `${name} is a ${color} ${breed} that is ${this._age} years old.`;
    },

    // ENCAPSULATION: USING GETTERS AND SETTERS
    get _composition() {
        return `Bird is ${this._eggColor} and ${this._age} years old.`;
    },
    set _composition(str) {
        [this._age, this._eggColor] = str.split(' ');
    }

}

console.log(Bird._composition);
Bird._composition = "33 brownish";
console.log(Bird._composition);

// Alternative way to define an object literal:
const Bird2 = {};

// Populate the object literal with properties and methods:
// PROPERTIES
Bird2._name = 'Stumpy';
Bird2._attitude = 'Aggressive';
// METHODS
Bird2.talk = function(word) {
    return `${this._name} is the duck with no ${word}.`;
}
// Remove members
delete Bird2._attitude;


// A third way to define an object literal:
const Bird3 = new Object();
// Then use the same ways as above to populate the object literal with properties and methods

console.log(Bird.displayInfo('Jimmy', 'Hawk', 'Brown'));
console.log(Bird._age);
console.log(Bird2._name);
console.log(Bird2.talk('luck'));

// PRIVATE MEMBERS: OBJECT LITERAL PROPERTIES ARE ALWAYS PUBLIC
// So you can override properties outside of the object like:
Bird2._name = 'Buya';
console.log(Bird2.talk('puck'));


// UNIQUE TO OBJECT LITERALS - NESTING (SIMULATES NAMESPACES)
const Animal = {
    Chicken: {
        name: 'Kentucky',
        color: 'red',
        legs: 2
    },
    Wolf: {
        name: 'Verine',
        color: 'gray',
        legs: 4
    },
    Tiger: {
        name: 'Tony',
        color: 'orange',
        legs: 4
    }
}

console.log(Animal.Wolf.color);
console.log(Animal.Wolf.name);
console.log(Animal.Wolf.legs);

// INSTANTIATE A NEW INSTANCE OF THAT OBJECT
// See note above: this is an instance, not a class 



// INHERITANCE
const Parrot = Object.create(Bird2);
console.log(Bird2.talk('fudge'));
console.log(Parrot.talk('hair'));

// Inheritance and set new property value at the same time
const Crow = Object.create(Bird, {
    _age: {value: 14}
});
console.log(Crow.displayInfo('Braven', 'Vilecrow', 'Black'));