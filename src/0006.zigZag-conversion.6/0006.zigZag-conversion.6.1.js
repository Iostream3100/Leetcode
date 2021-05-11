/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let charList = [];
  for(let i = 0; i < numRows; i++) {
    charList[i] = [];
  }

  for(let i = 0; i < s.length; i++) {
    let remainder = 0;
    if(2 * numRows - 2 > 0) { //edge condition: numRows == 0
      remainder = i % (2 * numRows - 2);
    }
    if(remainder >= numRows) {
      remainder = 2 * numRows - 2 - remainder;
    }
    charList[remainder].push(s[i]);
  }

  let convertedString = "";
  for(let i = 0; i < numRows; i++) {
    convertedString = convertedString + charList[i].join('');
  };

  return convertedString;
}