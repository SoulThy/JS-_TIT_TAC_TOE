function gameTurnManager() {
  if (gameActive) {
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();
  }
}