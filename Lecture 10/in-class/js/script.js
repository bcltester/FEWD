let arrEmployees = [
    ['Zak', 10],
    ['Sally', 14],
    ['Mark', 8],
    ['Pepe', 11]
    ];


// sessionStorage.setItem('employees', arrEmployees);  //doesn't store arrEmployees as an array properly
sessionStorage.setItem('employees', JSON.stringify(arrEmployees));

// arrNewEmployees = sessionStorage.getItem('employees');  //doesn't retrieve an array properly
arrNewEmployees = JSON.parse(sessionStorage.getItem('employees'));

for (let emp of arrNewEmployees) {
    console.log(`${emp[0]}: ${emp[1]}`);
}