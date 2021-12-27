var permuteUnique = function(nums) {
    var res = {}, maxLength = nums.length;

    var backtrack = function(nums, path) {
        if (path.length === maxLength) {
            const key = path.join("");
            if (!res[key]) res[key] = path.concat();
        } else {
            for (var i = 0; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(nums.filter((item, index) => index !== i), path);
                path.pop();
            }
        }
    }

    backtrack(nums, []);
    return Object.values(res);;
};