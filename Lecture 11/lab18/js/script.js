function show(employees) {
    let i = 1;
    for (let employee of employees) {
        console.log(`${i}. ${employee}`);
        i++;
    }
    console.log('');    // Just to space this off from next command

}

function add(employees) {
    let name = prompt('Enter the employee\'s name');
    let title = prompt('Enter the employee\'s title');
    employees.push(`${name} (${title})`);
    console.log(`${name} was successfully added.`);
    console.log('');    // Just to space this off from next command
}

function del(employees) {
    let num = parseInt(prompt('Enter employee number to delete'));
    if (num < 1 || num > employees.length) {
        alert('Invalid employee number.');
    } else {
        let employee = employees.splice(num-1, 1);
        console.log(`${employee} was successfully deleted.`);
        console.log('');
    }
}

function main() {
    console.log("The Employee Management Application");
    console.log("-----------------------------------");
    console.log("COMMAND MENU");
    console.log("show - Show all employees");
    console.log("add - Add an employee");
    console.log("del - Delete an employee");
    console.log("exit - Exit application");
    console.log("-----------------------------------");
    console.log("");    // Just to space this off from next command

    let arrEmployees = [];

    fetch('data/employees.json')
        .then( response => response.json() )
        .then( data => {
            for (let employee of data.employees) { // data.employees because the json file has a root object of "employees"
                arrEmployees.push(`${employee.name} (${employee.title})`);
            }
            while(true) {
                let command = prompt('Enter command');
                if (command !== null) {
                    command = command.toLowerCase();
                    if (command === 'show') {
                        show(arrEmployees);
                    } else if (command === 'add') {
                        add(arrEmployees);
                    } else if (command === 'del') {
                        del(arrEmployees);
                    } else if (command === 'exit') {
                        break;
                    } else {
                        alert('Please enter a valid command.');
                    }

                } else {
                    alert("Please enter a command");
                }
            }

            console.log("The program has terminated.");




        })
        .catch( error => console.log(error.message) );

}

main();