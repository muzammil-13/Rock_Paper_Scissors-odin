// Step 1: Setup the project structure
console.log("Game rules: Rock beats Scissors, Scissors beats Paper, Paper beats Rock")

// Step 2: Write the logic to get the computer choice
function getComputerChoice(){
    let randomNumber=Math.floor(Math.random()*3)

    if(randomNumber===0){
        return "Rock"
    }else if(randomNumber===1){
        return "Paper"
    }else{
        return "Scissors"
    }
}

// Step 4: Declare the players score variables
let humanScore=0;
let computerScore=0;
const maxScore=5;

// DOM elements
const humanScoreDisplay=document.getElementById("human-score");
const computerScoreDisplay=document.getElementById("computer-score");
const roundResultDisplay=document.getElementById("round-result");
const gameResultDisplay=document.getElementById("game-result");
const resetButton=document.getElementById("reset-btn");

// Step 5: Write the logic to play a single round
function playRound(humanChoice){
       const computerChoice = getComputerChoice();
       humanChoice=humanChoice.toLowerCase();
       computerChoice=computerChoice.toLowerCase();

       roundResultDisplay.textContent=`Human: ${humanChoice} | Computer: ${computerChoice}`;
       console.log(`Human: ${humanChoice} | Computer: ${computerChoice}`)

       if(
        (humanChoice==="rock" && computerChoice==="scissors") ||
        (humanChoice==="scissors" && computerChoice==="paper") ||
        (humanChoice==="paper" && computerChoice==="rock")
       ){
        humanScore+=1;
        roundResultDisplay.textContent=`You Scored! ${humanChoice} beats ${computerChoice}`;
        console.log(`You Scored! ${humanChoice} beats ${computerChoice}`);
       }else if(humanChoice===computerChoice){
        roundResultDisplay.textContent=`Its a Tie! You both chose ${humanChoice}`;
        console.log(`Its a Tie! You both chose ${humanChoice}`);
       }else{
        computerScore+=1;
        roundResultDisplay.textContent=`You Lose! ${computerChoice} beats ${humanChoice}`;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
       }

    // Update score display
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    
    console.log(`Score: Computer=${computerScore} | Human=${humanScore}`);
    
    // Check if game is over
    checkGameOver();
}

// Function to check if game is over
function checkGameOver() {
    if(humanScore >= maxScore || computerScore >= maxScore){
        if(humanScore > computerScore){
            gameResultDisplay.textContent="Game over! You WIN!!!";
        } else {
            gameResultDisplay.textContent="Game Over! Computer Wins!";
        }
        
        // Disable buttons when game is over
        document.getElementById('rk-btn').disabled = true;
        document.getElementById('ppr-btn').disabled = true;
        document.getElementById('scr-btn').disabled = true;
    }
}

// Reset game function
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    roundResultDisplay.textContent = "";
    gameResultDisplay.textContent = "";
    
    // Re-enable buttons
    document.getElementById('rk-btn').disabled = false;
    document.getElementById('ppr-btn').disabled = false;
    document.getElementById('scr-btn').disabled = false;
}

// event listeners
document.getElementById('rk-btn').addEventListener('click',()=>{
    playRound('rock');
});
document.getElementById('ppr-btn').addEventListener('click',()=>{
    playRound('paper');
});
document.getElementById('scr-btn').addEventListener('click',()=>{
    playRound('scissors');
});

// Reset button event listener
resetButton.addEventListener('click', resetGame);

// Initialize the game
resetGame();
