/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  if(nums[l] == target) return l;
  if(nums[r] == target) return r;
  while(l < r) {
    let mid = Math.floor((l + r) / 2);
    if(nums[mid] > nums[r]) l = mid + 1;
    else r = mid;
  }
  let k = l;

  l = 0;
  r = nums.length - 1;
  while(l < r) {
     let mid = Math.floor((l + r) / 2);
     if(nums[(mid + k) % nums.length] < target) l = mid + 1;
     else r = mid;
  }
  
  if(nums[(l + k) % nums.length] == target) return (l + k) % nums.length;
  return -1;
};

console.log(search([4,5,6,7,0,1,2],3))
console.log(search([4,5,6,7,0,1,2],6))
console.log(search([4,5,6,7,0]))
console.log(search([4,5,6,7,0,1]))
console.log(search([1,2,3,4]))
console.log(search([0,1]))
console.log(search([1,0]))

