// VIEW EMPLOYEES
function view(employees) {
    let counter = 1;
    employees.forEach(element => {
        console.log(`${counter}. ${element}`);
        counter++;
    });
    console.log('');
}

// ADD EMPLOYEE

function add(employees) {
    let employee = prompt("Enter employee's name:");
    employees.push(employee);
    console.log(`${employee} was added.`);
    console.log('');    
}

// DELETE EMPLOYEE

function del(employees) {
    let num = prompt("Enter the number of the employee to delete:");
    if (!num < 1 || !num > employees.length) {
        let employee = employees.splice(num - 1, 1);
        console.log(`${employee} was deleted.`);
        console.log('');    
    } else {
        alert('Invalid employee number.');
    }

}

// INITIALIZE APP

function init() {
    console.log('Employee Management Application');
    console.log('-------------------------------');
    console.log('COMMAND MENU');
    console.log('view - View all employees');
    console.log('add - Add an employee');
    console.log('del - Delete an employee');
    console.log('exit - Exit application');
    console.log('');

    let employees = [
        'Sally Smith',
        'Zak Ruvalcaba',
        'Fred Franklin',
        'John Doe',
        'Sue Wedge'
    ];

    while(true) {
        let command = prompt('Enter command');
        if (command !== null) {
            command = command.toLowerCase();
            if (command === 'view') {
                view(employees);
            } else if (command === 'add') {
                add(employees);
            } else if (command === 'del') {
                del(employees);
            } else if (command === 'exit') {
                break;
            } else {
                console.log("Please enter a valid command.");
            }


        } else {
            console.log('Please enter a command.');
        }
    }
    console.log('Application terminated.');

}
init();