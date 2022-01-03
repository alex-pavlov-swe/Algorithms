var subsetsWithDup = function(nums) {
    var combinations = [];
    nums.sort((a, b) => a - b);

    var backtrack = function(nums, path){
        combinations.push([...path]);
        for (var i = 0; i < nums.length; i++){
            if (i === 0 || nums[i] !== nums[i - 1]) {
                path.push(nums[i]);
                backtrack(nums.slice(i + 1), path);
                path.pop(nums[i]);
            }
        }
    }
    backtrack(nums, []);
    return combinations;
};

console.log(subsetsWithDup([1,2,2]));