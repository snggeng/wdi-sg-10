////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit        */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    var spellCheck = prompt();
    while  (!(spellCheck == "paper" || spellCheck == "scissors" || spellCheck == "rock")) {
      spellCheck = prompt();
    }
    return spellCheck;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    /** Your Code **/
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.


    /** Your Code **/
    return move || randomPlay();
}

// Return true if move1 beats move2 
function playerWon(playerMove, computerMove) {
  return (playerMove == 'rock' && computerMove == 'scissors') ||
         (playerMove == 'scissors' && computerMove == 'paper') ||
         (playerMove == 'paper' && computerMove == 'rock');
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    /** Your Code **/
    if (playerMove == computerMove) {
      winner = 'tie';
    } else if (playerWon(playerMove, computerMove)) {
      winner = 'player';
    } else {
      winner = 'computer';
    }
    console.log("Player:[" + playerMove +"] vs Computer:[" + computerMove + "] >> Result: [" + winner + "]");    
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    /** Your Code **/
    while (playerWins < 5 && computerWins < 5) {
      var winner = getWinner(getPlayerMove(), getComputerMove());
      if (winner == 'player') {
        playerWins++;
      } else if (winner == 'computer') {
        computerWins++;
      }
    }

    return [playerWins, computerWins];
}

playToFive();

