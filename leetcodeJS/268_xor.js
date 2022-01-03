/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let x1 = nums[0],
        x2 = 0;

    for (let i = 1; i < nums.length; i++) {
        x1 = x1 ^ nums[i];
        x2 = x2 ^ i;
    }

    x2 = x2 ^ nums.length;

    return x1 ^ x2;
};