/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let f = [];
  for(let i = 0; i <= word1.length; ++i) f.push([]);

  for(let i = 0; i <= word1.length; ++i) {
    for(let j = 0; j <= word2.length; ++j) {
      if(i == 0 || j == 0) {
        f[i][j] = i + j;
      } else {
        f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j], f[i][j - 1]) + 1;//replace, insert, delete
        if(word1[i - 1] == word2[j - 1]) {//match
          f[i][j] = Math.min(f[i][j], f[i - 1][j - 1]);
        }
      }
    }
  }

  return f[word1.length][word2.length];
};

console.log(minDistance("horse", "ros"));

