// Two sum
/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hash) {
      return [i, hash[target - nums[i]]];
    }
    if (!(nums[i] in hash)) {
      hash[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 5, 5, 11], 10));
