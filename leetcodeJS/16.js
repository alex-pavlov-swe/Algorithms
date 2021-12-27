var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return;

    nums.sort((a,b) => a-b);

    var sum, left, right, diff, closest = nums[0] + nums[1] + nums[2];

    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        left = i + 1;
        right = nums.length - 1;
        console.log(left, right);
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === target) return target;

            diff = target - sum;
            if (Math.abs(diff) < Math.abs(target - closest)) {
                closest = sum;
            }

            if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
    return closest;
};

var nums = [0,2,1,-3];
var target = 1;
console.log(threeSumClosest(nums, 1));