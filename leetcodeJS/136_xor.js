/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let x = nums[0];

    for (let i = 1; i < nums.length; i++) {
        x = x ^ nums[i];
    }
    return x;
};

// a ^ (b ^ c) = (a ^ b) ^ c

// a ^ a = 0
// a ^ 0 = a

// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0