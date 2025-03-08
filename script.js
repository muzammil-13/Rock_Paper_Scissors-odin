// Step 1: Setup the project structure
console.log("Hello there, We're gonna play # Project: Rock Paper Scissors soon!")

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

console.log(getComputerChoice())

// Step 3: Write the logic to get the human choice
function getHumanChoice(){
    let userInput=prompt("Rock, Paper, or Scissors ?")
    console.log(userInput)
}

getHumanChoice()

// Step 4: Declare the players score variables
let humanScore=0;
let computerScore=0;

// Step 5: Write the logic to play a single round
function playRound(humanScore,computerScore){
    
}
// Step 6: Write the logic to play the entire game