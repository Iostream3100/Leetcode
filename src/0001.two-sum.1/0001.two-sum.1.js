/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let rest = target - nums[i];
    for (let j = 0; j<nums.length; j++) {
      if (i != j && rest == nums[j] ) {
        return [i,j];
      }
    }
  }
};