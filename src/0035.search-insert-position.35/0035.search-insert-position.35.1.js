/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while(l < r) {
    let mid = Math.floor((l + r) / 2);
    if(nums[mid] < target) l = mid + 1;
    else r = mid;
  }
  
  if(nums[l] >= target) return l;
  else return l + 1;
};