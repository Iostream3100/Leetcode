/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let times = [];
  let tripletsSet = new Set();
  let tripletsList = [];
  nums.sort(function(a, b) {
    return a - b;
  });


  for(let i = 0; i < nums.length; i++) {
    if(nums[i] >= 0) {
      times[nums[i]] = times[nums[i]] ? times[nums[i]] + 1 : 1;
    }
  }

  for(let i = 0; i < nums.length && nums[i] < 0; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      let remainder = 0 - (nums[i] + nums[j]);
      if(remainder < nums[j]) {
        break;
      }
      if(remainder == nums[j] && times[remainder] >= 2 ||
        remainder > nums[j] && times[remainder]) {
        if(!tripletsSet.has([nums[i], nums[j], remainder].toString())) {
          tripletsSet.add([nums[i], nums[j], remainder].toString());
          tripletsList.push([nums[i], nums[j], remainder]);
        }
      }
    }
  }
  if(times[0] >= 3) {
    tripletsList.push([0, 0, 0]);
  }

  return tripletsList;
};

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
