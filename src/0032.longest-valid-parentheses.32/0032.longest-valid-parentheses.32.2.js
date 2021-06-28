/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  if(s.length <= 1) return 0;

  let l = 0;
  while(l < s.length - 1 && s[l]!='(') l++;//find the first left parentheses
  if(l == s.length - 1) return 0;
  let r = l + 1;

  let cnt = 1;
  let maxLen = 0;

  while(r < s.length) {
    cnt = (s[r] == '(') ? cnt + 1 : cnt - 1;

    // console.log(l,r,cnt, maxLen);
    if(cnt < 0) { //reset two pointers
      l = r + 1;
      while(s[l] != '(' && l < s.length - 1) l++;
      r = l + 1;
      cnt = (s[l] == '(') ? 1 : -1;
    } else {
      if(cnt == 0) { //update max length
        maxLen = Math.max(maxLen, (r - l + 1));
      }
      r++;
    } 
  }

  
  if(cnt > 0) {
    r = s.length - 1;
    while(r > l && s[r] != ')') r--; //find the first ')' from the end
    let rCnt = 0;
    for(let i = r; i >= l; --i) {
      rCnt = (s[i] == ')') ? rCnt + 1 : rCnt - 1;
      if(rCnt < 0) break;
      if(rCnt == 0) {
        maxLen = Math.max(maxLen, (r - i + 1));
      }
    }
  }

  s = s.split("").reverse().join("");
  let li = [];
  for(let i = 0; i < s.length; i++) {
    li.push(s[i] = s[i] == '(' ? ')' : '(')
  }
  s = li.join("");

  l = 0;
  while(l < s.length - 1 && s[l]!='(') l++;//find the first left parentheses
  r = l + 1;

  cnt = 1;

  while(r < s.length) {
    cnt = (s[r] == '(') ? cnt + 1 : cnt - 1;

    // console.log(l,r,cnt, maxLen);
    if(cnt < 0) { //reset two pointers
      l = r + 1;
      while(s[l] != '(' && l < s.length - 1) l++;
      r = l + 1;
      cnt = (s[l] == '(') ? 1 : -1;
    } else {
      if(cnt == 0) { //update max length
        maxLen = Math.max(maxLen, (r - l + 1));
      }
      r++;
    } 
  }

  if(cnt > 0) {
    r = s.length - 1;
    while(r > l && s[r] != ')') r--; //find the first ')' from the end
    let rCnt = 0;
    for(let i = r; i >= l; --i) {
      rCnt = (s[i] == ')') ? rCnt + 1 : rCnt - 1;
      if(rCnt < 0) break;
      if(rCnt == 0) {
        maxLen = Math.max(maxLen, (r - i + 1));
      }
    }
  }
  
  return maxLen;
};

console.log(longestValidParentheses("()"));
// console.log(longestValidParentheses(""));
// console.log(longestValidParentheses("(()"));
// console.log(longestValidParentheses("(())"));
// console.log(longestValidParentheses("()))"));
// console.log(longestValidParentheses("())((())))"));
// console.log(longestValidParentheses(")()())"));
// // console.log(longestValidParentheses("()(()"));
// console.log(longestValidParentheses("(())("));
// console.log(longestValidParentheses("()(())("));
// console.log(longestValidParentheses("()(()"));
// console.log(longestValidParentheses("((((())()"));
// console.log(longestValidParentheses("((()()(()((()"));
// console.log(longestValidParentheses("((()()(()((()".split("").reverse().join("")))


// let s ="((()";
// s = s.split("").reverse().join("");
// let l = [];
// console.log(s);
// for(let i = 0; i < s.length; i++) {
//   l.push(s[i] = s[i] == '(' ? ')' : '(')
// }
// console.log(l.join(""));