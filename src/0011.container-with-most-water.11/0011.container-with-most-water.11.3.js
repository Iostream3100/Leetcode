/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let maxAreaValue = 0;

  while(l < r) {
    maxAreaValue = Math.max(maxAreaValue, (r - l) * Math.min(height[l], height[r]));
    if(height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxAreaValue;
};

console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));
