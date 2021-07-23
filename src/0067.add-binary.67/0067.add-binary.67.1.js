/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(a.length < b.length) {
    let tmp = a;
    a = b;
    b = tmp;
  }
  let c = '';
  let carry = 0;
  for(let i = 0; i < a.length; ++i) {
    let cur = Number(a[a.length - 1 - i]) + carry;
    if(i < b.length) cur += Number(b[b.length - 1 - i]);
    c = (cur % 2).toString() + c;
    carry = cur >= 2 ? 1 : 0;
  }
  if(carry) c = '1' + c;
  return c;
};

console.log(addBinary("1010","1011"))