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

    let scores, roundScore, activePlayer, gamePlaying, lastDiceValue;

    //initiall conditions
    initGame();

    //adding functionality for roll button
    rollButton.addEventListener('click', (e) => {
        if (gamePlaying) {

            let diceValue = Math.floor(Math.random() * 6) + 1;

            //code to roll the dice
            dice.style.display = 'block';
            dice.src = `./img/dice-${diceValue}.png`;

            //code to update the current score of player UNTILL he/she rolls an 1 or rolls two 6s in a row
            if (diceValue === 6 && lastDiceValue === 6) {
                //player looses all his/her scores
                scores[activePlayer] = 0;
                //update the change on UI
                document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
                //now it's next player's turn!
                changePlayer();
            } else if (diceValue !== 1) {
                //add score for current player
                roundScore += diceValue;
                document.querySelector(`#current-${activePlayer}`).textContent = roundScore; //display changes on the page
            } else {
                //if the current players rolls 1
                //move to next player
                changePlayer();
            }

            lastDiceValue = diceValue;
        }
    });

    //adding functionality for hold button
    holdButton.addEventListener('click', (e) => {
        if (gamePlaying) {
            //add roundScore of currently activePlayer to its total score
            scores[activePlayer] += roundScore;

            //display the score on UI
            document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];

            //check wheather the player has won the game, if not change the activePlayer to next player
            if (scores[activePlayer] >= 100) { //the player has won
                //change the name of the activePlayer to WINNER
                document.querySelector(`#name-${activePlayer}`).textContent = 'Winner!';
                //hide the dice
                dice.style.display = 'none';
                //add the 'winner' class to activePlayer's pannnel to make visual change
                document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
                //remove the 'active' class
                document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
                //stop the game-play i.e set the gamePlaying to false
                gamePlaying = false;
            } else {
                //change the currently activePlayer to next player
                changePlayer();
            }
        }
    });

    //adding functionality for new game button
    newGameButton.addEventListener('click', initGame);
    
    /*function to change activePlayer
     *toggles the currently activePlayer
     *initiaize the roundScore to 0 for current player
     *makes respective visual changes
    */
    function changePlayer() {
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

    /*function to initialize the game
     *initializes all the scores to 0
     *shows visual changes to UI making it display all the initial conditions
    */
    function initGame() {
        gamePlaying = true;
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
    
        firstPlayerTotalScore.textContent = '0';
        secondPlayerTotalScore.textContent = '0';
    
        firstPlayerCurrentScore.textContent = '0';
        secondPlayerCurrentScore.textContent = '0';

        firstPlayerName.textContent = 'Player 1';
        secondPlayerName.textContent = 'Player 2';

        firstPlayerPanel.classList.remove('winner');
        secondPlayerPanel.classList.remove('winner');

        firstPlayerPanel.classList.remove('active');
        secondPlayerPanel.classList.remove('active');

        firstPlayerPanel.classList.add('active');
    
        dice.style.display = 'none';
    }
})();
