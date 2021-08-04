/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  if(n == k) {
    let cur = [];
    for(let i = 1; i <= n; ++i) {
      cur.push(i);
    }

    return [cur];
  }

  let result = [];
  if(k == 1){
    for(let i = 1; i <= n; ++i) {
      result.push([i]);
    }
    return result;
  }

  let subResult1 = combine(n - 1, k);
  for(let i = 0; i < subResult1.length; ++i) {
    result.push(subResult1[i]);
  }

  let subResult2 = combine(n - 1, k - 1);
  for(let i = 0; i < subResult2.length; ++i) {
    subResult2[i].push(n);
    result.push(subResult2[i]);
  }

  return result;
};

console.log(combine(4,2))