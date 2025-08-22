console.log("Hello World");

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
 * gets user input (0, 1, or 2)
 * return rock if 0, paper if 1, and scissor otherwise
 */
function getHumanChoice() {
    let choice = prompt("Type 0 for rock, 1 for paper, 2 for scissors.");
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getHumanChoice());
