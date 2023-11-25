// Problem #3
// Its is a single player game where the user starts with 0 points. User keeps rolling the 
// dice.If the rolled number is 0, game ends. If the rolled number is even, then 2 points are
//  added. If the number is odd, then if the number is 1,3 then the user has to jump. 
//  If the number is 5, then 3 points are added. The game ends when the user has 50 points.

function playGame() {
    let points = 0;

    while (points < 50) {
        let rolledNumber = Math.floor(Math.random() * 6) + 1;

        console.log("Rolled number: " + rolledNumber);

        if (rolledNumber === 0) {
            console.log("Game over! You rolled a 0.");
            break;
        } else if (rolledNumber % 2 === 0) {
            points += 2;
            console.log("Even number! 2 points added. Total points: " + points);
        } else {
            if (rolledNumber === 1 || rolledNumber === 3) {
                console.log("Jump! No points added. Total points: " + points);
            } else if (rolledNumber === 5) {
                points += 3;
                console.log("Odd number 5! 3 points added. Total points: " + points);
            }
        }
    }

    if (points >= 50) {
        console.log("Congratulations! You reached 50 points and won the game!");
    }
}

// Call the function to start the game
playGame();