let humanScore = 0;
let computerScore = 0;

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
    return choice;
}

/*
 * Plays a single round of rock paper scissors
 */
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! Both players picked " + humanChoice);
    }

    if (humanChoice === "rock") {
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
            computerScore++;
        }
    }
}
