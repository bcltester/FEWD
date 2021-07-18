const $ = (id) => {
    return document.getElementById(id);
}

const createRollover = function(imgTag, secondUrl, secondAlt) {
    // STORE FIRST IMAGE INFO (SO WE CAN RESTORE TO THESE ON MOUSEOUT)
    let firstUrl = imgTag.src;
    let firstAlt = imgTag.alt;

    // PRELOAD THE INITIAL IMAGE
    let image = new Image();
    image.src = secondUrl;

    // CREATE MOUSEOVER AND MOUSEOUT FUNCTIONS
    const mouseover = function() {
        imgTag.src = secondUrl;
        imgTag.alt = secondAlt;
    };
    const mouseout = function() {
        imgTag.src = firstUrl;
        imgTag.alt = firstAlt;
    };

    // ATTACH EVENT HANDLERS
    evt.attach(imgTag, 'mouseover', mouseover);
    evt.attach(imgTag, 'mouseout', mouseout);
};

window.addEventListener('load', () => {
    createRollover($('img1'), 'images/wakeboard.jpg', 'Zak likes to wakeboard'); //Zak says that this is a closure
    createRollover($('img2'), 'images/race.jpg', 'Zak likes to wakeboard'); //Zak says that this is a closure
});