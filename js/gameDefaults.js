let gameActive = true;
let currentPlayer = "X";
let cellsStatus = ["", "", "", "", "", "", "", "", ""];

const currentPlayerTurn = () => `It's [ ${currentPlayer} ]'s turn`;
const winMessage = () => `Player [ ${currentPlayer} ] has won!`;
const drawMessage = () => `Game ended in a draw!`;

const gameStatus = document.getElementById("game-status");

gameStatus.innerHTML = currentPlayerTurn();

document.getElementById("game-restart").addEventListener("click", gameRestart);

document
  .querySelectorAll(".grid-cell")
  .forEach((cell) => cell.addEventListener("click", gameCellClick));