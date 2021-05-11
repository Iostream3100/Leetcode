/**
 * @param {number} x
 * @return {number}
 */

function cmp(s1, s2) { //s1>s2: 1; s1==s2:0; s1<s2:-1;
  let neg1 = false;
  let neg2 = false;
  if(s1[0] == '-') {
    neg1 = true;
    s1 = s1.slice(1);
  }
  if(s2[0] == '-') {
    neg2 = true;
    s2 = s2.slice(1);
  }

  if(neg1 != neg2) { //one of the two numbrs is negative
    return 1 - 2 * neg1;
  }

  if(s1.length != s2.length) {
    return (1 - 2 * neg1) * (s1.length > s2.length ? 1 : -1); //if two numbers are both negative, reverse the result
  }

  for(let i = 0; i < s1.length; i++) {//same length
    if(s1[i] != s2[i]) {
      return (1 - 2 * neg1) * (s1[i] > s2[i] ? 1 : -1);
    }
  }

  return 0;
}
var reverse = function(x) {
  let sMaxInt = (Math.pow(2, 31) - 1).toString();
  let sMinInt = (- Math.pow(2, 31)).toString();
  let s = x.toString();
  let neg = false;


  if(s[0] == '-') {
    neg = true;
    s = s.slice(1);
  }

  let sReversed = s.split("").reverse().join("");
  if(neg){
    sReversed = "-" + sReversed;
  }

  if(cmp(sReversed, sMaxInt) == 1 || cmp(sReversed, sMinInt) == -1) { //overflow
    return 0;
  }

  return sReversed;
};


console.log(reverse(1563847412))

