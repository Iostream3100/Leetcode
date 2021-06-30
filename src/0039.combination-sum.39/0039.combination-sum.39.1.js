/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  if(target == 0) return [[]];
  if(candidates.length == 0 && target != 0) return false;
  // if(candidates[candidates.length - 1] > target) return false;
  let curNum = candidates[candidates.length - 1];
  let result = [];
  candidates.pop();
  for(let i = 0; i <= Math.floor(target / curNum); ++i) {
    let ansList = combinationSum(candidates, target - i * curNum);
    if(ansList) {
      for(let j = 0; j < ansList.length; ++j) {
        for(let k = 0; k < i; ++k) {
          ansList[j].push(curNum);
        }
      }
      for(let i of ansList) result.push(i);
    }
  }
  candidates.push(curNum);
  return result;
};

console.log(combinationSum([2,3,6,7],7))