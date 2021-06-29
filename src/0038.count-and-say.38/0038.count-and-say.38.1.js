/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if(n == 1) return "1";
  let s = countAndSay(n - 1);
  let ans = [];
  let cnt = 1;
  for(let i = 0; i < s.length; ++i) {
    if(i == s.length - 1 || s[i + 1] != s[i]) {
      ans.push(cnt);
      ans.push(s[i]);
      cnt = 1;
    } else {
      cnt++;
    }
  }

  return ans.join("");
};

