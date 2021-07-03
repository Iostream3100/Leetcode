/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let f = [];//f[i]: min number of jumps used to reach index i 
  f[0] = 0;
  for(let i = 0; i < nums.length; ++i) {
    for(let j = Math.min(nums[i], nums.length - 1 - i); j >= 1; --j) {
      if(f[i + j] === undefined || f[i + j] > f[i] + 1){
        f[i + j] = f[i] + 1;
      }
      else break;
    }
  }
  return f[nums.length - 1];
};

console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4]));

let f = [];
console.log(f[0] === undefined);