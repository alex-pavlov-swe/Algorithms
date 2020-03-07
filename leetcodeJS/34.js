/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return [0, 0];
    } else {
      return [-1, -1];
    }
  }
};

const binarySearch = function(nums, low, high, target, findFirst) {
  let mid = 0;
  while (true) {
    if (low > high) {
      return -1;
    }
    mid = low + Math.floor((high - low) / 2);
    if (findFirst) {
      if (nums[mid] === target && (target !== nums[mid - 1] || mid === 0)) {
        return mid;
      }
      if (target > nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (
        nums[mid] === target &&
        (target !== nums[mid + 1] || mid === nums.length - 1)
      ) {
        return mid;
      }
      if (target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
};

//let nums = [5, 7, 7, 8, 8, 10];
//let nums = [1, 1, 1, 2, 2];
let nums = [2, 2];
let target = 2;

console.log(binarySearch(nums, 0, nums.length - 1, target, true));
console.log(binarySearch(nums, 0, nums.length - 1, target, false));
