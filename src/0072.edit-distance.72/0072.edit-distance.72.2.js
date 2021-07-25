/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let f = [];
  let fPrev;//fprev: f[i - 1][j - 1]
  let fPrevTmp;
  for(let i = 0; i <= word1.length; ++i) {
    for(let j = 0; j <= word2.length; ++j) {
      if(i == 0) f[j] = j;
      else if(j == 0) {
        f[j] = i;
        fPrev = i - 1;
      } else {
        fPrevTmp = f[j];
        f[j] = Math.min(f[j], f[j - 1]) + 1; //insert or delete a char
        if(word1[i - 1] == word2[j - 1]) { //match a char
          f[j] = Math.min(f[j], fPrev);
        } else { //replace a char
          f[j] = Math.min(f[j], fPrev + 1);
        }
        fPrev = fPrevTmp;
      }
    }
  }

  return f[word2.length];
};

console.log(minDistance("horse", "ros"));

