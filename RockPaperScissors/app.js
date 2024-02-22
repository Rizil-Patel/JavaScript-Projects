let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was drawn :|";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        // console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! :) Your${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    } else {
        // console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose :( ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    // console.log("compChoice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = (compChoice === "paper") ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = (compChoice === "scissors") ? false : true;
        } else {
            //rock,paper
            userWin = (compChoice === "rock") ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});