window.addEventListener('load', () => {
    // SHOW ALL MEMBERS OF THE WINDOW OBJECT
    // console.log(Object.getOwnPropertyNames(window));

    // WINDOW.NAVIGATOR
    // console.log(window.navigator.appName);
    // console.log(window.navigator.appCodeName);
    // console.log(window.navigator.appVersion);
    // console.log(window.navigator.userAgent);
    // console.log(window.navigator.cookieEnabled);
    // console.log(window.navigator.onLine);
    // console.log(window.navigator.language);
    // console.log(window.navigator.platform);
    // console.log(window.navigator.product);

    // WINDOW.NAVIGATOR.GEOLOCATION
    // window.navigator.geolocation.getCurrentPosition(showPosition, errorHandling);
    // function showPosition(position) {
    //     console.log(`%cLatitude: ${position.coords.latitude}`, `font-size:1.4em`);
    //     console.log(`%cLongitude: ${position.coords.longitude}`, `font-size:1.4em`);
    //     console.log(`%cAccuracy: ${position.coords.accuracy}`, `font-size:1.4em`);
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
    //             alert('The request timed out');
    //             break;
    //         default:
    //             alert('I dont know what happened');
    //     }
    // }

    // WINDOW.LOCATION
    // console.log(window.location.href);
    // console.log(window.location.pathname);
    // console.log(window.location.host);
    // console.log(window.location.hostname);
    // console.log(window.location.protocol);
    // console.log(window.location.port);
    // console.log(window.location.search);
    // console.log(window.location.hash);

    // USING WINDOW.LOCATION TO REDIRECT THE USER BASED ON A PATH
    // if (window.location.pathname === '/index.html') {
    //     window.location.href = 'http://www.google.com';
    // }

    // WINDOW.OPEN
    // document.getElementById('btnClick').addEventListener('click', () => {
    //     window.open('popup.html', '', 'width=300, height=200');
    // });

    // WINDOW.SETTIMEOUT() AND WINDOW.SETINTERVAL()
    // function boo() {
    //     let output = document.getElementById('details');
    //     output.innerHTML += 'Boo!';
    // }
    // //window.setTimeout(boo, 5000);
    // window.setInterval(boo, 5000);
});