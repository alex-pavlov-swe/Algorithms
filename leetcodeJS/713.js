/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// O(n2) time and O(n) space
var numSubarrayProductLessThanK = function(nums, k) {
    var left = 0,
        right = 0,
        result = 0,
        product = 1;

    for (right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k && left < nums.length) {
            product /= nums[left];
            left += 1;
        }
        if (left < nums.length) {
            result += right - left + 1;
        }
    }
    return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));