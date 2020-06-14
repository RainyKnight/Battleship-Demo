function runCode() {
    runGame();
}

function runGame() {

    // multiplied by 9 because we want it to generate between 0-9.999 
    var randomLoc = Math.floor(Math.random() * 9);

    //console.log('Ship is at: ' + location1 + ',' + location2 + ',' + location3);

    
    var location1 = randomLoc;
    var location2 = location1 + 1;
    var location3 = location2 + 1;

    var guess;
    var hits = 0;
    var numGuesses = 0;

    // specifiy how many slots are on the X-axis
    var lengthX = 10

    var isAfloat = true;

    // test 3
    // isAfloat is a boolean variable with a value of 'true' so it can be it's own conditional
    while (isAfloat) {

        // prompt sends an alert with a text input box. If nothing is entered, the value is "null"
        guess = prompt("Ready, aim, fire! (enter a number from 0-6)")

        if (guess < 0 || guess > lengthX) {
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