/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let triplets = [];

  for(let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;
    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if(sum < 0) {
        l++;
      } else if(sum > 0) {
        r--;
      } else {
        triplets.push([nums[i], nums[l], nums[r]]);
        do {
          l++;
        } while(l < nums.length - 1 && nums[l] == nums[l - 1])
        r--;
      }
    }
  }

  return triplets;
};

console.log(threeSum([-2,0,0,2,2]));

// console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([]));
// console.log(threeSum([0]));
