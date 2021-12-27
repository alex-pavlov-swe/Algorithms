/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    var map = { 0 : 1},
        count = 0,
        sum = 0;
    
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if ((sum - k) in map) count += map[sum - k];
        map[sum] = map[sum] ? map[sum] + 1 : 1;
    }
    return count;
};
