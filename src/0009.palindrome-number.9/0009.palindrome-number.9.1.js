/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  if(x < 10) return true;

  let l = [];
  while(x >= 10) {
    l.push(x % 10);
    x = Math.floor(x / 10);
  }
  l.push(x);
    
  for(let i = 0; i < Math.floor(l.length / 2); i++) {
    if(l[i] != l[l.length - i - 1]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(123454321));