
/* Psuedocode:
 * generate a random number 0-2
 * return rock if 0, paper if 1, and scissor otherwise
 */
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Psuedocode:
 * gets user input and turn it to lowercase
 * returns modified input
 */
function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors?");
    choice.toLowerCase();
    choice.trim();
    return choice;
}

/*
 * plays 5 rounds and announces the winner
 */
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    /*
     * Plays a single round of rock paper scissors
     */
    function playRound(humanChoice, computerChoice) {
        //console.log(humanChoice);
        //console.log(computerChoice);
        if (humanChoice === computerChoice) {
            console.log("Tie! Both players picked " + humanChoice);
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win! " + humanChoice +
                    " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice +
                    " beats " + humanChoice);
                computerScore++;
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! " + humanChoice +
                    " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice +
                    " beats " + humanChoice);
                computerScore++;
            }
        } else {
            if (computerChoice == "paper") {
                console.log("You win! " + humanChoice +
                    " beats " + computerChoice);
                humanScore++;
            } else {
                console.log("You lose! " + computerChoice +
                    " beats " + humanChoice);
            }
        }
    } // END of playRound

    for (let i = 0; i < 5; ++i) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("You win!\nYou: " + humanScore + "\nComputer: " + computerScore);
    } else {
        console.log("You lose!\nYou: " + humanScore + "\nComputer: " + computerScore);
    }
}

playGame();
