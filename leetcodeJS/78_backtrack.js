var subsets = function(nums) {
    var combinations = [];

    var backtrack = function(nums, path){
        combinations.push([...path]);
        for (var i = 0; i < nums.length; i++){
            path.push(nums[i]);
            backtrack(nums.slice(i + 1), path);
            path.pop();
        }
    }
    backtrack(nums, []);
    return combinations;
};

console.log(subsets([1,2,3]));