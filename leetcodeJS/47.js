/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    var res = {}

    var backtrack = function(n) {
        if (n === nums.length - 1) {
            const key = nums.join("");
            if (!res[key]) res[key] = nums.concat();
            return;
        }
        for (var i = n; i < nums.length; i++) {
            [nums[i], nums[n]] = [nums[n], nums[i]];
            backtrack(n + 1);
            [nums[i], nums[n]] = [nums[n], nums[i]];
        }
    }
    backtrack(0);
    return Object.values(res); 
};