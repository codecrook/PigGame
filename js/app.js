(function () {
    'use strict';

    const rollButton = document.querySelector('.btn-roll');
    const holdButton = document.querySelector('.btn-hold');
    const newGameButton = document.querySelector('.btn-new');

    const firstPlayerPanel = document.querySelector('.player-0-panel');
    const secondPlayerPanel = document.querySelector('.player-1-panel');

    const firstPlayerName = document.getElementById('name-0');
    const secondPlayerName = document.getElementById('name-1');

    const firstPlayerCurrentScore = document.getElementById('current-0');
    const secondPlayerCurrentScore = document.getElementById('current-1');

    const firstPlayerTotalScore = document.getElementById('score-0');
    const secondPlayerTotalScore = document.getElementById('score-1');

    const dice = document.querySelector('.dice');

    let scores, roundScore, activePlayer, gamePlaying;

    //initiall conditions
    firstPlayerTotalScore.textContent = '0';
    secondPlayerTotalScore.textContent = '0';

    firstPlayerCurrentScore.textContent = '0';
    secondPlayerCurrentScore.textContent = '0';

    dice.style.display = 'none';

    rollButton.addEventListener('click', (e) => {
        let diceValue = Math.floor(Math.random() * 6) + 1;

        dice.style.display = 'block';
        dice.src = `../img/dice-${diceValue}.png`;
    });

})();