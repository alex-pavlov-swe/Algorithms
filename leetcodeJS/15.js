var threeSum = function(nums) {
    const result = [];
    nums.sort((a,b) => a-b);

    var left, right, sum;

    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left += 1;
            } else if (sum > 0) {
                right -= 1;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left += 1;
                while (left < right && nums[left] === nums[left - 1]) {
                    left += 1;
                }
            }
        }
    }

    return result;
};

// var nums = [-1,0,1,2,-1,-4];
// var nums = [-1,0,1,0];
var nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];

console.log(threeSum(nums));