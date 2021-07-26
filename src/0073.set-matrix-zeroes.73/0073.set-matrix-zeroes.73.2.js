/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let colIsZero = false;//set all matrix[i][0] to zero
  let rowIsZero = false;//set all matrix[0][j] to zero
  for(let i = 0; i < matrix.length; ++i) {
    for(let j = 0; j < matrix[0].length; ++j) {
      if(matrix[i][j] == 0) {
        if(i == 0) rowIsZero = true;
        if(j == 0) colIsZero = true;
        if(i != 0 && j != 0 ){
          matrix[i][0] = 0; //set row flag
          matrix[0][j] = 0; //set column flag
        }
      }
    }
  }

  for(let i = 1; i < matrix.length; ++i) {
    for(let j = 1; j < matrix[0].length; ++j) {
      if(matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if(colIsZero) {
    console.log("col zero")
    for(let i = 0; i < matrix.length; ++i) matrix[i][0] = 0;
  }
  if(rowIsZero) {
    console.log("row zero")
    for(let i = 0; i < matrix[0].length; ++i) matrix[0][i] = 0;
  }

  return matrix;
};

// console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
 console.log(setZeroes([[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]]));
// console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));