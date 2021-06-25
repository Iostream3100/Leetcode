/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length == 1) return nums;

  for(let i = nums.length - 2; i >= 0; i--) {
    let minUpperPos = -1;
    for(let j = i + 1; j < nums.length; ++j) {//find the minimal upper bound
      if(nums[j] > nums[i] && 
        (minUpperPos == -1 || nums[minUpperPos] > nums[j])) {
          minUpperPos = j;
      }
    }
    if(minUpperPos != -1) {
      let tmp = nums[minUpperPos];
      nums[minUpperPos] = nums[i];
      nums[i] = tmp;

      nums.splice(i + 1, nums.length - i - 1, ...nums.slice(i + 1, nums.length).sort((a, b) => a - b));
      return nums;
    }
  }

  return nums.sort((a, b) => a - b);
};