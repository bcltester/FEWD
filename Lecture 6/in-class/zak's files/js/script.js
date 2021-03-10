window.addEventListener('load', init);

function init() {
    //let btn = document.getElementById('myButton');
    // WITHOUT PASSING EVENT OBJECT
    // btn.addEventListener('click', () => {
    //     alert('Hello World');
    // })

    // PASSING EVENT OBJECT
    // btn.addEventListener('click', (e) => {
    //     console.log(e.target);              // HTML of element
    //     console.log(e.type);                // click
    //     console.log(e.target.innerHTML);    // Cliok Me
    //     console.log(e.target.id);           // myButton
    //     console.log(e.target.className);    // blue
    //     console.log(e.eventPhase);          // 2 (target phase)
    //     console.log(e.timeStamp);           // numeric timestamp
    // });

    // EVENT DELEGATION
    let btns = document.getElementById('buttons');
    btns.addEventListener('click', (e) => {
        console.log(`%c${e.target.innerHTML} triggered the event.`, `font-size:1.4em;`);
    });
}