const createClickCounter = function () {
    let count = 0;
    const clickCounter = function () {
        count++;
        console.log(this.id + ' count is ' + count);
    };
    return clickCounter;
};

window.addEventListener('load', () => {
    document.getElementById('button1').onclick = createClickCounter();
    document.getElementById('button2').onclick = createClickCounter();
});