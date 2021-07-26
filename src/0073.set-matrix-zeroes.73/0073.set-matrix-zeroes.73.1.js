/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rowIsZero = [];
  let colIsZero = [];
  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[0].length; ++j) {
      if(matrix[i][j] == 0) {
        rowIsZero[i] = true;
        colIsZero[j] = true;
      }
    }
  }

  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[0].length; ++j) {
      if(rowIsZero[i] || colIsZero[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
 console.log(setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]));
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));