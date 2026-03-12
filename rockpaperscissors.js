
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        compChoice = "rock";
    } else if (compChoice <= 0.66) {
        compChoice = "paper";
    } else compChoice = "scissors";
    return compChoice;
}

/*
function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else return "invalid";
}
*/
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let computerChoice = getComputerChoice();

const rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
document.body.appendChild(rockbtn);
rockbtn.addEventListener("click", () => {playRound("rock", computerChoice)});

const paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
document.body.appendChild(paperbtn);
paperbtn.addEventListener("click", () => {playRound("paper", computerChoice)});

const scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";
document.body.appendChild(scissorsbtn);
scissorsbtn.addEventListener("click", () => {playRound("scissors", computerChoice)});

    function playRound(humanChoice, computerChoice) {
        console.log("Your choice was " + humanChoice);
        console.log("Computer's choice was " + computerChoice);
        if (humanChoice === computerChoice) {
            console.log("tie");
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose");
                computerScore += 1;
                console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            } else if (computerChoice === "scissors") {
                console.log("You win");
                humanScore += 1;
                console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win");
                humanScore += 1;
                console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            } else if (computerChoice === "scissors") {
                console.log("You lose");
                computerScore += 1;
                console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose");
                computerScore += 1;
                console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            } else if (computerChoice === "paper") {
                console.log("You win");
                humanScore += 1;
                console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            }
        } else console.log("No contest");
    }

 /*   for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
        if (i < 4) {
            let again = prompt("Again? Type yes or no").toLowerCase();
            if (again === "yes") {
                continue;
            } else return;
        } else return;
    }

    if (humanScore > computerScore) {
        return "You got aura twin";
    } else if (computerScore > humanScore) {
        return "you ain't got no aura twin";
    } else {
        return "It's a tie but you still got no aura";
    }
*/

}

console.log(playGame());