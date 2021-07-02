/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  if(nums.length == 1) return [nums];
  let cur = nums[nums.length - 1];
  nums.pop();
  let ansList = permuteUnique(nums);
  let result = [];
  let set = {};
  for(let i = 0; i < ansList.length; ++i) {
    for(let j = 0; j <= ansList[i].length; ++j) {
      let l = ansList[i].slice(0, j);
      l.push(cur);
      let r = ansList[i].slice(j, ansList[i].length);//???
      let pmt = l.concat(r);
      if(!set.hasOwnProperty(pmt.toString())) {
        result.push(pmt);
        set[pmt.toString()] = true;
      }
    }
  }

  return result;
};

console.log(permuteUnique([1,3,2]))