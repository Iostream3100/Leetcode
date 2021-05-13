/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
  // let l = [];
  // for(let i = 1; i <= n; i++) {
  //   for(let j = i; j <= n; j += i) {
  //     if(l[j] == undefined){
  //       l[j] = true;
  //     } else {
  //       l[j] = !l[j];
  //     }
  //   }
  // }
  // for(let i = 1 ;i <= n ;++i){
  //   console.log(i, l[i]);
  // }
};

bulbSwitch(100);

// 1 11111
// 2 10101
// 3 10001
// 4 10011
// 5 10010

// 1 111111
// 2 101010
// 3 100011
// 4 100111
// 5 100101
// 6 100100

