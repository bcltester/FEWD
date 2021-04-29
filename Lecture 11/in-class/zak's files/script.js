//
// LOAD XML DATA
//

// // CREATE A NEW INSTANCE OF THE XHR OBJECT
// const xhr = new XMLHttpRequest();
// // OPEN A CONNECTION TO A FILE
// xhr.open('GET', '/data/team.xml');
// // SEND THE CONNECTION
// xhr.send();
// // HANDLE THE STATE CHANGE OF THE OBJECT
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // GET THE RETURNED XML DATA
//             let xml = xhr.responseXML;
//             // GET ALL OF THE TEAMMEMBER NODES
//             let team = xml.getElementsByTagName('teammember');
//             // ITERATE THROUGH ALL OF THE TEAMMEMBER NODES
//             for (let i = 0; i < team.length; i++) {
//                 // DISPLAY THE RESULTS OF EACH NODE ON THE PAGE
//                 document.body.innerHTML += 
//                 `<p>
//                 <strong>${xml.getElementsByTagName('name')[i].childNodes[0].nodeValue}</strong><br>
//                 ${xml.getElementsByTagName('title')[i].childNodes[0].nodeValue}<br>
//                 ${xml.getElementsByTagName('bio')[i].childNodes[0].nodeValue}
//                 </p>`
//             }
//         }
//     }
// };
// // HANDLE ERRORS
// xhr.onerror = (e) => {
//     console.log(e.message);
// }

//
// LOAD JSON DATA
// 

// // CREATE A NEW INSTANCE OF THE XHR OBJECT
// const xhr = new XMLHttpRequest();
// // SET RESPONSE TYPE TO JSON
// xhr.responseType = 'json';
// // OPEN A CONNECTION TO A FILE
// xhr.open('GET', '/data/team.json');
// // SEND THE CONNECTION
// xhr.send();
// // HANDLE THE STATE CHANGE OF THE OBJECT
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             // GET THE RETURNED JSON DATA
//             let team = xhr.response;
//             // ITERATE THROUGH THE DATA
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
// // HANDLE ERRORS
// xhr.onerror = (e) => {
//     console.log(e.message);
// }

//
// LOAD JSON DATA FROM WEB API
// 

// // CREATE A NEW INSTANCE OF THE XHR OBJECT
// const xhr = new XMLHttpRequest();
// // SET RESPONSE TYPE TO JSON
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
//             // ITERATE THROUGH THE DATA
//             for (let user of users) {
//                 // DISPLAY THE RESULTS ON THE PAGE
//                 document.body.innerHTML += 
//                 `<p>
//                 <span class="name">${user.name}</span><br>
//                 <a href="mailto:${user.email}">${user.email}</a><br>
//                 ${user.phone}<br>
//                 ${user.website}
//                 </p>`
//             }
//         }
//     }
// };
// // HANDLE ERRORS
// xhr.onerror = (e) => {
//     console.log(e.message);
// }

//
// LOAD JSON DATA FROM WEB API USING A PROMISE
// 

// const fetchUsers = (url) => {
//     return new Promise((resolve, reject) => {
//         // CREATE A NEW INSTANCE OF THE XHR OBJECT
//         const xhr = new XMLHttpRequest();
//         // SET RESPONSE TYPE TO JSON
//         xhr.responseType = 'json';
//         // OPEN A CONNECTION TO A FILE
//         xhr.open('GET', url);
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
//     .then( users => {
//         // ITERATE THROUGH THE DATA
//         for (let user of users) {
//             // DISPLAY THE RESULTS ON THE PAGE
//             document.body.innerHTML += 
//             `<p>
//             <span class="name">${user.name}</span><br>
//             <a href="mailto:${user.email}">${user.email}</a><br>
//             ${user.phone}<br>
//             ${user.website}
//             </p>`
//         }
//     } )
//     .catch( e => console.log(e.message) )

//
// LOAD JSON DATA FROM WEB API USING FETCH API
// 

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( response => response.json())
//     .then( users => {
//         for (let user of users) {
//             document.body.innerHTML += 
//             `<p>
//                 <span class="name">${user.name}</span><br>
//                 <a href="mailto:${user.email}">${user.email}</a><br>
//                 ${user.phone}<br>
//                 ${user.website}
//             </p>`
//         }
//     })
//     .catch( e => console.log(e.message) )

//
// LOAD JSON DATA FROM WEB API USING ASYNC / AWAIT
// 

async function fetchUsers(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch (error) {
        return error;
    }
}
fetchUsers('https://jsonplaceholder.typicode.com/users')
    .then( users => {
        for (let user of users) {
            document.body.innerHTML += 
            `<p>
                <span class="name">${user.name}</span><br>
                <a href="mailto:${user.email}">${user.email}</a><br>
                ${user.phone}<br>
                ${user.website}
            </p>`
        }
    })
    .catch( error => console.log(error.message) )