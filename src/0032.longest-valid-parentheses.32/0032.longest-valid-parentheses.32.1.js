/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let maxLen = 0;
  for(let i = 0; i < s.length - 1; ++i) {
    let cnt = 0;
    for(let j = i; j < s.length; ++j) {
      if(s[j] == '(') cnt++;
      else cnt --;
      if(cnt < 0) break;
      if(cnt == 0 && maxLen < j - i + 1) maxLen = j - i + 1;
    }
  }
  
  return maxLen;
};