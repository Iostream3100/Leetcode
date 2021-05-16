/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for(let i = 0; i < nums.length - 2; i++) {
    for(let l = i + 1, r = nums.length - 1; l < r; ) {
      let sum = nums[i] + nums[l] + nums[r];
      if(Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if(sum < target) {
        l++;
      } else if(sum > target) {
        r--;
      } else {
        return target;
      }
    }
  }

  return closest;
};

