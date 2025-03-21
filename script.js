// Step 1: Setup the project structure
console.log("Hello there, We're gonna play # Project: Rock Paper Scissors soon!")
let gameRules=["Rock beats Scissors",
                "Scissors beats Paper",
                "Paper beats Rock"]
console.log("Game rules: "+gameRules)

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
// console.log("Computer Chose: "+getComputerChoice())

// Step 3: Write the logic to get the human choice
function getHumanChoice(){
    let userInput=prompt("Rock, Paper, or Scissors ?")
    // console.log("User Chose: "+userInput)
    return userInput;
}
// getHumanChoice()

// Step 4: Declare the players score variables
let humanScore=0;
let computerScore=0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice,computerChoice){
       humanChoice=humanChoice.toLowerCase();
       computerChoice=computerChoice.toLowerCase();

       console.log(`Human: ${humanChoice} | Computer: ${computerChoice}`)

       if(
        (humanChoice==="rock" && computerChoice==="scissors") ||
        (humanChoice==="scissors" && computerChoice==="paper") ||
        (humanChoice==="paper" && computerChoice==="rock")
       ){
        humanScore+=1
        console.log(`You Scored! ${humanChoice} beats ${computerChoice}`)
       }else if(humanChoice===computerChoice){
        console.log(`Its a Tie! You both chose ${humanChoice}`)
       }else{
        computerScore+=1
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
       }

    console.log(`Score: Computer=${computerScore} | Human=${humanScore}`)
}

// const humanSelection=getHumanChoice();
// const computerSelection=getComputerChoice();

// playRound(humanSelection,computerSelection)

// Step 6: Write the logic to play the entire game
function playGame(){
    humanScore=0;
    computerScore=0;

// Play 5 rounds by calling playRound 5 times.
    for(let i=0;i<5;i++){
        let humanSelection=getHumanChoice();
        let computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection)
    }

    console.log("Game OVER!")
    console.log(
        humanScore>computerScore
        ?"You Win the match"
        :humanScore<computerScore
        ?"Computer Wins the match!"
        :"WE GOT TIE!"
    )
}

// start the game
// playGame()
if(confirm("Do you want to play?")){
    playGame()
}else{
    console.log("May be next time!")
}