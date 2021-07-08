/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let x = 0;
  let y = -1;
  let dx = [0, 1, 0 , -1];
  let dy = [1, 0, -1 , 0];
  let direc = 0;//direction 0: right, 1: down, 2: left, 3: up
  let StepLength = [matrix[0].length, matrix.length - 1];//0: left & right, 1: up & down
  let result = [];
  while(result.length < matrix.length * matrix[0].length) {
    for(let i = 0; i < StepLength[direc % 2]; ++i) {
      x += dx[direc];
      y += dy[direc];
      result.push(matrix[x][y]);
    }
    StepLength[direc % 2]--;//shorten the step length
    direc = (direc + 1) % 4;
  }

  return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
