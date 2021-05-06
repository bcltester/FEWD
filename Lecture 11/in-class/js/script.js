// //
// // LOAD XML DATA
// //

// // CREATE A NEW INSTANCE OF THE XHR OBJECT
// const xhr = new XMLHttpRequest(); 
// console.log(xhr);

// // OPEN A CONNECTION TO A FILE
// xhr.open('GET', 'data/team.xml');       // note that for Zak's PC version, he used '/data/team.xml'

// // SEND THE CONNECTION
// xhr.send();

// // HANDLE THE STATE CHANGE OF THE OBJECT
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let xml = xhr.responseXML;
//             console.log(xml);

//             let team = xml.getElementsByTagName('teammember');
            
//             for (let i = 0; i < team.length; i++) {
//                 document.body.innerHTML +=
//                 `<p>
//                 ${xml.getElementsByTagName('name')[i].childNodes[0].nodeValue}<br>
//                 ${xml.getElementsByTagName('title')[i].childNodes[0].nodeValue}<br>
//                 ${xml.getElementsByTagName('bio')[i].childNodes[0].nodeValue}
//                 </p>`
//             }
//         }
//     }
// };
// xhr.onerror = (e) => {
//     console.log(e.message);
// }


// //
// // LOAD JSON DATA
// //

// // CREATE A NEW INSTANCE OF THE XHR OBJECT
// const xhr = new XMLHttpRequest(); 

// // SET RESPONSETYPE AS JSON
// xhr.responseType = 'json';

// // OPEN A CONNECTION TO A FILE
// xhr.open('GET', 'data/team.json');          // note that for Zak's PC version, he used '/data/team.xml'

// // SEND THE CONNECTION
// xhr.send();

// // HANDLE THE STATE CHANGE OF THE OBJECT
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // GET THE RETURNED JSON DATA
//             let team = xhr.response;

//             // ITERATE THROUGH DATA            
//             for (let employee of team) {
//                 // DISPLAY THE RESULTS ON THE PAGE
//                 document.body.innerHTML +=
//                 `<p>
//                 <strong>${employee.name}</strong><br>
//                 ${employee.title}<br>
//                 ${employee.bio}
//                 </p>`
//             }
//         }
//     }
// };
// xhr.onerror = (e) => {
//     console.log(e.message);
// }

//
// LOAD JSON DATA
//

// // CREATE A NEW INSTANCE OF THE XHR OBJECT
// const xhr = new XMLHttpRequest(); 

// // SET RESPONSETYPE AS JSON
// xhr.responseType = 'json';

// // OPEN A CONNECTION TO A FILE
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');          

// // SEND THE CONNECTION
// xhr.send();

// // HANDLE THE STATE CHANGE OF THE OBJECT
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // GET THE RETURNED JSON DATA
//             let users = xhr.response;

//             // ITERATE THROUGH DATA            
//             for (let user of users) {
//                 // DISPLAY THE RESULTS ON THE PAGE
//                 document.body.innerHTML +=
//                 `<p>
//                 <strong>${user.name}</strong><br>
//                 <a href="mailto:${user.email}">${user.email}</a><br>
//                 ${user.phone}<br>
//                 ${user.website}<br>
//                 ${user.address.street}<br>
//                 </p>`
//             }
//         }
//     }
// };
// xhr.onerror = (e) => {
//     console.log(e.message);
// }

// DISCUSSION ON CALLBACK FUNCTIONS
// setInterval(foo, 5000);
// function foo() {
//     console.log('hello');
// }

// //
// // LOAD JSON DATA FROM WEB API USING A PROMISE
// //

// const fetchUsers = (url) => {
//     return new Promise((resolve, reject) => {
//         // CREATE A NEW INSTANCE OF THE XHR OBJECT
//         const xhr = new XMLHttpRequest(); 

//         // SET RESPONSETYPE AS JSON
//         xhr.responseType = 'json';

//         // OPEN A CONNECTION TO A FILE
//         xhr.open('GET', url);          // note that for Zak's PC version, he used '/data/team.xml'

//         // SEND THE CONNECTION
//         xhr.send();

//         // HANDLE THE STATE CHANGE OF THE OBJECT
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     // RETURN THE JSON DATA VIA RESOLVE
//                     resolve(xhr.response);
//                 } else {
//                     reject(new Error(xhr.state));
//                 }
//             }
//         };
          
//     });
// };

// fetchUsers('https://jsonplaceholder.typicode.com/users')
//     .then( users => {               // "users" corresponds to [[PromiseResult]] in the console for the Promise object
//         // ITERATE THROUGH DATA            
//         for (let user of users) {
//             // DISPLAY THE RESULTS ON THE PAGE
//             document.body.innerHTML +=
//             `<p>
//             <strong>${user.name}</strong><br>
//             <a href="mailto:${user.email}">${user.email}</a><br>
//             ${user.phone}<br>
//             ${user.website}<br>
//             ${user.address.street}<br>
//             </p>`
//         }
//     } )
//     .catch( e => console.log(e.message) );

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json() )
//     .then( users => {
//         for (let user of users) {
//             // DISPLAY THE RESULTS ON THE PAGE
//             document.body.innerHTML +=
//             `<p>
//             <strong>${user.name}</strong><br>
//             <a href="mailto:${user.email}">${user.email}</a><br>
//             ${user.phone}<br>
//             ${user.website}<br>
//             ${user.address.street}<br>
//             </p>`
//         }        
//     })
//     .catch( e => console.log(e.message) );

// APPARENTLY YOU CAN ADD A CATCH FOR EACH THEN STATEMENT AS BELOW
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json() )
//     .catch( e => console.log(e.message) )
//     .then( users => {
//         for (let user of users) {
//             // DISPLAY THE RESULTS ON THE PAGE
//             document.body.innerHTML +=
//             `<p>
//             <strong>${user.name}</strong><br>
//             <a href="mailto:${user.email}">${user.email}</a><br>
//             ${user.phone}<br>
//             ${user.website}<br>
//             ${user.address.street}<br>
//             </p>`
//         }        
//     })
//     .catch( e => console.log(e.message) );

//
// LOAD JSON DATA FROM WEB API USING A PROMISE
//

async function fetchUsers(url) {       // async keywords makes this an asynchronous function.
    try {
        const response = await fetch(url);             // Need two "awaits" because you are performing two asynchronous calls 
        const users = await response.json();
        return users;
    } catch (error) {
        return error;
    }
}
fetchUsers('https://jsonplaceholder.typicode.com/users')
    .then( users => {
        for (let user of users) {
            // DISPLAY THE RESULTS ON THE PAGE
            document.body.innerHTML +=
            `<p>
            <strong>${user.name}</strong><br>
            <a href="mailto:${user.email}">${user.email}</a><br>
            ${user.phone}<br>
            ${user.website}<br>
            ${user.address.street}<br>
            </p>`
        }        
    })
    .catch( error => console.log(error.message) );