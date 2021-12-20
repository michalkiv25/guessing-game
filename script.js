//All variables are the essential tags of the Index file
document.querySelector(".number").innerHTML;
document.querySelector(".guess").value;
document.querySelector(".message").innerHTML;
document.querySelector(".score").innerHTML;

let score = 20;
let computerNumber = Math.floor(Math.random() * 20) + 1;

const messagefunction = function (message) {
        document.querySelector(".message").innerHTML = message;
    }
    // check=button
document.querySelector(".check").addEventListener("click", function () {
    let guessNumber = Number(document.querySelector(".guess").value);
    // If you do not write a number
    if (!guessNumber) {
        messagefunction("You need to write a namber🔢");

        // If the number is the same as the computer number   
    } else if (computerNumber === guessNumber) {
        console.log(computerNumber, guessNumber, "Equal");
        messagefunction("Excellent, you succeeded👌");
        document.querySelector(".number").innerHTML = guessNumber;
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".score").innerHTML -= "1";
        document.querySelector("body").style.backgroundColor = "#1d580c";

        // If the guess number is not the same as the computer number
    } else if (computerNumber !== guessNumber && score > 0) {
        console.log(computerNumber, guessNumber, "different");
        messagefunction(computerNumber > guessNumber ? "Too low👎" : "Too high🤚");
        document.querySelector(".number").innerHTML = guessNumber
        document.querySelector(".score").innerHTML = score--;
    } else {
        console.log(computerNumber, guessNumber, "Low score");
        messagefunction("Game over");
        document.querySelector(".score").innerHTML = "0";
    }
});

// Reset the game
document.querySelector(".again").addEventListener("click", function () {

    messagefunction("Start guessing...");
    document.querySelector(".score").innerHTML = 20;
    document.querySelector(".guess").value = " ";
    document.querySelector(".number").innerHTML = "?";
    document.querySelector(".number").style.width = "15rem"
    document.querySelector("body").style.backgroundColor = "#222";


});
