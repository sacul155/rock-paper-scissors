/* returns a random choice between rock, paper, and scissors with the Math.random() function */
function getComputerChoice() {
    let compChoice = Math.random();
    if (compChoice <= 0.33) {
        compChoice = "rock";
    } else if (compChoice <= 0.66) {
        compChoice = "paper";
    } else compChoice = "scissors";
    return compChoice;
}
/* variables globally declared so that they can update each time playGame() is called */
let computerChoice = '';
let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice) {
    /* computerChoice is first assigned for comparison; don't need to assign humanChoice b/c it's assigned
    based on which button is clicked */
    computerChoice = getComputerChoice();

    /* At this point, both parameters computerChoice and humanChoice are known, so we print them to let the user
    know their choice and the computer's */
    console.log("Your choice was " + humanChoice);
    console.log("Computer's choice was " + computerChoice);

    /* Conditional statement that compares each player's choice and outputs tie, win, or lose to the console.
    Also updates score variables based on winner and prints to console as well. */
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

/* Now that the function has been written, we need a way to call the function on command.  The following buttons
are created and appended to HTML doc, then event listeners are added which call the playGame() function each time
they are clicked. */
const rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
document.body.appendChild(rockbtn);
rockbtn.addEventListener("click", () => {playGame("rock", computerChoice)});

const paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
document.body.appendChild(paperbtn);
paperbtn.addEventListener("click", () => {playGame("paper", computerChoice)});

const scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";
document.body.appendChild(scissorsbtn);
scissorsbtn.addEventListener("click", () => {playGame("scissors", computerChoice)});