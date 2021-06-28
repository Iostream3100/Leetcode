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
  let mid;
  let startpos = -1;
  if(nums[0] < nums[nums.length - 1]) startpos = 0;
  else {
    while(l < r - 1) {
      mid = Math.floor((l + r + 1) / 2);
      // console.log(l,r,mid);
      if(nums[mid] < nums[mid - 1]) {
        startpos = mid;
        break;
      } else {
        if(nums[mid] > nums[0]) {
          l = mid + 1;
        } else {
          r = mid;
        }
      }
    }
    if(nums[l] < nums[l - 1]) startpos = l;
    if(nums[r] < nums[r - 1]) startpos = r;
  }

  console.log('startpos: ', startpos);
  if(target > nums[0]) {
    l = 0;
    r = (startpos - 1 + nums.length) % nums.length;
  } else {
    l = startpos;
    r = nums.length - 1;
  }
  while(l < r - 1) {
    mid = Math.floor((l + r) / 2);
    if(nums[mid] == target) return mid;
    if(nums[mid] > target) r = mid;
    else l = mid;
  }
  if(nums[l] == target) return l;
  if(nums[r] == target) return r;
  return -1;
};

console.log(search([4,5,6,7,0,1,2],3))
console.log(search([4,5,6,7,0,1,2],6))

// console.log(search([4,5,6,7,0]))
// console.log(search([4,5,6,7,0,1]))
// console.log(search([1,2,3,4]))
// console.log(search([0,1]))
// console.log(search([1,0]))

