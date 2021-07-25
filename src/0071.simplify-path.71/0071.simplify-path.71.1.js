/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let pathList = path.split('/');
  let simpPathList = [];
  for(let i = 0; i < pathList.length; ++i) {
    if(pathList[i].length == 0 || pathList[i] =='.') continue;
    else if(pathList[i] == '..') { //go to parent directory
      if(simpPathList.length) simpPathList.pop();
    } else {
      simpPathList.push(pathList[i]);
    }
  }

  let simpPath = '/' + simpPathList.join('/');
  return simpPath;
};