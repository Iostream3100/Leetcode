/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits[digits.length - 1] += 1;
  let carry = 0;
  for(let i = digits.length - 1; i >= 0; --i) {
    digits[i] += carry;
    carry = Math.floor(digits[i] / 10);
    if(!carry) return digits;
    digits[i] = digits[i] % 10;
    
  }
  if(carry) digits.unshift(1);
  return digits;
};

console.log(plusOne([9]))