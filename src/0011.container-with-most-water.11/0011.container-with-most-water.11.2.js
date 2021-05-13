/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxHeight = 0;
  let minHeight = height[0];
  let minIndex = []; //minIndex[i]: min index of height i
  let maxIndex = []; //maxIndex[i]: max index of height i

  for(let i = 0; i < height.length; i++) {
    maxHeight = Math.max(maxHeight, height[i]);
    minHeight = Math.min(minHeight, height[i]);

    minIndex[height[i]] = (minIndex[height[i]] == undefined) ? 
      i : Math.min(minIndex[height[i]], i);
    maxIndex[height[i]] = (maxIndex[height[i]] == undefined) ? 
      i : Math.max(maxIndex[height[i]], i); 
  }
  // console.log(minIndex, maxIndex);

  let currentMaxIndex = maxIndex[maxHeight];
  let currentMinIndex = minIndex[maxHeight];
  let maxAreaValue = (currentMaxIndex - currentMinIndex) * maxHeight;

  for(let i = maxHeight - 1; i >= minHeight; i--) {
    if(minIndex[i] == undefined) {
      continue;
    }

    maxAreaValue = Math.max(maxAreaValue, 
      Math.abs(currentMaxIndex - maxIndex[i]) * i);
    maxAreaValue = Math.max(maxAreaValue, 
      Math.abs(currentMaxIndex - minIndex[i]) * i);
    maxAreaValue = Math.max(maxAreaValue, 
      Math.abs(currentMinIndex - maxIndex[i]) * i);
    maxAreaValue = Math.max(maxAreaValue, 
      Math.abs(currentMinIndex - minIndex[i]) * i);

    currentMaxIndex = Math.max(currentMaxIndex, maxIndex[i]);
    currentMinIndex = Math.min(currentMinIndex, minIndex[i]);

    maxAreaValue = Math.max(maxAreaValue,
      (currentMaxIndex - currentMinIndex) * i);
  }

  return maxAreaValue;
};

console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,2,1]));
