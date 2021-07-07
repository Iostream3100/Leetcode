/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let f = [];//f[i] max sub array ending with index i
//   f[0] = nums[0];
//   let result = f[0];
//   for(let i = 1; i < nums.length; ++i) {
//     f[i] = Math.max(nums[i], nums[i] + f[i - 1]);
//     result = Math.max(result, f[i]);
//   }

//   return result;
// };

var maxSubArray = function(nums) {
  let cur = nums[0];
  let result = cur;
  for(let i = 1; i < nums.length; ++i) {
    cur = Math.max(nums[i], nums[i] + cur);
    result = Math.max(result, cur);
  }

  return result;
};