
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        compChoice = "rock";
    } else if (compChoice <= 0.66) {
        compChoice = "paper";
    } else compChoice = "scissors";
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    } else return "invalid";
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("Your choice was " + humanChoice);
        console.log("Computer's choice was " + computerChoice);
        if (humanChoice === computerChoice) {
            console.log("tie");
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose");
                computerScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("You win");
                humanScore += 1;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win");
                humanScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("You lose");
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose");
                computerScore += 1;
            } else if (computerChoice === "paper") {
                console.log("You win");
                humanScore += 1;
            }
        } else console.log("No contest");
        return "Your score " + humanScore + ", Computer score: " + computerScore;
    }

    for (let i = 0; i < 5; i++) {
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
}

console.log(playGame());