/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let x0 = (matrix.length - 1) / 2;
  let y0 = x0; //center point(x0, y0)

  for(let i = 0; i < x0; ++i) {
    for(let j = 0; j <= y0; ++j) { //starting point
      let x = i;
      let y = j;
      let last = matrix[x][y];
      for(let k = 0; k < 4; ++k) {
        let dx = x - x0;
        let dy = y - y0;
        x = x0 + dy;
        y = y0 - dx;
        let tmp = matrix[x][y];
        matrix[x][y] = last;
        last = tmp;
      }
    }
  }
  console.log(matrix);
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);
