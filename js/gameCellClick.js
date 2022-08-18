isGameStarted = false;

function gameCellClick(clickedCellEvent) {
  if (isGameStarted === false) {
    aiCheckbox.toggleAttribute("disabled", true);
    isGameStarted = true;
  }

  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = clickedCell.getAttribute("grid-cell-index");

  if (cellsStatus[clickedCellIndex] != "" || !gameActive) {
    return;
  }

  cellsStatus[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;

  gameCheckResult();
  swapCurrentPlayer();
  if (aiCheckbox.checked && gameActive === true) {
    gameCpuMove();
    gameCheckResult();
    swapCurrentPlayer();
  }
}

function swapCurrentPlayer() {
  if (gameActive === false) return;
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  gameStatus.innerHTML = currentPlayerTurn();
}
