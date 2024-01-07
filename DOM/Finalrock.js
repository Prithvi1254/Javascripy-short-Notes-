let result = '';
let score = JSON.parse(localStorage.getItem('score'));
// This gets the storage out
if (score === null) {
    score = {
        win: 0,
        loss: 0,
        tie: 0
    };
}
let val = false
let setIntervalId;
function autoplay() {
    if (!val) {
        setIntervalId = setInterval(function () {
            let yourmove = pickComputerMove();
            playGame(yourmove);
        }, 1000);
        val = true;
    }
    else {
        clearInterval(setIntervalId);
        val = false;
    }
}

updateScoreElement();


function playGame(picked) {
    let computerMove = pickComputerMove();

    result = '';
    if (picked === 'paper') {
        if (computerMove === 'rock') {
            result = 'You Won';
            score.win++;
        }
        else if (computerMove === 'paper') {
            result = 'Tie';
            score.tie++;
        }
        else {
            result = 'You Lose';
            score.loss++;
        }
    }
    else if (picked === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
            score.tie++;
        }
        else if (computerMove === 'paper') {
            result = 'You Lose';
            score.loss++;
        }
        else {
            result = 'You won';
            score.win++;
        }
    }
    else {
        if (computerMove === 'rock') {
            result = 'You Lose';
            score.loss++;
        }
        else if (computerMove === 'paper') {
            result = 'You won';
            score.win++;
        }
        else {
            result = 'Tie';
            score.tie++;
        }
    }
    // when we refresh the page all the dat gets equal to zero so we need to store it in a local storage. Local storage only accepts string. here the first string is name
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    // Alert will display on the popup
    document.querySelector('.show').innerHTML = `${result}`;
    document.querySelector('.picked').innerHTML = `You picked ${picked} . Computer picked ${computerMove}  ${result} `;
}
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins::${score.win} ,Loss::${score.loss} Tie::${score.tie}`;
}
function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else {
        computerMove = 'Scissor';
    }
    // console.log(computerMove);
    return computerMove;
}