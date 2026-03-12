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

const rockbtn = document.createElement("button");
rockbtn.textContent = "Rock";
document.body.appendChild(rockbtn);

const paperbtn = document.createElement("button");
paperbtn.textContent = "Paper";
document.body.appendChild(paperbtn);

const scissorsbtn = document.createElement("button");
scissorsbtn.textContent = "Scissors";
document.body.appendChild(scissorsbtn);

const content = document.createElement("div");
content.classList.add("content");
document.body.appendChild(content);

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
        const tieMessage = document.createElement("div");
        tieMessage.classList.add("subContent");
        tieMessage.textContent = "TIE";
        content.appendChild(tieMessage);
        console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
        const scoreUpdate = document.createElement("div");
        scoreUpdate.classList.add("subContent");
        scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
        content.appendChild(scoreUpdate);
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose");
            const loseMessage = document.createElement("div");
            loseMessage.classList.add("subContent");
            loseMessage.textContent = "YOU LOSE";
            content.appendChild(loseMessage);
            computerScore += 1;
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            const scoreUpdate = document.createElement("div");
            scoreUpdate.classList.add("subContent");
            scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
            content.appendChild(scoreUpdate);
        } else if (computerChoice === "scissors") {
            console.log("You win");
            const winMessage = document.createElement("div");
            winMessage.classList.add("subContent");
            winMessage.textContent = "YOU WIN";
            content.appendChild(winMessage);
            humanScore += 1;
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            const scoreUpdate = document.createElement("div");
            scoreUpdate.classList.add("subContent");
            scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
            content.appendChild(scoreUpdate);
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win");
            const winMessage = document.createElement("div");
            winMessage.classList.add("subContent");
            winMessage.textContent = "YOU WIN";
            content.appendChild(winMessage);
            humanScore += 1;
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            const scoreUpdate = document.createElement("div");
            scoreUpdate.classList.add("subContent");
            scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
            content.appendChild(scoreUpdate);
        } else if (computerChoice === "scissors") {
            console.log("You lose");
            const loseMessage = document.createElement("div");
            loseMessage.classList.add("subContent");
            loseMessage.textContent = "YOU LOSE";
            content.appendChild(loseMessage);
            computerScore += 1;
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            const scoreUpdate = document.createElement("div");
            scoreUpdate.classList.add("subContent");
            scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
            content.appendChild(scoreUpdate);
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose");
            const loseMessage = document.createElement("div");
            loseMessage.classList.add("subContent");
            loseMessage.textContent = "YOU LOSE";
            content.appendChild(loseMessage);
            computerScore += 1;
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            const scoreUpdate = document.createElement("div");
            scoreUpdate.classList.add("subContent");
            scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
            content.appendChild(scoreUpdate);
        } else if (computerChoice === "paper") {
            console.log("You win");
            const winMessage = document.createElement("div");
            winMessage.classList.add("subContent");
            winMessage.textContent = "YOU WIN";
            content.appendChild(winMessage);
            humanScore += 1;
            console.log("Your score: " + humanScore + ", Computer score: " + computerScore);
            const scoreUpdate = document.createElement("div");
            scoreUpdate.classList.add("subContent");
            scoreUpdate.textContent = "SCORE: PLAYER HAS " + humanScore + ", COMPUTER HAS " + computerScore;
            content.appendChild(scoreUpdate);
        }
     } else console.log("No contest");
     if (humanScore >= 5 || computerScore >= 5) {
        humanScore = 0;
        computerScore = 0;
        const endGame = document.createElement("div");
        endGame.classList.add("subContent");
        endGame.textContent = "GAME OVER: START NEW GAME";
        content.appendChild(endGame);
     }
}

/* Now that the function has been written, we need a way to call the function on command.  The following buttons
are created and appended to HTML doc, then event listeners are added which call the playGame() function each time
they are clicked. */

rockbtn.addEventListener("click", () => {playGame("rock", computerChoice)});
paperbtn.addEventListener("click", () => {playGame("paper", computerChoice)});
scissorsbtn.addEventListener("click", () => {playGame("scissors", computerChoice)});