/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
  let add = [];
  let diff = [];
  let row = [];
  return search(add, diff ,row ,0 , n, []);
};

function search(add, diff, row ,cur ,n, curAns) {
if(cur == n) return curAns.length != 0; 
let result = 0;
for(let i = 0; i < n; ++i) {
  if(!add[cur + i] && !diff[n + cur - i] && !row[i]) {
    let ans = '.'.repeat(i).concat('Q').concat('.'.repeat(n - i - 1));
    curAns.push(ans);
    add[cur + i] = true;
    diff[n + cur - i] = true;
    row[i] = true;
    let nextResult = search(add, diff, row ,cur + 1 ,n, curAns);
      result += nextResult;
    curAns.pop();
    add[cur + i] = false;
    diff[n + cur - i] = false;
    row[i] = false;
  }
}
return result;
}