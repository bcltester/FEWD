window.addEventListener('load', init);  //'load' waits for every element to load

function init() {
    let btn = document.getElementById('myButton');
    // WITHOUT PASSING EVENT OBJECT
    // btn.addEventListener('click', () => {
    //     alert('Hello World 4');
    // });

    // PASSING EVENT OBJECT
    // btn.addEventListener('click', (e) => {
    //     console.log(e.target);              //<button id="myButton" class="blue">
    //     console.log(e.type);                // click
    //     console.log(e.target.innerHTML);    // Click me
    //     console.log(e.target.id);           // myButton
    //     console.log(e.target.className);    // blue
    //     console.log(e.eventPhase);          //2 (target event phase)
    //     console.log(e.timeStamp);           //
    // });

    // EVENT DELEGATION
    let btns = document.getElementById('buttons');
    btns.addEventListener('click', (e) => {
        console.log(`%c${e.target.innerHTML} triggered the event.`, `font-size: 1.4em;`);
        console.log(`%c${e.currentTarget.id} is ID of the current target.`, `font-size: 1.4em;`);
    });

}