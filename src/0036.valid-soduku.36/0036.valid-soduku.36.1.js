/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for(let i = 0; i < 9; ++i) {// check row
    let row = [];
    for(let j = 0; j < 9; ++j) {
      if(board[i][j] == '.') continue;

      if(row[board[i][j]]) return false;
      row[board[i][j]] = true;
    }
  }

  for(let i = 0; i < 9; ++i) {// check column
    let col = [];
    for(let j = 0; j < 9; ++j) {
      if(board[j][i] == '.') continue;

      if(col[board[j][i]]) return false;
      col[board[j][i]] = true;
    }
  }

  let delta = [0, 1, 2];
  for(let i = 0; i < 3; ++i) //check each sub-box
    for(let j = 0; j < 3; ++j) {
      let exist = [];
      for(let k = 0; k < 3; ++k)
        for(let l = 0; l < 3; ++l) {
          let x = 3 * delta[i] + delta[k];
          let y = 3 * delta[j] + delta[l];
          if(board[x][y] == '.') continue;

          if(exist[board[x][y]]) return false;
          exist[board[x][y]] = true;
        }
    }

  return true;
};

console.log(isValidSudoku([
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]]));