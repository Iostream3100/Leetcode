/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if(nums.length < 4) {
    return [];
  }

  nums.sort((a, b) => a - b);
  let rtn = [];
  let rtnSet = new Set();
  for(let i = 0; i < nums.length - 3; i++) {
    for(let j = i + 1; j < nums.length - 2; j++) {
      for(let l = j + 1, r = nums.length - 1; l < r; ) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if(sum < target) {
          l++;
        } else if(sum > target) {
          r--;
        } else {
          if(!rtnSet.has([nums[i], nums[j], nums[l], nums[r]].toString())) {
            rtnSet.add([nums[i], nums[j], nums[l], nums[r]].toString());
            rtn.push([nums[i], nums[j], nums[l], nums[r]]);
          }
          l++;
          r--;
        }
      }
    }
  }

  return rtn;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));