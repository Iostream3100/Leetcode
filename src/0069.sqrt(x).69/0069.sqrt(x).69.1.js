/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x < 2) return x;
  let l = 1;
  let r = x;
  while(l < r) {
    let mid = Math.floor((l + r + 1) / 2);
    console.log(l,mid,r);
    if(mid * mid > x) r = mid - 1;
    else l = mid;
  }

  return l;
};

console.log(mySqrt(8))