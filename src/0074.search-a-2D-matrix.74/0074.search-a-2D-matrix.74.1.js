/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let l = 0;
  let r = matrix.length * matrix[0].length - 1;
  let mid, midx, midy;
  while(l < r) {
    mid = (l + r) >> 1;
    midx = Math.floor(mid / matrix[0].length);
    midy = Math.floor(mid % matrix[0].length);
    if(matrix[midx][midy] == target) return true;
    else if(matrix[midx][midy] < target) l = mid + 1;
    else r = mid;
  }
  return matrix[Math.floor(l / matrix[0].length)][Math.floor(l % matrix[0].length)] == target;
};



console.log(searchMatrix([[1]], 2))