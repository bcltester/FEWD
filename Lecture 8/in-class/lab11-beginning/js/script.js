// ADD EVENT HANDLER TO EACH H2 ELEMENT
const toggle = (e) => {
    // console.log(e.target.innerHTML);
    // GET CURRENTLY SELECTED H2
    let h2 = e.currentTarget;       // D's note: .currentTarget not Target used because the event listener is added to h2s and currentTarget will identify the element with the event Listener attached, even if the click Target is the <a> inside the <h2>. Otherwise, if it was Target, then it could correspond to the <a> not the <h2> if the user clicked on the <a>.
    // GET CURRENTLY SELECTED H2'S SIBLING DIV
    let div = h2.nextElementSibling;

    // handle removal of all classes from h2 and div elements
    let h2Elements = faqs.getElementsByTagName('h2');
    for (h2Element of h2Elements) {
        //IF THE H2 ELEMENT IN THE ARRAY DOESN'T EQUAL THE CURRENTLY CLICKED H2, HIDE ALL CLASS ATTRIBUTES FOR H2 AND SIBLING DIVS
        if (h2Element != e.currentTarget) {
            h2Element.removeAttribute('class'); // REMOVE CLASS FROM H2
            h2Element.nextElementSibling.removeAttribute('class'); // REMOVE CLASS FROM SIBLING DIV
        }
    }

    // TOGGLE PLUS / MINUS ICON BY ADDING / REMOVING CLASS
    if (h2.hasAttribute('class')) {
        h2.removeAttribute('class');
    } else {
        h2.setAttribute('class', 'minus');
    }

    // TOGGLE DIV VISIBILITY BY ADDING / REMOVING CLASS
    if (div.hasAttribute('class')) {
        div.removeAttribute('class');
    } else {
        div.setAttribute('class', 'open');
    }

};

window.addEventListener("load", () => {
    // GET THE ACCORDION
    let faqs = document.querySelector("#faqs");
    // console.log(faqs);
    // GET ALL THE H2 ELEMENTS FROM THE ACCORDION
    let h2Elements = faqs.getElementsByTagName('h2');
    // LOOP THROUGH COLLECTION OF H2 ELEMENTS AND ATTACH EVENT LISTENERS TO EACH H2
    // USING ES5
    // for (let i = 0; i < h2Elements.length; i++) {
    //     h2Elements[i].addEventListener('click', toggle);
    // }
    // USING ES6
    for (h2Element of h2Elements) {
        h2Element.addEventListener('click', toggle);
    }


});