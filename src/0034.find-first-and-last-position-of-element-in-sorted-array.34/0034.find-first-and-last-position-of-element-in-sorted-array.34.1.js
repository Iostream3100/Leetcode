/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if(!nums.length) return [-1, -1];

  let ans = [];
  let l = 0;
  let r = nums.length - 1;
  while(l < r) { //find the first position
    let mid = Math.floor((l + r) / 2);
    if(nums[mid] < target) l = mid + 1;
    else r = mid;
  }
  ans.push(nums[l] == target ? l : -1);

  l = 0;
  r = nums.length - 1;
  while(l < r) {
    let mid = Math.floor((l + r + 1) / 2);
    if(nums[mid] > target) r = mid - 1;
    else l = mid;
  }
  ans.push(nums[l] == target ? l : -1);
  
  return ans;
};