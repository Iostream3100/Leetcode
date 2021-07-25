/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev = 1;
  let cur = 1;
  let curTmp;
  for(let i = 1; i < n; ++i) {
    curTmp = cur;
    cur += prev;
    prev = curTmp;
  }

  return cur;
};

console.log(climbStairs(4))