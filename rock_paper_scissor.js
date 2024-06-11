let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".game");
const msg = document.querySelector("#msg");
const us = document.querySelector("#userScore");
const cs = document.querySelector("#compScore");

const GencompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randInt = Math.floor(Math.random() * 3);
    return options[randInt];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    let compChoice = GencompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        msg.innerText = "Game was draw. Play Again!!";
        msg.style.backgroundColor = "black";
    }

    else if(userChoice == "rock"){
        if(compChoice == "scissors"){
            msg.innerText = "You won! Your Rock beats Scissors.";
            msg.style.backgroundColor = "green";
            userScore++;
            us.innerText = `${userScore}`;
        }
        else{
            msg.innerText = "You lose! Paper beats your Rock.";
            msg.style.backgroundColor = "red";
            compScore++;
            cs.innerText = `${compScore}`;
        }
    }

    else if(userChoice == "paper"){
        if(compChoice == "rock"){
            msg.innerText = "You won! Your Paper beats Rock.";
            msg.style.backgroundColor = "green";
            userScore++;
            us.innerText = `${userScore}`;
        }
        else{
            msg.innerText = "You lose! Scissors beats your Paper.";
            msg.style.backgroundColor = "red";
            compScore++;
            cs.innerText = `${compScore}`;
        }
    }

    else if(userChoice == "scissors"){
        if(compChoice == "paper"){
            msg.innerText = "You won! Your Scissors beats Paper.";
            msg.style.backgroundColor = "green";
            userScore++;
            us.innerText = `${userScore}`;
        }
        else{
            msg.innerText = "You lose! Rock beats your Scissors.";
            msg.style.backgroundColor = "red";
            compScore++;
            cs.innerText = `${compScore}`;
        }
    }
}

choices.forEach((game) => {
    game.addEventListener("click", () => {
        const userChoice = game.getAttribute("id");
        console.log(`the button was clicked`, userChoice);
        playGame(userChoice);
    });
});