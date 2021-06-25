/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length == 1) return nums;

  for(let i = nums.length - 2; i >= 0; i--) {
    for(let j = nums.length - 1; j > i; j--) {//find the minimal upper bound
      if(nums[j] > nums[i]) {
        console.log(i,j);
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;

        for(let k = i + 1; k < (i + 1 + nums.length) / 2; k++) {
          let tmp = nums[k];
          nums[k] = nums[nums.length - k + i];
          nums[nums.length - k + i ] = tmp;
        }
        return nums;
      }
    }
  }

  return nums.reverse();
};

console.log(nextPermutation([1,2,3]));