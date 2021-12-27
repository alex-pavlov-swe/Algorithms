/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    if (!nums) return 0;
    if (nums.length === 0) return 0;

    var maxSum = -Infinity,
        curSum = 0;

    for (var i = 0; i < nums.length; i++) {
        curSum += nums[i];
        if (curSum < nums[i]) {
            curSum = nums[i];
        }
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
};

