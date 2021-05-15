/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let conversionMap = {
    'I': 1,   'V': 5,
    'X': 10,  'L': 50,
    'C': 100, 'D': 500,
    'M': 1000
  };

  let convertedInt = 0;
  for(let i = 0; i < s.length; i++) {
    let currentBit = conversionMap[s[i]];
    if(i != s.length - 1) {
       let nextBit = conversionMap[s[i + 1]];
       if(currentBit < nextBit) {
         convertedInt += nextBit - currentBit;
         i++;
         continue;
       }
    }
    convertedInt += currentBit;
  }

  return convertedInt;
};

console.log(romanToInt("MCMXCIV"));