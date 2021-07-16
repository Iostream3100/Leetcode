/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if(obstacleGrid[0][0] 
  || obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]) {
    return 0;
  }
  let f = [1];
  for(let i = 1; i < obstacleGrid[0].length; ++i) {
    f[i] = obstacleGrid[0][i] == 1 ? 0 : f[i - 1];
  }

  for(let i = 1; i < obstacleGrid.length; ++i) {
    for(let j = 0; j < obstacleGrid[0].length; ++j) {
      if(obstacleGrid[i][j]) f[j] = 0;
      else if(j > 0) f[j] += f[j - 1];
    }
  }
  return f[obstacleGrid[0].length - 1];
};

