/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let dict = {};
  for(let i = 0; i < strs.length; ++i) {
    let cnt = [];//cnt[ascii(i)-'a']
    for(let j = 0; j < 26; ++j) cnt[j] = 0;
    for(let j = 0; j < strs[i].length; ++j) {
      cnt[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++;
    }
    let key = cnt.toString();
    if(!dict.hasOwnProperty(key)) dict[key] = [];
    dict[key].push(strs[i]);
  }

  let result = [];
  for(let i in dict) {
    result.push(dict[i]);
  }
  
  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))