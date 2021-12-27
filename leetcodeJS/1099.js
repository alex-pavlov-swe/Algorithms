// O(nlogn) time
// O(n) space

var twoSumLessThanK = function(nums, k) {
    var left = 0,
        right = nums.length - 1,
        maxSum = -Infinity;

    nums = nums.sort((a, b) => a - b);

    while (left < right) {
        const curSum = nums[left] + nums[right];
        if (curSum < k) {
            maxSum = Math.max(maxSum, curSum);
            left += 1;
        } else {
            right -= 1;
        }
    }

    return maxSum == -Infinity ? -1 : maxSum;
};