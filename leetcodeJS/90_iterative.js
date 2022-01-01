/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    if (nums.length === 0) return [];
    nums.sort((a, b) => a - b);

    var subsets = [];
    subsets.push([]);
    var currentLength = subsets.length, left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            left = currentLength;
        } else {
            left = 0;
        }
        currentLength = subsets.length;
        for (var j = left; j < currentLength; j++) {
            subsets.push([...subsets[j], nums[i]]);
        }
    }
    return subsets;
};
