/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    var combinations = [];

    var dfs = function(nums, path){
        combinations.push([...path]);
        for (var i = 0; i < nums.length; i++){
            path.push(nums[i]);
            dfs(nums.slice(i + 1), path);
            path.pop();
        }
    }
    dfs(nums, []);
    return combinations;
};

console.log(subsets([1,2,3]));