/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    let twoNumsXor = 0,
        diffBit = 1, numOne = 0, numTwo = 0;

    for (var i = 0; i < nums.length; i++) {
        twoNumsXor = twoNumsXor ^ nums[i];
    }
    while (!(twoNumsXor & diffBit)) {
        diffBit = diffBit << 1;
    }

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] & diffBit) {
            numOne ^= nums[i];
        } else {
            numTwo ^= nums[i];
        }
    }

    return [numOne, numTwo];
};
