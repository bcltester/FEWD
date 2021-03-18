window.addEventListener('load', () => {

    // SHOW ALL MEMBERS

    // window.console.log(Object.getOwnPropertyNames(window));
    // window.console.log(Object.getOwnPropertyNames(Array));

    // // WINDOW.NAVIGATOR
    // console.log(window.navigator.appCodeName);
    // console.log(window.navigator.appName);
    // console.log(window.navigator.appVersion);
    // console.log(window.navigator.cookieEnabled);
    // //console.log(window.navigator.geolocation);  // covered later
    // console.log(window.navigator.language);
    // console.log(window.navigator.onLine);
    // console.log(window.navigator.platform);
    // console.log(window.navigator.product);
    // console.log(window.navigator.userAgent);

    // WINDOW.NAVIGATOR.GEOLOCATION
    // window.navigator.geolocation.getCurrentPosition(showPosition, errorHandling);
    // function showPosition(position) {       //equivalent to e in Event Listener
    //     console.log(`%cLatitude: ${position.coords.latitude}`, `font-size: 1.4em;`);
    //     console.log(`%cLongitude: ${position.coords.longitude}`, `font-size: 1.4em;`);
    //     console.log(`%cAccuracy: ${position.coords.accuracy}`, `font-size: 1.4em;`);
    // }
    // function errorHandling(error) {
    //     switch (error.code) {
    //         case error.PERMISSION_DENIED:
    //             alert('Permission to geolocate was denied');
    //             break;
    //         case error.LOCATION_UNAVAILABLE:
    //             alert('Location was unavailable');
    //             break;
    //         case error.TIMEOUT:
    //             alert('Timed out');
    //             break;
    //         default:
    //             alert('I do not know what happend');
    //     }
    // }

    // WINDOW.LOCATION
    // console.log(window.location.href);
    // console.log(window.location.hash);
    // console.log(window.location.host);
    // console.log(window.location.hostname);
    // console.log(window.location.pathname);
    // console.log(window.location.port);
    // console.log(window.location.protocol);
    // console.log(window.location.search);

    // // APPLICATION FOR WINDOW.LOCATION - REDIRECTS, EITHER ON HOMEPAGE OR LIKE USED ON BIT.LY OR TINYURL
    // if (window.location.pathname === '/in-class/index.html') {
    //     window.location.href = 'http://www.mozilla.com';
    // }

    // WINDOW.OPEN
    // let btn = document.getElementById('btnClick');
    // btn.addEventListener('click', () => {
    //     window.open('http://www.mozilla.com', 'mozilla', 'width=600, height=600');        
    // });

    // let btn = document.getElementById('btnClick');
    // btn.addEventListener('click', () => {
    //     window.open('popup.html', '', 'width=300, height=200');        
    // });

    // WINDOW.SETTIMEOUT()
    function boo() {
        let output = document.getElementById('details');
        // output.innerHTML = "Boo!";
        output.innerHTML += "Boo!";
    }
    // window.setTimeout(boo, 5000);       // 5 seconds
    window.setInterval(boo, 5000);  //calls function every 5 seconds. Like in a loop.
});