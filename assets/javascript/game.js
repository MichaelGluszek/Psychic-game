let wins = 0;
let losses = 0;
let guessesLeft = 12;
let yourGuessesSoFar = "";
let randomLetter = getRandomLetter();

function getRandomLetter() {
    let lettersList = "a b c d e f g h i j k l m n o p q r s t u v w x z y"
    return lettersList.charAt(Math.floor(Math.random() * lettersList.length));
}


document.onkeyup = function (event) {
    let guess = event.key.toLowerCase();
    guessesLeft--;

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;


    if (guess.toLowerCase() === randomLetter) {
        wins++;
        guessesLeft = 12;
        randomLetter = getRandomLetter();
        yourGuessesSoFar = "";
        
    }


    else if (guessesLeft === 0) {
        losses++;
        guessesLeft = 12;
        randomLetter = getRandomLetter();
        yourGuessesSoFar = "";

    } else {

    }



    if (yourGuessesSoFar !== "") {
        yourGuessesSoFar = yourGuessesSoFar + ", " + guess.toLowerCase();
    }
    else {
        yourGuessesSoFar = guess.toLowerCase();

    }

};
