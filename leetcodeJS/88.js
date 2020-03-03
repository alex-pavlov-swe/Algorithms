/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let result = [];
  count1 = 0;
  count2 = 0;

  while (count1 <= m && count2 <= n) {
    if (nums1[count1] <= nums2[count2]) {
      result.push(nums1[count1]);
      count1 += 1;
    } else {
      result.push(nums2[count2]);
      count2 += 2;
    }
  }
  nums1[0] = 10;
  console.log(result);
};

let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);

console.log(nums1);
