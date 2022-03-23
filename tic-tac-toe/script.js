
const playboard = document.querySelector(".buttons");
const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => { board.reset() })

const Player = function (id, symbol) {
    return { id, symbol };
}


let playerOne = Player(0, "X");
let playerTwo = Player(1, "O");
let turn = 0;
const players = [playerOne, playerTwo];


let board = (function () {

    let isEnd = false;
    const showWinner = document.querySelector("#winner");
    const field = ["-", "-", "-", "-", "-", "-", "-", "-", "-",]


    const makeBoard = function () {
        let grid = "abcdefghi", button;
        for (let i = 0; i < 9; i++) {
            button = document.createElement("button");
            button.setAttribute("id", i);
            button.style.gridArea = grid[i];
            button.addEventListener("click", point)
            playboard.appendChild(button);
        }
    }

    const deleteBoard = function () {
        while (playboard.firstChild) {
            playboard.removeChild(playboard.firstChild);
        }
    }

    const reset = function () {
        for (let i = 0; i < field.length; i++) {
            document.getElementById(i).textContent = "";
            field[i] = "-";
        }
        showWinner.textContent = "";
        isEnd = false;
        turn = 0;
    }

    const point = function () {
        if (!this.textContent && !isEnd) {
            this.textContent = players[turn % 2].symbol;
            field[this.id] = players[turn % 2].symbol;
            turn++;
            checkForWin();
        }
    }

    const checkForWin = function (symbol) {
        const rows = [
            [field[0], field[1], field[2]],
            [field[3], field[4], field[5]],
            [field[6], field[7], field[8]],
        ]
        const columns = [
            [field[0], field[3], field[6]],
            [field[1], field[4], field[7]],
            [field[2], field[5], field[8]],
        ]
        const cross = [
            [field[0], field[4], field[8]],
            [field[2], field[4], field[6]],
        ]
        let i = 0;
        let winner = "";
        if (field.find(el => el === "-")) {
            while (i <= 2) {
                //ROWS
                if (rows[i].every(el => el === "X")) { isEnd = true; winner = "X" }
                else if (rows[i].every(el => el === "O")) { isEnd = true; winner = "O" }
                //COLUMNS 
                if (columns[i].every(el => el === "X")) { isEnd = true; winner = "X" }
                else if (columns[i].every(el => el === "O")) { isEnd = true; winner = "O" }
                //CROSS
                if (i < 2) {
                    if (cross[i].every(el => el === "X")) { isEnd = true; winner = "X" }
                    else if (cross[i].every(el => el === "O")) { isEnd = true; winner = "O" }
                }
                i++;
            }
            if (isEnd) {
                showWinner.textContent = `Congratulations, player ${winner}!`;
            }
        } else {
            isEnd = true;
            showWinner.textContent = "It's a tie :/";
        }
    }

    return {
        field,
        makeBoard,
        deleteBoard,
        reset
    }
})();

board.makeBoard();
