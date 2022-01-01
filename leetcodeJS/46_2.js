var permute = function(nums) {
    var combinations = [],
        maxLength = nums.length;

    var backtrack = function(nums, path) {
        if (path.length === maxLength) {
            combinations.push([...path]);
        } else {
            for (var i = 0; i < nums.length; i++) {
                path.push(nums[i]);
                backtrack(nums.filter((item, index) => index !== i), path);
                path.pop();
            }
        }
    }

    backtrack(nums, []);
    return combinations;
};

console.log(permute([1,2,3,4]));
