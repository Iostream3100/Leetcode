/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let f = [];//f[i]; min number of jumps used to reach index i 
  f[0] = 0;
  for(let i = 0; i < nums.length; ++i) {
    for(let j = 1; j <= nums[i] && i + j < nums.length; ++j) {
      if(f[i + j]) f[i + j] = Math.min(f[i + j], f[i] + 1);
      else f[i + j] = f[i] + 1;
    }
  }
  return f[nums.length - 1];
};

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));