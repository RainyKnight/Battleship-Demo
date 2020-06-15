function runCode() {
    runGame();
}

// For testing purposes that don't get muddled down by alerts
function playground() {

}

function runGame() {

    // specifiy how many slots are on the X-axis
    var lengthX = 20;

    // multiplied by lengthX-1 because we want it to generate between 0-lengthX 
    var randomLoc = Math.floor(Math.random() * (lengthX-1));
    
    var location1 = randomLoc;
    var location2 = location1 + 1;
    var location3 = location2 + 1;

    console.log("Length: " + lengthX + "\nLocation: " + location1 + "," + location2 + "," + location3);


    var guess;
    var hits = 0;
    var numGuesses = 0;

    var isAfloat = true;

    // isAfloat is a boolean variable with a value of 'true' so it can be it's own conditional
    while (isAfloat) {

        // prompt sends an alert with a text input box. If nothing is entered, the value is "null"
        guess = prompt("Ready, aim, fire! (enter a number from 0-" + lengthX + ")");

        if (guess < 0 || guess > lengthX) {
            alert("Invalid input. \nPlease enter a number from 0-" + lengthX + ".")
        }
        // error handling for when text is entered
        // isNaN checks if guess is Not a Number
        else if (isNaN(guess)) {
            alert("Invalid input. \nPlease enter a NUMBER from 0-" + lengthX + ".")
        }
        // // TODO error handling if they hit the same spot again
        // else if (guess == location1 && location1.status() == destroyed) {
        //     alert("You already hit that spot. You can't hit it again!");
        // }
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

// Future implementation roadmap pseudocode

// // Error handle for hitting the same spot repeatedly
//     if (guess == ship && isHit == true) {
//         alert("You already hit that spot!");
//     }

// // Ship class
//     class Ship {

//         // Each segment of the ship
//         var x1;
//         var y1;
//         var isHit1 = false;

//         var x2
//         var y2;
//         var isHit1 = false;

//         var x3;
//         var y3;
//         var isHit1 = false;

//         var sunk = false;

//     }