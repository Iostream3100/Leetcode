/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let letter = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };

  if(digits == "") {
    return [];
  }

  let comb = (letter[digits[0]].split(""));

  for(let i = 1; i < digits.length; i++){
    let currentComb = [];
    let letterList = letter[digits[i]].split("");
    for(let j = 0; j < letterList.length; j++) {
      for(let k = 0; k < comb.length; k++) {
        currentComb.push(comb[k] + letterList[j]);
      }
    }
    comb = currentComb;
  }

  return comb;
};


console.log(letterCombinations("23"));

