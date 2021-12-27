var subsetsWithDup = function(nums) {
    var combinations = [];
    nums.sort((a, b) => a - b);

    var dfs = function(nums, path){
        combinations.push([...path]);
        for (var i = 0; i < nums.length; i++){
            if (i === 0 || nums[i] !== nums[i - 1]) {
                path.push(nums[i]);
                dfs(nums.slice(i + 1), path);
                path.pop(nums[i]);
            }
        }
    }
    dfs(nums, []);
    return combinations;
};

console.log(subsetsWithDup([1,2,2]));