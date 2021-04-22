const $ = (id) => {
    return document.getElementById(id);
};

function getRandomNumber(max) {
    let random;
    // CHECK AND MAKE SURE MAX IS A NUMBER
    if (!isNaN(max)) {
        // CREATE RANDOM NUMBER
        random = Math.random();
        // RANDOM NUMBER BETWEEN 1 AND 6
        random = Math.floor(random * max);
        // ADD 1 TO RANDOM NUMBER TO MAKE SURE IT'S 1-6
        random = random + 1;
    }
    return parseInt(random);
}

function changePlayer() {
    if ($('current').innerHTML === $('player1').value) {
        $('current').innerHTML = $('player2').value;
    } else {
        $('current').innerHTML = $('player1').value;
    }

    // SET DIE AND TOTAL TEXT BOXES TO 0
    $('die').value = 0;
    $('total').value = 0;

    // SET FOCUS ON ROLL BUTTON
    $('roll').focus();
}

function newGame() {
    // CLEAR OUT PREVIOUS SCORES
    $('score1').value = 0;
    $('score2').value = 0;

    // CHECK AND SEE IF PLAYER NAMES EXIST
    if ($('player1').value !== '' && $('player2').value !== '') {
        $('turn').setAttribute('class', 'open');
        changePlayer();
    } else {
        $('turn').removeAttribute('class');
        alert('Please enter two player names to begin game.');
    }
}

function rollDice() {
    // GET THE TOTAL
    let total = parseInt($('total').value);

    // GET A RANDOM NUMBER BETWEEN 1 AND 6
    let die = getRandomNumber(6);
    // IF DIE IS 1, 0 OUT TOTAL AND SWITCH PLAYER
    // OTHER INCREMENT USER'S TEMP TOTAL
    if (die <= 1) {
        total = 0;
        changePlayer();
    } else {
        total += die;
    }
    $('die').value = die;
    $('total').value = total;

}

function holdTurn() {
    let score;

    let total = parseInt($('total').value);

    if ($('current').innerHTML === $('player1').value) {
        score = $('score1');
    } else {
        score = $('score2');
    }    

    score.value = parseInt(score.value) + total;

    if (score.value >= 100) {
        alert(`${$('current').innerHTML} is the winner!`);
        newGame();
    } else {
        changePlayer();
    }


    // HOW I HAD BEEN WRITING IT (DIDN'T FINISH DOWN THIS PATH BEFORE SWITCHING TO ZAK'S WAY)
    // if ($('current').innerHTML = $('player1').value) {
    //     $('score1').value += parseInt($('total').value);
    // } else {
    //     $('score2').value += parseInt($('total').value);
    // }
    
    // changePlayer();
}

window.addEventListener('load', () => {
    $('new_game').addEventListener('click', newGame);
    $('roll').addEventListener('click', rollDice);
    $('hold').addEventListener('click', holdTurn);

});