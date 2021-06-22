/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let len = 0;
  for(let i = 0; i < nums.length; ++i) {
    if(i != nums.length - 1 && nums[i + 1] == nums[i]) {
      continue;
    }

    nums[len] = nums[i];
    len++;
  }
  
  return len;
};