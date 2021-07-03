/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  if(nums.length == 1) return 0;
  let level = 0;
  let curMax = 0;
  let nextMax = 0;
  let i = 0;

  while(true) { //BFS
    level++;

    for(; i <= curMax; ++i) { //traverse current level
      nextMax = Math.max(nextMax, nums[i] + i); //update the range of next level
      if(nextMax >= nums.length - 1) return level; //if reach the end
    }
    curMax = nextMax;
  }

};
console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));