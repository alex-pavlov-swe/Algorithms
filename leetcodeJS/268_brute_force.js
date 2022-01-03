/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    var fullSum = 0, numsSum = 0;

    for (var i = 0; i < nums.length; i++) {
        numsSum += nums[i];
        fullSum += i;
    }
    return (fullSum + nums.length - numsSum)
};
