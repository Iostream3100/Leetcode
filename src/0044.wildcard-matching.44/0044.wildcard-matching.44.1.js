/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let f = [[]];//match[i][j]: true if s[0...i-1] can be matched by p[0...j-1]
  f[0][0] = true;
  for(let i = 0; i <= s.length; ++i) {
    f.push([]);
    for(let j = 1; j <= p.length; ++j) {
      if(p[j - 1] == '?') { //match any single char
        if(i > 0) f[i][j] = f[i - 1][j - 1];
      } else if(p[j - 1] == '*') { //match any sequence of chars
        for(let k = i; k >= 0; --k) {
          // console.log('----',k,j,f[k][j])
          if(f[k][j - 1] == true) {
            f[i][j] = true;
            break;
          }
        }
      } else if(i > 0 && p[j - 1] == s[i - 1]) { //match a certain char
        f[i][j] = f[i - 1][j - 1];
      }
    }
  }


  return f[s.length][p.length] == true;
};
console.log(isMatch('aa','*a'))
console.log(isMatch('abceb','*a*b'))