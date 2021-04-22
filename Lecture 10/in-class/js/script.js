/*
let car = 'CHEVY';
console.log(car.toLowerCase());

car = '              Chevy               ';
console.log(car.trim().toUpperCase());

car = 'Chevy';
console.log(car.charAt(4));

console.log(car.charCodeAt(4));

let model = 'Camaro';
console.log(car.concat(model));

let phrase = 'My daily driver is a Chevy Camaro. I also own a Chevy Suburban.';
console.log(phrase.indexOf('Chevy'));
console.log(phrase.lastIndexOf('Chevy'));

// uses Regular Expressions
car = 'Let\'s turn the Honda on and go for a ride soon!';
console.log(car.match(/on/g));          // /g is a modifier

// replace method
car = 'My daily driver is a Honda Civic.';
console.log(car.replace('Honda Civic', 'Dodge Aerostar'));

console.log(car.search('Honda'));
console.log(car.search(/Honda/g));

console.log(car.slice(0, 5));

console.log(car.split(' '));

car = 'Let\'s turn the Honda on and go for a ride soon!';
console.log(car.match(/[^on]/g));

car = 'My zip code is 92115';
console.log(car.match(/\d/g));
console.log(car.match(/\D/g));
console.log(car.match(/\d{5}/g));

let zip = 'Your zip code is 92115-1115.';
console.log(zip.match(/\d{5}(-\d{4})?/));
*/

/*
document.querySelector('#submit').addEventListener('click', () => {
    let zip = document.querySelector('#zip').value;
    let pattern = new RegExp(/\d{5}/g);

    if (pattern.test(zip)) {
        console.log("That is a valid zip code.");
    } else {
        console.log("That is not valid.");
    }
});
*/

let d = new Date();
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getMonth() + 1);
console.log(d.toDateString());
console.log(d.toString()); // not abbreviated version of .toDateString
console.log(d.toTimeString()); // just the time piece