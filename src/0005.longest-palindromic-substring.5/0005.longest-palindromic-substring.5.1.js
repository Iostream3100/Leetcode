/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let isPalindrome = [];
  for(let i = 0; i < s.length; i++) {
    isPalindrome[i] = [];
    isPalindrome[i][i] = true;
  }

  let longestSubstirng = s[0];
  for(let len = 2; len <= s.length; len++) { //length of tue substring
    for(let i = 0; i <= s.length - len; i++) { //starting point
      if(s[i] == s[i + len - 1] && (len == 2 || isPalindrome[i + 1][i + len - 2])) {
        isPalindrome[i][i + len - 1] = true;
        longestSubstirng = s.substr(i, len);
      }
    }
  }

  return longestSubstirng;
};


console.log(longestPalindrome('cbbd'));

