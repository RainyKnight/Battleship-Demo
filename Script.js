function runCode() {
    runGame();
}

function runGame() {

    // TODO create a random location for the ship
    var location1 = 3;
    var location2 = 4;
    var location3 = 5;

    var guess;
    var hits = 0;
    var numGuesses = 0;

    var isAfloat = true;

    // test 2
    // isAfloat is a boolean variable with a value of 'true' so it can be it's own conditional
    while (isAfloat) {

        // prompt sends an alert with a text input box. If nothing is entered, the value is "null"
        guess = prompt("Ready, aim, fire! (enter a number from 0-6)")

        if (guess < 0 || guess > 6) {
            alert("Invalid input. \nPlease enter a number from 0-6.")
        }
        else {
            numGuesses++;
            if (guess == location1 || guess == location2 || guess == location3) {
                alert("Hit!");
                hits++;
            } else {
                alert("Miss :(");
            }

            if (hits == 3) {
                isAfloat = false;
                alert("You sank my battleship!");
            }
        }
    }

// stats
alert("It took you " + numGuesses + " guesses to sink the ship with an accuracy of " + 
     (parseFloat(100*(3/numGuesses)).toFixed(2)+"%"));
}