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