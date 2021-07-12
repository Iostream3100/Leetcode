/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let nums = []; //remaining numbers
  let permuteSum = 1;// total number of current permutation
  for(let i = 1; i <= n; ++i) {
    nums.push(i);
    permuteSum *= i;
  }

  let result = [];
  k -= 1;
  for(let i = 0; i < n; ++i) {
    permuteSum /= n - i;
    let curNumIndex = Math.floor(k / permuteSum);
    result.push(nums[curNumIndex]);
    nums.splice(curNumIndex, 1);
    k = k % permuteSum;
  }

  return result.join("");
};

console.log(getPermutation(4, 9))
console.log(getPermutation(3, 3))