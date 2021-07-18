// Reference: https://scotch.io/@alZami/understanding-this-in-javascript

// 'this' refers to Execution context.
console.log("Exploration of 'this':");
console.log("---------------------------------------------------");
console.log("");
console.log(this);      // Global Execution context, Global scope. Global object is 'window'. Therefore 'this' refers to the Global Execution context object which is 'window'

// Normally, when a function is called, the scope will become the local function scope but the Execution context still remains Global. So 'this' will still refer to the 'window' object.
// However, if the function is bound to an object, then the Execution context will be that bound object, so 'this' refers to the bound object.

let person = {          // JavaScript engine finds 'person' Object and maps it to memory. Then it finds an invokation of sayName method of 'person' object. sayName method is invoked under the context of person object, which means they are bound together. Therefore the Execution context is now the bound 'person' object. Which means that 'this' refers to the person.object.
    username: 'Rami',

    sayName: function() {
        console.log(this);
        console.log(this.username);
        function inner() {
            console.log(this);      //when javascript engine maps internal variables and function of an object to memeory, it doesn't bind the context object to the functions that are declared inside a particular object method. That means person object is not boudn with the inner function. As a result inner function fall subject to default binding which is global object.
        }
        inner();
    }
};

person.sayName();

// After function execution is over, JavaScript jumps back to the Global scope. 'this' will refer back to the 'window' object.

console.log(this);
