function gameRestart() {
  gameActive = true;
  currentPlayer = "X";
  cellsStatus = ["", "", "", "", "", "", "", "", ""];
  gameStatus.innerHTML = currentPlayerTurn();
  document
    .querySelectorAll(".grid-cell")
    .forEach((cell) => (cell.innerHTML = ""));
  aiCheckbox.toggleAttribute("disabled", false);
  isGameStarted = false;
}
