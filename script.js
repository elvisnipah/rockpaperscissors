const container = document.querySelector('#container');
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");
const paperBtn = document.querySelector('#paperBtn');
const rockBtn = document.querySelector('#rockBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let selection = Math.floor(Math.random() * 3) + 1;
    let compChoice = "";
    if(selection == 1){
        return compChoice = "scissors";
    }
    else if(selection == 2) {
        return compChoice = "rock";
    }
    else if(selection == 3) {
        return compChoice = "paper";
    }
    else {
        return undefined;
    }
}

let playRound = (playerSelection, computerSelection) => {
    if (playerScore == 5) {
        resultDiv.textContent = `GAME OVER! You win! Final score is You: ${playerScore} and Computer: ${computerScore}`;
        resultDiv.className = "result-win";
    }
    else if (computerScore == 5) {
        resultDiv.textContent = `GAME OVER! The computer wins! Final score is You: ${playerScore} and Computer: ${computerScore}`;
        resultDiv.className = "result-lose";
    }
    else if (playerScore < 5 && computerScore < 5){
        if (playerSelection == computerSelection && computerSelection) {
            resultDiv.textContent = `You played ${playerSelection} and Computer also played ${computerSelection}. Draw!`;
            scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
        }
        else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
            playerScore += 1;
            resultDiv.textContent = `You played ${playerSelection} and Computer played ${computerSelection}. You win this round!`;
            scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
        }
        else if ((computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "rock" && playerSelection == "scissors")) {
            computerScore += 1;
            resultDiv.textContent = `You played ${playerSelection} and Computer played ${computerSelection}. Computer wins this round!`;
            scoreDiv.textContent = `Computer ${computerScore} - ${playerScore} Player`;
        }
        else {
            resultDiv.textContent = "Error";
        }
    }
    
}

paperBtn.addEventListener("click", function() {
    playRound("paper", computerPlay())
});
rockBtn.addEventListener("click", function() {
    playRound("rock", computerPlay())
});
scissorsBtn.addEventListener("click", function() {
    playRound("scissors", computerPlay())
});