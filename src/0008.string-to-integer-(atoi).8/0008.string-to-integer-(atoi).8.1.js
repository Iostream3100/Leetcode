/**
 * @param {string} s
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

var myAtoi = function(s) {
  let sMaxInt = (Math.pow(2, 31) - 1).toString();
  let sMinInt = (- Math.pow(2, 31)).toString();
  let i = 0;
  let neg = false;
  let sNum = "";
  while(s[i] == ' ' && i < s.length){
    i++;
  }
  if(i == s.length){
    return 0;
  }

  if(s[i] == '+' || s[i] == '-') {
    if(s[i] == '-'){
      neg = true;
    }
    i++;
  }

  while(i < s.length && s[i] >= '0' && s[i] <= '9') {
    sNum = sNum + s[i];
    i++;
  }

  while(sNum.length && sNum[0] == '0') {
    sNum = sNum.slice(1);
  }
  if(sNum.length == 0){
    return 0;
  }

  if(neg) {
    sNum = '-' + sNum;
  }

  if(cmp(sNum, sMinInt) == -1) {
    return sMinInt;
  }
  if(cmp(sNum, sMaxInt) == 1) {
    return sMaxInt;
  }

  return sNum;
};

console.log(myAtoi("  -0k4"));

console.log(myAtoi("  -42"));
