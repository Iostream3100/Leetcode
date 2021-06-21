/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if(n == 0) {
    return [""];
  }
  if(n == 1){
    return ["()"];
  }
  let parList = [];
  let lList, rList;
  for(let l = 0; l < n; ++l) { // (l)r
    lList = generateParenthesis(l);
    rList = generateParenthesis(n - 1 - l);
    for(let i of lList) {
      for(let j of rList) {
        parList.push('(' + i + ')' + j);
      }
    }
  }

  return parList;
};

console.log(generateParenthesis(3));