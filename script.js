// The N must be small then 28

const N = 8;
const QUEEN_BOX = 1;
const EMPTY_BOX = 0;

const board = initBoard();

function isSafe(board, row, col) {
  // check previous rows
  for (let x = 0; x <= col; x++) {
    if (board[row][x] === QUEEN_BOX) {
      return false;
    }
  }

  // check previous columns
  for (let y = 0; y <= row; y++) {
    if (board[y][col] === QUEEN_BOX) {
      return false;
    }
  }

  //  check left top angle boxes
  for (let x = row, y = col; x >= 0 && y >= 0; x--, y--) {
    if (board[x][y] === QUEEN_BOX) {
      return false;
    }
  }

  //  check right top angle boxes
  for (let x = row, y = col; x >= 0 && y < N; x--, y++) {
    if (board[x][y] === QUEEN_BOX) {
      return false;
    }
  }

  return true;
}
function initBoard() {
  return Array(N)
    .fill()
    .map(() => Array(N).fill(EMPTY_BOX));
}

function solveNQueens(board) {
  let solutionsCount = 0;

  return iterateOnBoard(board, 0, solutionsCount);
}

function iterateOnBoard(board, row, solutionsCount) {
  for (let column = 0; column < N; column++) {
    if (isSafe(board, row, column)) {
      board[row][column] = QUEEN_BOX;

      if (row === N - 1) {
        solutionsCount++;
      } else {
        solutionsCount = iterateOnBoard(board, row + 1, solutionsCount);
      }

      board[row][column] = EMPTY_BOX;
    }
  }

  return solutionsCount;
}

console.log(solveNQueens([...board]));
