/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  if(s.length < t.length) return "";
  let l = 0;
  let r = 0;
  let minLength = 1 << 30;
  let result = "";
  let cnt = {};
  for(let char of t) {
    cnt[char] = cnt[char] === undefined ? 1 : cnt[char] + 1;
  }

  while(r < s.length) {
    if(cnt[s[r]] === undefined) { //current char is not in t
      r++;
      continue;
    }
    cnt[s[r]]--;
    r++;
    if(isValid(cnt)) {//found an answer
      while(l < r && (cnt[s[l]] === undefined || cnt[s[l]] < 0)){
        if(cnt[s[l]] < 0) cnt[s[l]]++;
        l++;
      }
      if(r - l < minLength) {
        minLength = r - l;
        result = s.substring(l, r);
      }
    }
  }
  
  return result;
};

function isValid(cnt) {
  for(let i in cnt) {
    if(cnt[i] > 0) return false;
  }
  return true;
}

console.log(minWindow("ADOBECODEBANC","ABC"))