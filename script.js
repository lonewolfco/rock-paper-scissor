// Declare Variables


var stats = {
    win: 0,
    loss: 0,
    tie: 0,
};

// var userWins = 0;
// var userLosses = 0;
// var userTies = 0;

function play() {

    // User Choices
    var userChoice = prompt("Enter R, P, or S");

    if ( userChoice ) userChoice = userChoice.toUpperCase();

// Computer choices
    var computerChoices = ["R", "P", "S"];

    var computerChoice = computerChoices[Math.floor(Math.random()*(computerChoices.length))];

    alert ("Computer Chose: " + computerChoice);

    // What are the conditions to win the game
    var winCondition = {
        R: "S",
        P: "R",
        S: "P"
    };


    if( !winCondition.hasOwnProperty( userChoice )) {
        alert("Invalid Entry - Play Again");

        if (confirm ("Would you like to play again?")) {
            play();
        } ;
        return;

    } else {

        if (userChoice === computerChoice) {
            stats.tie++;
            alert("TIE");
            console.log(stats);
            alert("Wins " + stats.win + " Loss: " + stats.loss + " Ties: " + stats.tie);
            if (confirm ("Would you like to play again?")) {
                play();
            } ;
            return;

        } else if ( winCondition[userChoice] === computerChoice) {
            stats.win++;
            alert("YOU WIN");
            console.log(stats);
            alert("Wins " + stats.win + " Loss: " + stats.loss + " Ties: " + stats.tie);
            if (confirm ("Would you like to play again?")) {
                play();
            } ;
            return;
        } else {
            stats.loss++;
            alert("YOU LOSE");
            console.log(stats);
            alert("Wins " + stats.win + " Loss: " + stats.loss + " Ties: " + stats.tie);
            if (confirm ("Would you like to play again?")) {
                play();
            } ;
            return;
        };
    }

};

play();