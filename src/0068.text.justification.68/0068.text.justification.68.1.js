/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let result = [];
  let i = 0;
  while(i < words.length) {
    let spaceLeft = maxWidth - words[i].length;
    let curRow = [words[i]]; //put the first word in current row
    i++;
    for(;i < words.length; ++i) {
      if(words[i].length + 1 > spaceLeft) break;
      else {
        spaceLeft -= words[i].length + 1;
        curRow.push(words[i]);
      }
    }
    let curStr = "";
    if(i == words.length) {//last row
      for(let j = 0; j < curRow.length - 1; ++j) {
        curStr = curStr + curRow[j] + " ";
      }
      curStr = curStr + curRow[curRow.length - 1] + " ".repeat(spaceLeft);
    } else {
      for(let j = 0; j < curRow.length - 1; ++j) {
        let spaceLen = Math.floor(spaceLeft / (curRow.length - 1)) + 1;
        if(j < spaceLeft % (curRow.length - 1)) spaceLen++; 
        curStr = curStr + curRow[j] + " ".repeat(spaceLen);
      }
      curStr = curStr + curRow[curRow.length - 1];
      if(curRow.length == 1) curStr = curStr + " ".repeat(spaceLeft);
    }
    result.push(curStr);
  }

  return result;
};

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
