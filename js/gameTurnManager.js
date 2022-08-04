function gameTurnManager() {
  if (gameActive === false) return;

  if (aiCheckbox.checked === false) {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();
  } else {
    let cellsAvailabe = [];
    cellsStatus.forEach((x, index) => {
      if (x === "") {
        cellsAvailabe.push(index);
      }
    });
    if (cellsStatus.filter((x) => x == "X").length == 1) {
      rngValue = Math.floor(Math.random() * cellsAvailabe.length); //WRONG
      cellsStatus[cellsAvailabe[rngValue]] = "O";
      document.querySelector(
        `[grid-cell-index="${cellsAvailabe[rngValue]}"]`
      ).innerHTML = "O";
    }
  }
}
