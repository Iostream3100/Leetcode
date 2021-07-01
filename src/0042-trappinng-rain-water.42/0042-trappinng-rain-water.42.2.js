/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];
  let l = 1;
  let r = height.length - 1;
  let waterAmount = 0;
  
  while(l <= r) {
    if(height[l] >= maxLeft) {//update maxLeft
      maxLeft = height[l];
      l++;
      continue;
    }
    if(height[r] >= maxRight) {//update maxRight
      maxRight = height[r];
      r--;
      continue;
    }
    if(maxLeft < maxRight) {
      waterAmount += maxLeft - height[l];
      l++;
    } else {
      waterAmount += maxRight - height[r];
      r--;
    }
  }

  return waterAmount;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));