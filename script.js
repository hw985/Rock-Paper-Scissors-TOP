console.log("Hello World!");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function getHumanChoice() {
    const userInput = prompt("Please enter rock, paper, or scissors.");
    const userChoice = userInput.toLowerCase();
    return userChoice;
};

function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `Computer wins! ${computerChoice} beats ${humanChoice}.`;
    }
    return {result, humanScore, computerScore};
}

function playGame() {
    for (let i = 0; i <= 4; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);
        console.log(roundResult.result);
        console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    return {humanScore, computerScore};

}
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playGame();
console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);