/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  let wordLen = words[0].length;
  if(s.length < words.length * wordLen) {//s is too short 
    return [];
  }

  let dic = {};
  for(let i of words) {
    // if(!dic.hasOwnProperty(i)) dic[i] = 1;
    // else dic[i] ++;
    dic[i] = dic[i] + 1 || 1;
  }
  // console.log(dic);

  let result = [];
  for(let i = 0; i < wordLen; i++) {
    let iDic = {...dic};
    let cnt = 0;

    for(let j = i; j < s.length; j += wordLen) {
      let subStr = s.substring(j, j + wordLen);
      if(iDic.hasOwnProperty(subStr)) {
        iDic[subStr]--;
        if(cnt < words.length){
          cnt++;
        } else { //pop the first word
          iDic[s.substring(j - cnt * wordLen, j - (cnt - 1) * wordLen)]++;
        }
      } else { //clear sliding window
        cnt = 0;
        iDic = {...dic};
      }

      // console.log(j, subStr, iDic, cnt);
      if(cnt == words.length) { //check if it's a valid result
        let isValid = true;
        for(let key in iDic) {
          if(iDic[key] != 0) {
            isValid = false;
            break;
          }
        }
        if(isValid) {
          result.push(j - wordLen * (cnt - 1));
        }
      }
    }
  }
  
  return result;
};

console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));

