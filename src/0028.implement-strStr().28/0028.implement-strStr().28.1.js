/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for(let i = 0; i <= haystack.length - needle.length; ++i) {
    if(haystack.slice(i, i + needle.length) == needle) return i;
  }
  return -1;
};

console.log(strStr("hello", "ll"));