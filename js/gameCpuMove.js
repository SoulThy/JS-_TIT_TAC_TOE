function gameCpuMove() {
  if (gameActive === false) return;

  let cellsAvailabe = [];
  cellsStatus.forEach((x, index) => {
    if (x === "") {
      cellsAvailabe.push(index);
    }
  });
  //first AI move
  winConditions = winningConditions();
  console.log(winConditions.length);
  if (winConditions.length === 0) {
    console.log("The move is going to me completely random");
    chooseCell(cellsAvailabe);
  } else {
    chooseCell(winConditions);
    // 1) have to check if the AI has a possible winning condition (could be multiple).
    // 2) if there is no AI winning condition, then check for the opponent winnin conditions and deny it (could be multiple).
    // 3) else place in a favorable spot the "O".
  }
}

function chooseCell(cellsAvailabe) {
  rngValue = Math.floor(Math.random() * cellsAvailabe.length);
  cellsStatus[cellsAvailabe[rngValue]] = "O";
  document.querySelector(
    `[grid-cell-index="${cellsAvailabe[rngValue]}"]`
  ).innerHTML = "O";
}

function winningConditions() {
  const winConditions = []; //array that is return, contains spots where to place "O"
  const blueprint_WinConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const symbolWinConditions = blueprint_WinConditions.map((elem) => [...elem]); //array of blueprint_WinConditions converted to symbols
  symbolWinConditions.forEach((winCondition) => {
    winCondition[0] = cellsStatus[winCondition[0]];
    winCondition[1] = cellsStatus[winCondition[1]];
    winCondition[2] = cellsStatus[winCondition[2]];
  });

  symbolWinConditions.forEach((winCondition, index) => {
    if (
      winCondition.includes("") &&
      !winCondition.includes("X") &&
      winCondition.includes("O")
    ) {
      blueprint_WinConditions[index]
        .filter(
          (value) =>
            value != blueprint_WinConditions[index][winCondition.indexOf("O")]
        )
        .forEach((elem) => {
          winConditions.push(elem);
        });
    }
  });
  return winConditions;
}
