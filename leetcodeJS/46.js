/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    var res = [];

    var backtrack = function(n) {
        if (n === nums.length - 1) {
            res.push(nums.slice(0));
            return;
        }

        for (let i = n; i < nums.length; i++) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
            backtrack(n + 1);
            [nums[i], nums[n]] = [nums[n], nums[i]];
        }
    }

    backtrack(0);
    return res;
};

console.log(permute([1,2,3]));