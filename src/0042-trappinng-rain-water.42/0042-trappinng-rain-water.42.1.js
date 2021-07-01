/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let maxLeft = []; //maxLeft[i] max height from left to i
  let maxRight = []; //maxRight[i] max height from right to i
  maxLeft[0] = height[0];
  for(let i = 1; i < height.length; ++i) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
  }
  maxRight[height.length - 1] = height[height.length - 1];
  for(let i = height.length - 2; i >= 0; --i) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i]);
  }

  let waterAmount = 0;
  for(let i = 1; i < height.length - 1; ++i) {
    let curWaterAmount = Math.min(maxRight[i], maxLeft[i]) - height[i];
    if(curWaterAmount > 0) waterAmount += curWaterAmount;
  }

  return waterAmount;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([4,2,0,3,2,5]))