/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  console.log(nums);
  if(nums.length == 1) return [nums];
  let cur = nums[nums.length - 1];
  nums.pop();
  let ansList = permute(nums);
  let result = [];
  for(let i = 0; i < ansList.length; ++i) {
    for(let j = 0; j <= ansList[i].length; ++j) {
      let l = ansList[i].slice(0, j);
      l.push(cur);
      let r = ansList[i].slice(j, ansList.length);
      result.push(l.concat(r));
    }
  }

  return result;
};

console.log(permute([1,2,3]));
