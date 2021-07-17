/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  s = s.toLowerCase();
  let eList = s.split('e');
  if(eList.length > 2) return false;//more than one 'e'
  else if(eList.length == 2) {
    let s2 = eList[1];
    if(s2[0] == '+' || s2[0] == '-') s2 = s2.substring(1);
    if(s2.length == 0 || !isDigit(s2)) return false; //one or more digits
    s = eList[0];
  }
  
  if(s[0] == '+' || s[0] == '-') s = s.substring(1);

  if(!s.length) return false;

  if(isDigit(s)) return true;//is an integer

  let dotList = s.split('.');
  if(dotList.length > 2) return false;
  for(let str of dotList) {
    if(str.length && !isDigit(str)) return false;
  }
  return (dotList[0].length + dotList[1].length) != 0;
};

function isDigit(s) {
  for(let i = 0; i < s.length; ++i) {
    if(s.charCodeAt(i) > '9'.charCodeAt(0) ||
    s.charCodeAt(i) < '0'.charCodeAt(0)) {
      return false;
    }
  }
  return true;
}
console.log(isNumber('0e'));