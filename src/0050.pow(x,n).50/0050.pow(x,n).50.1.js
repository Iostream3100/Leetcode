/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(x == 0) return 0;
  if(n < 0) {
    n = -n;
    x = 1 / x;
  }
  if(n == 1) return x;
  if(n == 0) return 1;
  let ans = myPow(x, Math.floor(n / 2));
  if(n % 2) return ans * ans * x;
  else return ans * ans;
};