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
}

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

/* function playGame() {
    for (let i = 0; i <= 4; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const roundResult = playRound(humanChoice, computerChoice);
        console.log(`Round ${i + 1}: ${roundResult.result}`);
        console.log(`Current Score - You: ${roundResult.humanScore}, Computer: ${roundResult.computerScore}`);
    }
    return {humanScore, computerScore};

} */
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".player-input");
    const resultText = document.getElementById("result-text");
    const scoreText = document.getElementById("score-text");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            const roundResult = playRound(humanChoice, computerChoice);
            resultText.textContent = `Computer chose: ${computerChoice}`;
            resultText.textContent = `You chose: ${humanChoice}`;
            resultText.textContent = roundResult.result;
            scoreText.textContent = `Current Score - You: ${roundResult.humanScore}, Computer: ${roundResult.computerScore}`;
            if (humanScore === 5) {
                resultText.textContent = "Congratulations! You won the game!";
                buttons.forEach(btn => btn.disabled = true);
            } else if (computerScore === 5) {
                resultText.textContent = "Computer wins the game! Better luck next time!";
                buttons.forEach(btn => btn.disabled = true);
            }
        });
    });
}); 
console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);