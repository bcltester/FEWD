let message = "The sum of the two numbers is:";    //global variable to the module as a whole, but is private (cannot be accessible outside of the module)

// const add = (x, y) => x + y;  //shorter way
export const add = (x, y) => {
    let sum = x + y;        //local variable contained in this function. private.
    return `${message} ${sum}`;
};

//alternatively:
/*
const add = (x, y) => {
    return x + y;
};
export {add}; 
*/