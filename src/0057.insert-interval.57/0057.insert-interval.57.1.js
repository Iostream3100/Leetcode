/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let l = 0;
  let r = intervals.length;
  let mid;
  while(l < r) { //find the first position where the left boundary is greater than the left bounndary of the target
    mid = Math.floor((l + r) / 2);
    if(intervals[mid][1] < newInterval[0]) l = mid + 1;
    else r = mid;
  }
  let result = [];
  for(let i = 0; i < l; ++i) {
    result.push(intervals[i]);
  } 
  let start = newInterval[0];
  let end = newInterval[1];
  while(l < intervals.length && intervals[l][0] <= end) {//merge intervals
    start = Math.min(start, intervals[l][0]);
    end = Math.max(end, intervals[l][1]);
    l++;
  }
  result.push([start, end]);
  for(let i = l; i < intervals.length; ++i) {
    result.push(intervals[i]);
  }
  return result;
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));