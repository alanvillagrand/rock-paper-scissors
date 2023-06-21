var playerWins = 0;
var computerWins = 0;
var message;

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];

    const choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    let message;
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors")){
        message = "You Won! Rock beats Scissors";
        playerWins++;
    }
    else if ((playerSelection.toLowerCase() == "paper" && computerSelection == "Rock")){
        message = "You Won! Paper beats Rock";
        playerWins++;
    }
    else if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper")){
        message = "You Won! Scissors beats Paper";
        playerWins++;
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "Paper")){
        message = "You lost... Paper beats Rock";
        computerWins++;
    }
    else if ((playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors")){
        message = "You Lost... Paper beats Rock";
        computerWins++;
    }
    else if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock")){
        message = "You Lost.. Scissors beats Paper";
        computerWins++;
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        message = "Tie game."
    }
    else{
        message = "Invalid Response. Try again.";
    }
    return message;
}

function game(){
    console.log("Welcome to Rock, Paper, Scissors!");

    while(playerWins < 5 && computerWins < 5){
        let playerSelection = prompt("Choose your weapon: 'Rock', 'Paper', or 'Scissors'");
        message = playRound(playerSelection, getComputerChoice());
        console.log(message);
        if (message != "Invalid Response. Try again."){
            console.log("Player Points: " + playerWins);
            console.log("Computer Points: " + computerWins);
        }
    }
    
    if(playerWins >= 5){
        console.log("Congrats! You beat the computer!");
    }
    else{
        console.log("Yikes... You lost...");
    }
}

game();

