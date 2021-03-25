// GET THE LIST FROM THE DOM
let list = document.querySelector('#items');

// GET PARENT ELEMENT
// console.log(list.parentElement);

// GET CHILDREN
// console.log(list.children);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// GET SIBLINGS
// console.log(list.previousElementSibling);

// CREATE ELEMENT
let li = document.createElement('li');
// li.className = 'list-group-item'; OR BELOW
li.className = list.firstElementChild.className;
let liText = document.createTextNode('Take a Shower');
li.appendChild(liText);
// ADD LI TO END OF LIST
// list.appendChild(li);
// ADD LI TO BEGINNING OF LIST
list.insertBefore(li, list.children[0]);
// REMOVE FIRST LI FROM LIST
// list.removeChild(list.children[0]);

console.log(list.attributes[0]);