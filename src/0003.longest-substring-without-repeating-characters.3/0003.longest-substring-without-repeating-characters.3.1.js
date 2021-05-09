/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  let startPos = 0; //the starting position of the substring
  let lastPos = []; //lastPos[i]: last position of char i

  for(let i = 0; i < s.length; i++) {
    let charIndex = s.charCodeAt(i);//the ASCII code of the current char

    if (lastPos[charIndex] >= startPos) {
      let currentLength = i - startPos;
      if (maxLength < currentLength) {
        maxLength = currentLength;
      }

      startPos = lastPos[charIndex] + 1;
    }

    lastPos[charIndex] = i;
  }

  if (maxLength < s.length - startPos) { //no repeated characters
    maxLength = s.length - startPos;
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("dvdf"));

