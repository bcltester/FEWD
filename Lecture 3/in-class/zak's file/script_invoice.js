let total = prompt('Enter the grand total');
let customerType = prompt('Are you a wholesale or retail customer?');
let discount;

if (customerType === 'wholesale') {
    if (total < 500) {
        discount = .05;
    } else if (total < 750) {
        discount = .1;
    } else if (total < 1000) {
        discount = .2;
    } else {
        discount = .3;
    }
} else if (customerType === 'retail') {
    if (total < 1000) {
        discount = .1;
    } else {
        discount = .05;
    }
} else {
    customerType = 'unknown';
    discount = 0;
}

document.write(`You are a ${customerType} customer. Your discount is ${discount}.`);