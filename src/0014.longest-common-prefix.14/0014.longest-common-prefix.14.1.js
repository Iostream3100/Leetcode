/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonLength = 0;
  let isCommon = true;
  for(let i = 0; i < strs[0].length; i++) {
    for(let j = 1; j < strs.length; j++) {
      if(i >= strs[j].length || strs[j][i] != strs[0][i]) {
        isCommon = false;
        break;
      }
    }

    if(isCommon) {
      commonLength ++;
    } else {
      break;
    }
  }
  
  return strs[0].slice(0, commonLength);
};



console.log(longestCommonPrefix(["","dog","racecar","car"]))