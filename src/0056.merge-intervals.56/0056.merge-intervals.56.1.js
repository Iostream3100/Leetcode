/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let result = [];
  for(let i = 0; i < intervals.length; ++i) {
    let curStart = intervals[i][0];
    let curEnd = intervals[i][1];
    while(i + 1 < intervals.length && intervals[i + 1][0] <= curEnd) {
      curEnd = Math.max(curEnd, intervals[i + 1][1]);
      i++;
    }

    result.push([curStart, curEnd]);
  }

  return result;
};

console.log(merge([[2,6],[8,10],[15,18], [1,3]]));
