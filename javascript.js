// Declare variables
let directions = document.querySelector("#directions");
let pText = document.querySelector(".player.text");
let cText = document.querySelector(".computer.text");
let results = document.querySelector(".results");
let winnerText = document.querySelector(".wtext");
let winner;
let summary = "";
let cImgRock = document.querySelector('.img.computer.rock');
let cImgPaper = document.querySelector('.img.computer.paper');
let cImgScissors = document.querySelector('.img.computer.scissors');
                
let userWins = 0;
let compWins = 0;
let playerChoice;
let computerChoice;
let score;
let target = true
let criteria =[];
  criteria[0] = "rock";
  criteria[1] = "paper";
  criteria[2] = "scissors";
winnerText.textContent="?";

// Add the rules with button click at top
function rules() {
    alert('The rules of this game are:\n rock beats scissors\n scissors beats paper\n paper beats rock\n Tie: go again\n Play to 5\n Player clicks on one of the 3 player icons, computer will choose automatically');
}

directions.addEventListener("click", rules);

// Select images for player choices
const pChoiceRock = document.querySelector('.img.input.rock')
const pChoicePaper = document.querySelector('.img.input.paper')
const pChoiceScissors = document.querySelector('.img.input.scissors')

// Add event listeners that trigger the game when clicked. Game is run from clicking a choice
pChoiceRock.addEventListener("click", function(){ 
    playerChoice = "rock"
    console.log("Player chose rock");
    computerChoice = getCompChoice();
    game(playerChoice, computerChoice);
});

pChoicePaper.addEventListener("click", function() {
    playerChoice = "paper";
    console.log("Player chose paper");
    computerChoice = getCompChoice();
    game(playerChoice, computerChoice);
});

pChoiceScissors.addEventListener("click", function() {
    playerChoice = "scissors";
    console.log("Player chose scissors");
    computerChoice  = getCompChoice();
    game(playerChoice, computerChoice);
});

// Get the computer choice
function getCompChoice() {
    cImgRock.style.border = 0;
    cImgPaper.style.border = 0;
    cImgScissors.style.border = 0;
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        cImgRock.style.border = "solid 5px white";
    } else if (randomNumber === 1) {
        cImgPaper.style.border = "solid 5px white";
    } else {
        cImgScissors.style.border = "solid 5px white";
    };
    return criteria[randomNumber];
};

// Compare user choice vs computer choice
function evalChoices(pc, cc) {
    
    switch (true) {
        case(pc === "rock" && cc === "rock"): 
            return "tie" 
        case(pc === "rock" && cc === "paper"): 
            return "computer";
        case(pc === "rock" && cc === "scissors"): 
            return "player";
        case(pc === "paper" && cc ==="paper"):
            return "tie";
        case(pc === "paper" && cc ==="rock"):
            return  "player";
        case(pc === "paper" && cc === "scissors"):
            return "computer";
        case(pc === "scissors" && cc === "scissors"): 
            return "tie";
        case(pc === "scissors" && cc === "rock"):
            return "computer";
        case(pc === "scissors" && cc === "paper"):
            return "player";
    };
};

// Print out the current game iteration resuts at bottom of page
function printScore() {
    score = `You have won ${userWins} times and the computer has won ${compWins} times`;
    summary = summary + `The player chose ${playerChoice} and the computer chose ${computerChoice} and 
                         the winner is ${winner} <br> ${score}<br>` 
    results.innerHTML = summary
    summary = "";
    pText.textContent = `Player Wins: ${userWins}`;
    cText.textContent = `Computer Wins: ${compWins}`;

}

// Run an iteration of the game
function game(playerChoice, computerChoice) {

    // Evaluate choices to see who won
    winner = evalChoices(playerChoice, computerChoice);
                
    //Check to see who won and tally the results
    if (winner === "player") {
        userWins ++;
        printScore();

        if (userWins === 5) {
            winnerText.textContent = "YOU WIN!!"
            return false
        } 
    } else if (winner ==="computer") {
        compWins ++;
        printScore();
        if (compWins === 5) {
            winnerText.textContent = "Sorry, you lose :(";
            return false
        }
    } else {
        printScore();
    }
};