/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let dict = {};
  for(let i = 0; i < strs.length; ++i) {
    let sorted = strs[i].split("").sort().join("");
    if(!dict.hasOwnProperty(sorted)) dict[sorted] = [];
    dict[sorted].push(strs[i]);
  }

  let result = [];
  for(let i in dict) {
    result.push(dict[i]);
  }
  
  return result;
};


let a ="123,";
console.log(a.split())