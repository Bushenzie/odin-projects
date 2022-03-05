
//Player picks
const playerRock = document.querySelector(".pl-rock");
const playerPaper = document.querySelector(".pl-paper");
const playerScissors = document.querySelector(".pl-scissors");
let picked;
let playerScore = 0;

//Computer picks
const pcRock = document.querySelector(".pc-rock");
const pcPaper = document.querySelector(".pc-paper");
const pcScissors = document.querySelector(".pc-scissors");
let pcPicked;
let pcScore = 0;

//Other DOM elements
const currentState = document.querySelector(".current-state");
const resetButton = document.querySelector(".again-button");
const playerScoreElement = document.querySelector("#player-score");
const pcScoreElement = document.querySelector("#computer-score");

let clickable = true;

SetListeners();
SetScore();

//Sets Score
function SetScore() {
    playerScoreElement.innerHTML = playerScore;
    pcScoreElement.innerHTML = pcScore;
}

function SetListeners() {
    playerRock.addEventListener("click", function set() {
        if (clickable) {
            picked = "rock";
            playerRock.classList.add("picked");
            clickable = false;
            StartGame();
        }
    });


    playerPaper.addEventListener("click", function set() {
        if (clickable) {
            picked = "paper";
            playerPaper.classList.add("picked");
            clickable = false;
            StartGame();
        }
    });


    playerScissors.addEventListener("click", function set() {
        if (clickable) {
            picked = "scissors";
            playerScissors.classList.add("picked");
            clickable = false;
            StartGame();
        }
    })
}



function SetValuesForStart() {

}

//Game functions
function StartGame() {
    resetButton.addEventListener("click", RestartGame);

    pcPicked = RandomPick();
    CheckWin();

    resetButton.classList.remove("cannot");
}

function CheckWin() {
    if (pcPicked === picked) {
        //TIE!
        currentState.innerHTML = "TIE!"
    } else if (pcPicked === "rock" && picked === "paper" || pcPicked === "scissors" && picked === "rock" || pcPicked === "paper" && picked === "scissors") {
        playerScore++;
        SetScore();
        //PLAYER WINNING
        currentState.innerHTML = "YOU WON!"
    } else {
        //PC WINNING
        pcScore++;
        SetScore();
        currentState.innerHTML = "PC WON!"
    }
}

function RestartGame() {
    clickable = true;
    picked = "";
    pcPicked = "";
    document.querySelectorAll(".item").forEach(item => {
        item.classList.remove("picked");
    })
    resetButton.classList.add("cannot");
    currentState.innerHTML = "PICK!";
    resetButton.removeEventListener("click", RestartGame);
    SetListeners();
}


function RandomPick() {
    let random = Math.floor(Math.random() * 3) + 1;
    switch (random) {
        case 1:
            pcRock.classList.add("picked");
            return "rock";
            break;
        case 2:
            pcPaper.classList.add("picked");
            return "paper";
            break;
        case 3:
            pcScissors.classList.add("picked");
            return "scissors";
            break;
    }
}