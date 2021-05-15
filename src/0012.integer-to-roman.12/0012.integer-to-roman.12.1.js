/**
 * @param {number} num
 * @return {string}
 */

function calcDigit(digit, char1, char5, char10) {
  if(digit == 4) {
    return char1 + char5;
  }
  if(digit == 9) {
    return char1 + char10;
  }

  return char5.repeat(digit >= 5) + char1.repeat(digit % 5);
}
var intToRoman = function(num) {
  let conversionMap = {
    1:     'I', 5:    'V',
    10:    'X', 50:   'L',
    100:   'C', 500:  'D',
    1000:  'M', 5000: '_V',
    10000: '_X'
  };
  let s = num.toString();
  let sConverted = "";
  for(let i = 0; i < s.length; i++) {
    sConverted = sConverted + calcDigit(Number(s[i]), 
      conversionMap[Math.pow(10, s.length - i - 1)],
      conversionMap[5 * Math.pow(10, s.length - i - 1)],
      conversionMap[Math.pow(10, s.length - i)]);
  }

  return sConverted;
};

console.log(intToRoman(1994));