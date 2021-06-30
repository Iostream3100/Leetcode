/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if(target == 0) return [[]];
  if(candidates.length == 0 || target < 0) return false;
  candidates.sort((a, b) => a - b); //can be optimized
  let curNum = candidates[candidates.length - 1];
  let cnt = 1;
  candidates.pop();
  while(candidates.length && candidates[candidates.length - 1] == curNum) {
    cnt++;
    candidates.pop();
  }
  let result = [];
  for(let i = 0; i <= cnt; ++i) {
    let ansList = combinationSum2(candidates, target - i * curNum);
    if(ansList) {
      for(let ans of ansList) {
        for(let j = 0; j < i; ++j) ans.push(curNum);
        result.push(ans);
      }
    }
  }

  for(let i = 0; i < cnt; ++i) candidates.push(curNum);//restore candidates
  return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5],8))

