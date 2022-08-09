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
