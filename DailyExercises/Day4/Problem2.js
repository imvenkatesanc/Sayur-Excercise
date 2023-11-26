// Problem #2
// You have 6 x 6 game board where each cell is shown as a *
// This is a two player dice game. The die has numbers 1 to 6.
// Each player rolls the dice twice. First roll is row number, second roll is col number.
// After the player rolls the dice, in the (row,col) enter the player's initial. 
// If the player  A rolls the dice and  if  player B already has their initial in the same row,col
// add a point to A and change the initial to A. 

// Player who gets 5 points first wins the game.
// Print the board each time after the user rolls and also print the current score.
// Use functions

let boardSize = 6;
let gameBoard = playerBoard(boardSize);
let playerAScore = 0;
let playerBScore = 0;

function playerBoard(boardSize){
    let cell=[];
    for(let i=0; i<boardSize; i++){
        cell[i] = new Array(boardSize).fill('*');
    }
    return cell;
}

function printBoard(){
    console.log("Game Board: ");
    for(let row of gameBoard){
        console.log(row.join(' '));
    }
}

function rollDice(){
    let dice = Math.floor(Math.random()*6)+1;
    return dice;
}

function gamePlay(){
    while(playerAScore<5 && playerBScore<5){
        console.log('\nPayer A\'s Turn');
        playTurn('A');
        printBoard();
        console.log('A score-',playerAScore, ' B score-',playerBScore);
        
        console.log('\nPayer B\'s Turn');
        playTurn('B');
        printBoard();
        console.log('A score-',playerAScore, ' B score-',playerBScore);
    }

    if (playerAScore === 5) {
        console.log('Player A wins!');
    } else {
        console.log('Player B wins!');
    }
}

function playTurn(player) {
    const row = rollDice() - 1;
    const col = rollDice() - 1;

    console.log(`Rolled: (${row + 1}, ${col + 1})`);

    if (gameBoard[row][col] === '*') {
        gameBoard[row][col] = player;
    } else {
        console.log(`Player ${player} gets a point!`);
        if (player === 'A') {
            playerAScore++;
        } else {
            playerBScore++;
        }
        gameBoard[row][col] = player;
    }
}

// Start the game
gamePlay();