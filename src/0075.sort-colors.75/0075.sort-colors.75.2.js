/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let red = 0;
  for(let i = 0; i < nums.length; ++i) {// put white colors to the front
    if(nums[i] == 0) {
      nums[i] = nums[red];
      nums[red] = 0;
      red++;
    }
  }

  let white = 0;
  for(let i = red; i < nums.length; ++i) {// put red colors to the front
    if(nums[i] == 1) {
      nums[i] = nums[red + white];
      nums[red + white] = 1;
      white++;
    }
  }
};

sortColors([1,2,1])