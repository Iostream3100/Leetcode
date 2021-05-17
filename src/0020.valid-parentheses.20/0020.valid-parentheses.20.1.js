/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = new Map([
    ['(', ')'], 
    ['[', ']'],
    ['{', '}'],
  ]);
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(map.has(s[i])) { //left parenthesis
      stack.push(s[i]);
    } else { //right parenthesis
      if(stack.length == 0 || map.get(stack.pop()) != s[i]) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
console.log(isValid("{[]}"));
