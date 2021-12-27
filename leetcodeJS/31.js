/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function(nums) {
    var combinations = [];

    var backtrack = function(index) {
        if (index === nums.length - 1) {
            combinations.push(nums.concat());
            return;
        }
        for (var i = index; i < nums.length; i++) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            backtrack(index + 1);
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }

    backtrack(0);
    combinations = combinations.map(item => parseInt(item.join(""))).sort((a, b) => a - b);
    return combinations[combinations.indexOf(parseInt(nums.join(""))) + 1];
};

console.log(nextPermutation([1,2,3]));