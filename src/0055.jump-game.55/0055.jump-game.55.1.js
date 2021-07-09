/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length == 1) return true;
  let i = 1;
  let curMax = nums[0];
  let nextMax = curMax;
  while(nextMax <= nums.length - 1 && i <= curMax) {
    console.log(i, nextMax);
    for(; i <= curMax && i < nums.length; ++i) {
      nextMax = Math.max(nextMax, i + nums[i]);
    }
    curMax = nextMax;
  }
  return nextMax >= nums.length - 1;
};

console.log(canJump([2,0,0]));