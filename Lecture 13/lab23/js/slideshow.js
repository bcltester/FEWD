const $ = (id) => {
    return document.getElementById(id);
};

const slideshow = function () {         // an object, but not a class (But looking at this, we couldn't tell if this is a class or function)
    // PRIVATE MEMBERS
    let timer;
    let play = true;
    let nodes = {image: null, caption: null};
    let img = {cache: [], counter: 0};

    const stopSlideShow = function () {
        clearInterval(timer);
    };

    const displayNextImage = function () {
        if (img.counter === img.cache.length - 1) {
            img.counter = 0;
        } else {
            img.counter++;
        }
        let image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.innerHTML = image.title;
    };

    const setPlayText = function (btn) {
        (play) ? btn.value = 'Resume' : btn.value = 'Pause';
    };

    // PUBLIC MEMBERS
    return {
        loadImages: function (slides) {
            let image;
            for (let i = 0; i<slides.length; i++) {
                image = new Image();
                image.src = slides[i].href;
                image.title = slides[i].title;
                img.cache.push(image);
            }
            return this;
        },
        startSlideShow: function (image, caption) {
            if (arguments.length == 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, 2000);
            return this;
        },
        createToggleHandler: function () {
            // STORE A COPY OF 'THIS' OBJECT (IT IS THIS ENTIRE RETURNED OBJECT, WHICH IS BASICALLY EQUIVALENT TO THE slideshow OBJECT) AS 'ME'
            let me = this;  // me becomes copy of the 'slideshow' returned object, which is important so that it can remember where we paused and restart from
            // console.log(`What is 'this' - createToggleHandler?`);           // my test to understand what 'this' represents
            // console.log(this);                                              // my test to understand what 'this' represents
            // CLOSURE USED AS THE CLICK EVENT HANDLER
            return function () {
                if (play) {
                    stopSlideShow();
                } else {
                    me.startSlideShow();            //this 'me' should refers to the slideshow returned object
                }
                setPlayText(this);      // 'this' here refers to the button. I believe this is because this function is invoked at the time the button is clicked, so somehow this function is bound to the button object where the click event occurred. And if the function is bound to an object, 'this' refers to that object.
                // console.log(`What is 'this' - return funcion:`);     // my test to understand what 'this' represents
                // console.log(this);                                   // my test to understand what 'this' represents
                // TOGGLE BETWEEN TRUE AND FALSE
                play = !play;
            };
        }
    };


};
// because of the closure function, this slideshow can remember what slide paused on. If we didn't have this benefit from closure, we would have to use webstorage to remember what slide it paused on.


// CREATE NEW SLIDESHOW OBJECT
const newSlideShow = slideshow();       // Zak said that we could also probably use the "new" keyword here - there's a fine line between 'classes' and creating objects that are functions.

window.addEventListener('load', (e) => {
    const slides = [
        {href: 'images/backpack.jpg', title: 'He loves backpacking in the Sierras'},
        {href: 'images/boat.jpg', title: 'He loves his boat'},
        {href: 'images/camaro.jpg', title: 'He loved his Camaro'},
        {href: 'images/punk.jpg', title: 'He used to be in a band'},
        {href: 'images/race.jpg', title: 'He likes obstacle course racing'},
        {href: 'images/wakeboard.jpg', title: 'He loves to wakeboard and wakesurf'}
    ];

    // START SLIDESHOW
    newSlideShow.loadImages(slides).startSlideShow($('image'), $('caption'));


    // ATTACH EVENT HANDLER TO BUTTON
    $('play_pause').onclick = newSlideShow.createToggleHandler();




});