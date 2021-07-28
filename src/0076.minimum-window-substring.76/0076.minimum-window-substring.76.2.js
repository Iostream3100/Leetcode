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
  let nums = 0;//number of chars left to be matched
  for(let char of t) {
    if(cnt[char] === undefined) {
      cnt[char] = 1;
      nums++;
    }
    else cnt[char]++;
  }

  while(r < s.length) {
    if(cnt[s[r]] === undefined) { //current char is not in t
      r++;
      continue;
    }
    cnt[s[r]]--;
    if(cnt[s[r]] == 0) nums--;
    r++;
    if(nums == 0) {//found an answer
      while(cnt[s[l]] === undefined || cnt[s[l]] < 0){
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