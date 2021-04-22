const $ = (id) => {
    return document.getElementById(id);
}

function calculateDays() {
    let event;
    let dt;
    let year;
    let date;
    let today;
    let oneDay;
    let days;

    // SELECT VALUES FROM EVENT AND DATE TEXT BOXES
    event = $('event').value;
    dt = $('date').value;

    // MAKE SURE THAT EVENT AND DATE TEXT BOXES ARE NOT EMPTY
    if (event.length === 0 || dt.length === 0) {
        $('message').innerHTML = 'Please enter an event and a date.';
        return;     // breaks out of the function and make sure it doesn't process any more code
    }

    // NOTE: ZAK AGREES THAT USING REGULAR EXPRESSION FOR THE FOLLOWING CHECKS WOULD BE AN IMPROVEMENT

    // MAKE SURE THE DATE STRING HAS SLASHES
    if (dt.indexOf('/') === -1) {
        $('message').innerHTML = 'Please check the date format (Ex: XX/XX/XXXX). Need slashes.';
        return;
    }

    // GET YEAR FROM EVENT DATE STRING
    year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
        $('message').innerHTML = 'Please check the date format (Ex: XX/XX/XXXX). Invalid year.';
        return;
    }

    //CONVERT THE EVENT DATE STRING TO DATE OBJECT AND AKE SURE IT IS VALID
    date = new Date(dt);
    if (date === 'Invalid Date') {
        $('message').innerHTML = 'Please check the date format (Ex: XX/XX/XXXX). Invalid date format.';
        return;
    }

    // CALCULATE DAYS
    today = new Date();

    oneDay = 24 * 60 * 60 * 1000 // number of seconds in one day

    // USER'S DATE - TODAY'S DATE / ONE DAY = NUMBER OF DAYS
    days = (date.getTime() - today.getTime()) / oneDay;

    // ROUND NUMBER OF DAYS UP
    days = Math.ceil(days);

    // CREATE AND DISPLAY MESSAGE


    if (days === 0) {
        $('message').innerHTML = `Today is ${event.substring(0,1).toUpperCase()}${event.substring(1)}\n${date.toDateString()}`;
    } else if (days < 0) {
        $('message').innerHTML = `${event.substring(0,1).toUpperCase()}${event.substring(1)} happened ${Math.abs(days)} days ago.\n${date.toDateString()}`;
    } else if (days > 0) {
        $('message').innerHTML = `${Math.abs(days)} days until ${event.substring(0,1).toUpperCase()}${event.substring(1)}.\n${date.toDateString()}`;
    }
}

window.addEventListener('load', () => {
    $('countdown').addEventListener('click', calculateDays);
    $('event').focus();
});