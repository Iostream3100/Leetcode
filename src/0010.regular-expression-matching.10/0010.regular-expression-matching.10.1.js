/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  s = ' ' + s;
  p = ' ' + p; //to match empty string
  let match = []; //match[i][j]: true if s[0..i] can be matched by p[0..j]

  for(let i = 0; i < s.length; i++) {
    match[i] = []; 
  }

  for(let i = 0; i < s.length; i++) {
    for(let j = 0; j < p.length; j++) {
      if(j != p.length - 1 && p[j + 1] == '*'){
        continue;
      }

      if(p[j] == '*') {
        if(p[j - 1] == '.') { //".*"
          match[i][j] = false;
          for(let k = i; k >= 0; k--) {
            if(match[k][j - 2] == true) {
              match[i][j] = true;
              break;
            }
          }
        } else { //"a*"
          if(match[i][j - 2] == true) { //* == 0
            match[i][j] = true;
          } else { //* >= 1
            match[i][j] = false;
            for(let k = i; k >= 1 && s[k] == p[j - 1]; k--) {
              if(match[k - 1][j - 2] == true) {
                match[i][j] = true;
                break;
              }
            }
          }
        }
      } else if(p[j] == '.') {
        match[i][j] = (i == 0) ? false: match[i - 1][j - 1];
      } else { //p[i] is a regular char
        if(p[j] == s[i]) {
          match[i][j] = (i == 0 && j == 0) ? true: match[i - 1][j - 1];
        } else {
          match[i][j] = false;
        }
      }
    }
  }

  return match[s.length - 1][p.length - 1];
};

// console.log(isMatch('ab','.*..'));
