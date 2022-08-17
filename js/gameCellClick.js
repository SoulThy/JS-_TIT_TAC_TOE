isGameStarted = false;

function gameCellClick(clickedCellEvent) {

  if (isGameStarted === false) {
    aiCheckbox.toggleAttribute("disabled", true);
    isGameStarted = true;
    console.log("game is started");
  }

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
