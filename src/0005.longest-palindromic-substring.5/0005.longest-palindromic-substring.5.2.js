/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longestSubstirng = s[0];
  for(let i = 0; i < s.length; i++) { //mid point
    for(let j = 2; j <= Math.min(2 * (i + 1), 2 * (s.length - i)); j += 2) { //the length of the substring is odd
      let leftPos = Math.floor(i - j / 2 + 1);
      let rightPos = Math.floor(i + j/2);
      if(s[leftPos] == s[rightPos]) {
        if(longestSubstirng.length < j) {
          longestSubstirng = s.substr(leftPos, j);
        }
      } else {
        break;
      }
    }

    for(let j = 3; j <= Math.min(2 * (i + 1), 2 * (s.length - i)); j += 2) { //the length of the substring is odd
      let leftPos = Math.floor(i - j / 2 + 1);
      let rightPos = Math.floor(i + j/2);
      if(s[leftPos] == s[rightPos]) {
        if(longestSubstirng.length < j) {
          longestSubstirng = s.substr(leftPos, j);
        }
      } else {
        break;
      }
    }
  }

  return longestSubstirng;
};

console.log(longestPalindrome('aaaaa'));

