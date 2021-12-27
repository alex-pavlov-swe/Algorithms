/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var sortColors = function(nums) {
    var left = 0,
        right = nums.length - 1;

    while (nums[left] == 0) {
        left++;
    }

    while (nums[right] == 2) {
        right--;
    }

    var index = left;

    while (index <= right) {
        if (nums[index] == 0) {
            [nums[left], nums[index]] = [nums[index], nums[left]];
            left += 1;
        }
        if (nums[index] == 2) {
            [nums[index], nums[right]] = [nums[right], nums[index]];
            right -= 1;
        } else {
            index += 1;
        }
    }
};

 var sortColorsStupid = function(nums) {
    var red = 0,
        white = 0,
        blue = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            red += 1;
        } else if (nums[i] == 1) {
            white += 1;
        } else {
            blue += 1;
        }
    }

    var index = 0;
    while (index < red) {
        nums[index] = 0;
        index += 1;
    }
    while (index < red + white) {
        nums[index] = 1;
        index += 1;
    }
    while (index < nums.length) {
        nums[index] = 2;
        index += 1;
    }

};
