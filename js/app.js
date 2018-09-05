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
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    firstPlayerTotalScore.textContent = '0';
    secondPlayerTotalScore.textContent = '0';

    firstPlayerCurrentScore.textContent = '0';
    secondPlayerCurrentScore.textContent = '0';

    dice.style.display = 'none';

    rollButton.addEventListener('click', (e) => {
        let diceValue = Math.floor(Math.random() * 6) + 1;

        //code to roll the dice
        dice.style.display = 'block';
        dice.src = `../img/dice-${diceValue}.png`;

        //code to update the current score of player UNTILL he/she rolls an 1

        if (diceValue !== 1) {
            //add score for current player
            roundScore += diceValue;
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore; //display changes on the page
        } else {
            //if the current players rolls 1
            //move to next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //toggle the activePlayer
            roundScore = 0; //initializes the round score to 0 for current player

            //display the initialized current score as 0 for both the players, on the UI
            firstPlayerCurrentScore.textContent = '0'; 
            secondPlayerCurrentScore.textContent = '0';

            //add visual effect fro showing which player is currently active
            firstPlayerPanel.classList.toggle('active');
            secondPlayerPanel.classList.toggle('active');

            //hide the dice giving the current player a blank place to roll on :P
            dice.style.display = 'none';
        }
    });

})();