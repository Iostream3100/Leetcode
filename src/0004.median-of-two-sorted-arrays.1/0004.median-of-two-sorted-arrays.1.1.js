/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length > nums2.length) { //make sure len1<len2
    let temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  let len1 = nums1.length;
  let len2 = nums2.length;
  let imin = 0;
  let imax = len1;

  while(imin <= imax) {
    let i = Math.floor((imin + imax) / 2);
    let j = Math.floor((len1 + len2 + 1) / 2) - i;

    if(i < len1 && nums2[j - 1] > nums1[i]) { 
      imin = i + 1; //i is too small
    } else if(i > 0 && nums1[i - 1] > nums2[j]) {
      imax = i - 1; // i is too big
    } else {
      let maxOfLeft, minOfRight;

      if(i == 0) maxOfLeft = nums2[j - 1];
      else if(j == 0) maxOfLeft = nums1[i - 1];
      else maxOfLeft = Math.max(nums2[j - 1], nums1[i - 1]);

      if ((len1 + len2) % 2 == 1){
        return maxOfLeft;
      }

      if(i == len1) minOfRight = nums2[j];
      else if(j == len2) minOfRight = nums1[i];
      else minOfRight = Math.min(nums2[j], nums1[i]);

      return (maxOfLeft + minOfRight) / 2;
    }
  }
};