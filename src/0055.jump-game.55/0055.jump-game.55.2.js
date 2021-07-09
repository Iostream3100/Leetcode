/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let i = 0;
  for(let reach = 0; i < nums.length && i <= reach; ++i) {
    reach = Math.max(reach, i + nums[i]);
  }
  return i == nums.length;
}


console.log(canJump([2,0,0]));