function gameCpuMove() {
  chooseCell(winningConditions());
}

function chooseCell(cellsAvailable) {
  rngValue = Math.floor(Math.random() * cellsAvailable.length);
  cellsStatus[cellsAvailable[rngValue]] = "O";
  document.querySelector(
    `[grid-cell-index="${cellsAvailable[rngValue]}"]`
  ).innerHTML = "O";
}

function winningConditions() {
  const winConditions = []; //array that is returned, it contains the "open" spots where is possible to place the "O"

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

  for (const [index, winCondition] of symbolWinConditions.entries()) {
    if (
      //CASE => 2:"O" / 1:"" / 0:"X" {100% WINNING CASE}
      !winCondition.includes("X") &&
      winCondition.includes("") &&
      winCondition.filter((theO) => theO === "O").length === 2
    ) {
      winConditions.splice(0, winConditions.length);
      winConditions.push(
        blueprint_WinConditions[index][winCondition.indexOf("")]
      );
      return winConditions;
    } else if (
      //CASE => 1:"O" / 2:"" / 0:"X"  {NOT A 100% WINNING CASE}
      winCondition.includes("") &&
      !winCondition.includes("X") &&
      winCondition.includes("O")
    ) {
      winCondition.forEach((spot, secIndex) => {
        if (spot === "") {
          winConditions.push(blueprint_WinConditions[index][secIndex]);
        }
      });
    }
  }

  if (winConditions.length === 0) {
    //if the optimal win conditions don't exist, it will fill the array with all the open spots.
    cellsStatus.forEach((x, index) => {
      if (x === "") {
        winConditions.push(index);
      }
    });
  }

  return winConditions;
}
