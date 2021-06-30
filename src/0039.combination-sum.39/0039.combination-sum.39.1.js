/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if(target == 0) return [[]];
  if(candidates.length == 0 && target != 0) return false;
  // if(candidates[candidates.length - 1] > target) return false;
  let c = candidates[candidates.length - 1];
  let result = [];
  candidates.pop();
  for(let i = 0; i <= Math.floor(target / c); ++i) {
    let ans = combinationSum(candidates, target - i * c);
    if(ans) {
      for(let j = 0; j < ans.length; ++j) {
        for(let k = 0; k < i; ++k) {
          ans[j].push(c);
        }
      }
      for(let i of ans) result.push(i);
    }
  }
  candidates.push(c);
  return result;
};

console.log(combinationSum([2,3,6,7],7))