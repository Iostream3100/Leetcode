/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if(dividend == 0) return 0;
  let lowerBound = -Math.pow(2,31);
  let upperBound = Math.pow(2,31) - 1;
  if(dividend == lowerBound && divisor == -1) {
    return upperBound;
  }
  
  let isPositive = true;
  if (dividend > 0 != divisor > 0) isPositive = false;

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let result = 0;

  while(dividend >= divisor) {
    let base = divisor;
    let count = 1;
    while(base <= (dividend >> 1)) {
      base = base << 1;
      count = count << 1;
    }
    result += count;
    dividend -= base;
  }

  if(!isPositive) result = - result;
  return result;
};

console.log(divide(-2147483648, 1));
console.log(divide(1,1));
console.log(divide(10, 3))
console.log(divide(7,-3))
console.log(7/-3)