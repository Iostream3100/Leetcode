/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
  let add = [];
  let diff = [];
  let row = [];
  return search(add, diff ,row ,0 , n);
};

function search(add, diff, row ,cur ,n) {
  if(cur == n) return 1;
  let result = 0;
  for(let i = 0; i < n; ++i) {
    if(!add[cur + i] && !diff[n + cur - i] && !row[i]) {
      add[cur + i] = true;
      diff[n + cur - i] = true;
      row[i] = true;
      let nextResult = search(add, diff, row ,cur + 1 ,n);
      result += nextResult;
      add[cur + i] = false;
      diff[n + cur - i] = false;
      row[i] = false;
    }
  }
  return result;
}