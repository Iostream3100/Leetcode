/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function(nums) {
//   let ht = {};//not constant extra space!!!
//   let min = 1;
//   for(let i of nums) {
//     if(i <= 0 ) continue;
//     ht[i] = true;
//     while(ht[min]) min++;
//   }
//   return min;
// };
var firstMissingPositive = function(nums) {
  let min = 1;
  let n = nums.length;
  for(let i = 0; i < n; ++i) {
    if(nums[i] <= 0 || nums[i] > n) {//set impossilbe numbers to 0
      nums[i] = 0;
    }
  }

  nums[n] = 0;
  for(let i = 0; i < n; ++i) {
    if(nums[i] == 0) continue;
    let cur = nums[i]; 
    nums[i] = 0;
    while(nums[cur] != 0 && nums[cur] != cur) { //set num[i] = i
      let next = nums[cur];
      nums[cur] = cur;
      cur = next;
    }
    nums[cur] = cur;
  }

  for(let i = 1; i <= n; ++i) {
    if(nums[i] != i) return i;
  }
  return n + 1;
};

console.log(firstMissingPositive([1,2,3]))
console.log(firstMissingPositive([1,1]))

