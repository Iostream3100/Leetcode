/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix2 = function(n) {
  let x = 0;
  let y = -1;
  let dx = [0, 1, 0 , -1];
  let dy = [1, 0, -1 , 0];
  let direc = 0;//direction 0: right, 1: down, 2: left, 3: up
  let StepLength = [n, n - 1];//0: left & right, 1: up & down
  let matrix = [];
  let cnt = 1;
  for(let i = 0; i < n; ++i) matrix[i] = [];
  while(cnt <= n * n) {
    for(let i = 0; i < StepLength[direc % 2]; ++i) {
      x += dx[direc];
      y += dy[direc];
      matrix[x][y] = cnt++;
    }
    StepLength[direc % 2]--;//shorten the step length
    direc = (direc + 1) % 4;
  }

  return matrix;
};
var generateMatrix = function(n) {
  let x = 0;
  let y = -1;
  let dx = [0, 1, 0 , -1];
  let dy = [1, 0, -1 , 0];
  let direc = 0;//direction 0: right, 1: down, 2: left, 3: up
  let StepLength = [n, n - 1];//0: left & right, 1: up & down
  let matrix = [];
  let cnt = 1;
  for(let i = 0; i < n; ++i) matrix[i] = [];
  while(cnt <= n * n) {
    for(let i = 0; i < StepLength[direc % 2]; ++i) {
      x += dx[direc];
      y += dy[direc];
      matrix[x][y] = cnt++;
    }
    StepLength[direc % 2]--;//shorten the step length
    direc = (direc + 1) % 4;
  }

  return matrix;
};

console.log(generateMatrix(4))