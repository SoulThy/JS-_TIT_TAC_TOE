const gameStatus = document.getElementById("game-status");

let gameActive = true;
let currentPlayer = "X";
let cellsStatus = ["", "", "", "", "", "", "", "", ""];

const currentPlayerTurn = () => `It's [ ${currentPlayer} ]'s turn`;
const winMessage = () => `Player [ ${currentPlayer} ] has won!`;
const drawMessage = () => `Game ended in a draw!`;

gameStatus.innerHTML = currentPlayerTurn();

document.getElementById("game-restart").addEventListener("click", gameRestart);
document
  .querySelectorAll(".grid-cell")
  .forEach((cell) => cell.addEventListener("click", gameCellClick));

function gameCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = clickedCell.getAttribute("grid-cell-index");

  if (cellsStatus[clickedCellIndex] != "" || !gameActive) {
    return;
  }

  cellsStatus[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;

  gameCheckResult();
  gameTurnManager();
}

function gameRestart() {
  gameActive = true;
  currentPlayer = "X";
  cellsStatus = ["", "", "", "", "", "", "", "", ""];
  gameStatus.innerHTML = currentPlayerTurn();
  document
    .querySelectorAll(".grid-cell")
    .forEach((cell) => (cell.innerHTML = ""));
}

function gameTurnManager() {
  if (gameActive) {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();
  }
}

function gameCheckResult() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const winCondition of winningConditions) {
    let a = cellsStatus[winCondition[0]];
    let b = cellsStatus[winCondition[1]];
    let c = cellsStatus[winCondition[2]];

    if (a != "" && b != "" && c != "") {
      if (a == b && b == c) {
        gameStatus.innerHTML = winMessage();
        gameActive = false;
        return;
      }
    }
  }

  //check for draw

  if (!cellsStatus.includes("")) {
    gameStatus.innerHTML = drawMessage();
    gameActive = false;
  }
}
