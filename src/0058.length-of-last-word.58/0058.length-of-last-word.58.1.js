/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let l = s.split(" ");
  for(let i = l.length - 1; i >= 0; --i) {
    if(l[i].length != 0) return l[i].length;
  }

  return 0;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" "));


