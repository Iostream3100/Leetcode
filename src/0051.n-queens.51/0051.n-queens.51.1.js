/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let add = [];
  let diff = [];
  let row = [];
  return search(add, diff ,row ,0 , n, []);
};

function search(add, diff, row ,cur ,n, curAns) {
  if(cur == n) return [[...curAns]]; //deep copy
  let result = [];
  for(let i = 0; i < n; ++i) {
    if(!add[cur + i] && !diff[n + cur - i] && !row[i]) {
      let ans = '.'.repeat(i).concat('Q').concat('.'.repeat(n - i - 1));
      curAns.push(ans);
      add[cur + i] = true;
      diff[n + cur - i] = true;
      row[i] = true;
      let nextResult = search(add, diff, row ,cur + 1 ,n, curAns);
      for(let res of nextResult) {
        result.push(res);
      }
      curAns.pop();
      add[cur + i] = false;
      diff[n + cur - i] = false;
      row[i] = false;
    }
  }
  return result;
}

console.log(solveNQueens(4))
console.log(solveNQueens(1));