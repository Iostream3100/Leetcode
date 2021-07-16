/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let f = [];
  for(let i = 0; i < m; ++i) f[i] = 1;
  for(let i = 1; i < n; ++i) {
    for(let j = 1; j < m; ++j) {
      f[j] += f[j - 1];
    }
  }
  return f[m - 1];
};

console.log(uniquePaths(7,3))