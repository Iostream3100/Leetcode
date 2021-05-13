/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let nodeList = [];
  for(let i = 0; i < height.length; ++i) {
    nodeList.push({index: i, h: height[i]});
  }

  nodeList.sort(function(a, b) {
    return b.h - a.h;
  });

  let minIndex = nodeList[0].index;
  let maxIndex = nodeList[0].index;
  let maxAreaValue = 0;

  for(let i = 1; i < nodeList.length; i++) {
    let width = Math.max(Math.abs(nodeList[i].index - minIndex)
      , Math.abs(nodeList[i].index - maxIndex));
    maxAreaValue = Math.max(maxAreaValue, width * nodeList[i].h);

    minIndex = Math.min(minIndex, nodeList[i].index);
    maxIndex = Math.max(maxIndex, nodeList[i].index);
  }

  return maxAreaValue;
};

console.log(maxArea([4,3,2,1,4]));