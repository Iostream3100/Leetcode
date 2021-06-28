/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let f = []; //f[i]: length of the longest valid parentheses end with s[i]
  for(let i = 0; i < s.length; ++i) f.push(0);

  let maxLen = 0;
  for(let i = 1; i < s.length; i++) {
    if(s[i] == '(') continue;
    if(s[i - 1] == '('){//"*****()"
      f[i] = i >= 2 ? f[i - 2] + 2 : 2;
    } else {
      let len = f[i - 1];
      let l = i - len - 1;
      if(len && l >= 0 && s[l] == '(') {//"(()())"
        f[i] = l - 1 >= 0 ? len + 2 + f[l - 1] : len + 2;//'()(()())
      }
    }
    maxLen = Math.max(maxLen, f[i]);
    // console.log(i, f[i]);
  }
  
  return maxLen;
};

console.log(longestValidParentheses("()(()"));
console.log(longestValidParentheses("(()())"));