// TRYING OUT DOCUMENT INTERFACE

// console.log(document.head);
// console.log(document.links);
// console.log(document.getElementById('main'));
// console.log(document.getElementsByTagName('li'));   //gets you  a collection
// console.log(document.getElementsByClassName('list-group-item'));    //gets you  a collection
// console.log(document.getElementsByClassName('list-group-item')[0]); //gets you  a collection
// console.log(document.querySelector('.title'));
// console.log(document.querySelector('li:first-child'));


let list = document.querySelector('#items');

// GET PARENT ELEMENT

// console.log(list.parentElement);
// console.log(list.parentElement.parentElement);
// console.log(list.parentElement.parentElement.parentElement);

// GET CHILDREN

// console.log(list.children);
// console.log(list.childNodes);
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);

// GET SIBLING

// console.log(list.previousElementSibling);

// CREATE ELEMENT

let li = document.createElement('li');

// li.className = 'list-group-item';    // hard-coded way, or BELOW
li.className = list.firstElementChild.className;  //This way would make it so that if a designer changed the class names, you'd get the new class name

let liText = document.createTextNode('Take a shower');
li.appendChild(liText);

// ADD LI TO END OF LIST

list.appendChild(li);

// ADD LI TO END OF LIST

list.insertBefore(li, list.children[0]);

// REMOVE LI

// list.removeChild(list.children[0]);

console.log(li);

console.log(list.innerHTML);
console.log(list.innerText);
console.log(list.attributes);
console.log(list.attributes[0]);
console.log(list.attributes[1]);
console.log(list.attributes[0].value);
console.log(list.getAttribute('class'));