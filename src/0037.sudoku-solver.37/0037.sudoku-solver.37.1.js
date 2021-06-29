/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let x = -1, y;
  for(let i = 0; i < 9; ++i) {
    if(x != -1) break;
    for(let j = 0; j < 9; ++j) {
      if(board[i][j] == '.') {
        x = i;
        y = j;
        break;
      }
    }
  }

  if(x == -1) return board;
  // console.log(x,y);
  
  let occupied = [];
  for(let i = 0; i < 9; i++) {//check row
    if(board[x][i] != '.') {
      occupied[board[x][i]] = true;
    }
  }
  for(let i = 0; i < 9; i++) {//check column
    if(board[i][y] != '.') {
      occupied[board[i][y]] = true;
    }
  }
  let x0 = 3 * Math.floor(x / 3);
  let y0 = 3 * Math.floor(y / 3);
  let delta = [0, 1, 2];
  for(let i = 0; i < 3; ++i) {//check subbox
    for(let j = 0; j < 3; ++j) {
      if(board[x0 + delta[i]][y0 + delta[j]] != '.') {
        occupied[board[x0 + delta[i]][y0 + delta[j]]] = true;
      }
    }
  }
  
  for(let i = 1; i <= 9; ++i) {
    if(!occupied[i]) {
      board[x][y] = i.toString();
      let ans = solveSudoku(board);
      if(ans) return ans;
      board[x][y] = '.';
    }
  }
  return false;
};

console.log(solveSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]));


