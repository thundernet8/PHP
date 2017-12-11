/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  var len = nums1.length + nums2.length;
  if (len % 2 === 1) {
    return findKthValueOfTwoArrays(nums1, 0, nums2, 0, (len + 1) / 2);
  }
  return (
    (findKthValueOfTwoArrays(nums1, 0, nums2, 0, len / 2) +
      findKthValueOfTwoArrays(nums1, 0, nums2, 0, len / 2 + 1)) /
    2
  );
};

var findKthValueOfTwoArrays = function(nums1, pointer1, nums2, pointer2, k) {
  if (nums1.length <= pointer1) {
    return nums2[pointer2 + k - 1];
  }
  if (nums2.length <= pointer2) {
    return nums1[pointer1 + k - 1];
  }
  if (k === 1) {
    return Math.min(nums1[pointer1], nums2[pointer2]);
  }
  var midK = Math.floor(k / 2);
  var mid1 =
    pointer1 + midK - 1 < nums1.length ? nums1[pointer1 + midK - 1] : null;
  var mid2 =
    pointer2 + midK - 1 < nums2.length ? nums2[pointer2 + midK - 1] : null;
  if (mid2 === null || (mid1 !== null && mid1 < mid2)) {
    return findKthValueOfTwoArrays(
      nums1,
      pointer1 + midK,
      nums2,
      pointer2,
      k - midK
    );
  } else {
    return findKthValueOfTwoArrays(
      nums1,
      pointer1,
      nums2,
      pointer2 + midK,
      k - midK
    );
  }
};
