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
