let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor((Math.random()*100)%3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("It was a Draw!");
    msg.textContent = "It was a Draw! 🥲";
};

const showWinner = (userWin) => {
    if(userWin) {
        // console.log("You Won");
        msg.textContent = "You Won! 🥳";
        userScore++;
        userScorePara.textContent = userScore;
    }
    else {
        // console.log("Computer Won");
        msg.textContent = "Computer Won! 🤖(AI will take the world)";
        compScore++;
        compScorePara.textContent = compScore;
    }
}

const playGame = (userChoice) => {
    // console.log("user choice is", userChoice);
    const compChoice = genCompChoice();
    // console.log("computer choice is", compChoice);

    if(userChoice===compChoice){
        drawGame();
    } 
    else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice === "paper"? false : true;
        } 
        else if(userChoice==="paper"){
            userWin = compChoice === "scissors"? false : true;
        } 
        else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});