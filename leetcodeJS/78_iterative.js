/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    if (nums.length === 0) return [];

    var subsets = [];
    subsets.push([], [nums[0]]);

    for (let i = 1; i < nums.length; i++) {
        var currentLength = subsets.length;
        for (var j = 0; j < currentLength; j++) {
            subsets.push([...subsets[j], nums[i]]);
        }
    }
    return subsets;
};