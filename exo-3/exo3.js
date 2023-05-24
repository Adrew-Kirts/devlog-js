// you can write js here
console.log('exo-3');

let playerInput = prompt("Your choice (rock, paper, scissors) ?");
let choices = ["rock", "paper", "scissors", "bomb"];


function getPlayerChoice(playerInput) {

    playerInput = playerInput.toLowerCase()

    if (choices.includes(playerInput)) {
        return playerInput;
    }
    else {
        console.log("Please type rock, paper or scissors");
    }
}

function getComputerChoice() {

    const number = Math.trunc(Math.random() * 3);
    return choices[number];
}

function findWinner(playerChoice, computerChoice) {
    console.log("Result:")
    if (playerChoice == "bomb"){
        console.log("Won - cheater!");
    }
    else if (playerChoice == computerChoice) {
        console.log("Tied");
    }
    else if (playerChoice == "rock" && computerChoice == "scissors") {
        console.log("Won");
    }
    else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("Won");
    }
    else if (playerChoice == "scissors" && computerChoice == "paper") {
        console.log("Won");
    }
    else {
        console.log("Lost");
    }

}

function playGame() {
    let uChoice = getPlayerChoice(playerInput);
    console.log("You chose: ", uChoice);
    let computerChoice = getComputerChoice();
    console.log("Computer chose: ", computerChoice);
    return findWinner(uChoice, computerChoice);

}
playGame();

/*
____________
|Merci Alban|
-------------
const nb1 = 2
const nb2 = 6

let result = add(nb1, nb2);

function add(a,b){
    return a + b;
}
*/