/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let triplets = [];
  if(nums.length < 3) {
    return triplets;
  }

  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length - 2; i++) {
    if(nums[i] > 0){
      return triplets;
    }
    if(i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    for(let l = i + 1, r = nums.length - 1; l < r; ) {
      let sum = nums[i] + nums[l] + nums[r];
      if(sum < 0) {
        l++;
      } else if(sum > 0) {
        r--;
      } else {
        triplets.push([nums[i], nums[l], nums[r]]);
        do {
          l++;
        } while(l < r && nums[l] == nums[l - 1])
        do {
          r--;
        } while(l < r && nums[r] == nums[r + 1])
      }
    }
  }

  return triplets;
};

// console.log(threeSum([-2,0,0,2,2]));

// console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
// console.log(threeSum([-1,0,1,2,-1,-4]));
// console.log(threeSum([]));
// console.log(threeSum([0]));
