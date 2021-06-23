/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let next = [-1];
  for(let i = 1; i < needle.length; ++i) {
    let pos = i;
    while(pos != -1 && needle[next[pos]] != needle[i])
  }
};