/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 == '0' || num2 == '0') return '0';
  num1 = num1.split("").reverse().join("");
  num2 = num2.split("").reverse().join("");

  let ans = [];
  for(let i = 0; i < num1.length; ++i) {
    let carry = 0;
    for(let j = 0; j < num2.length; ++j) {
      let cur = num1[i] * num2[j] + carry;
      if(ans[i + j]) cur += ans[i + j];
      ans[i + j] = cur % 10;
      carry = Math.floor(cur / 10);
    }
    if(carry) {
      if(ans[i + num2.length]) ans[i + num2.length] += carry
      else ans[i + num2.length] = carry;
    }
  }
  return ans.reverse().join("");
};

console.log(multiply("999999","999999"));

