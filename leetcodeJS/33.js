var findRotateIndex = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let middle = Math.round((left + right) / 2);
        console.log(nums, left, right, middle);
        if (nums[middle] > nums[middle + 1]) {
            return middle + 1;
        } else {
            if (nums[middle] > nums[left]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return 0;
}

var search = function(nums, target) {
    let left = 0,
        right = nums.length - 1,
        rotateIndex = findRotateIndex(nums);
    console.log(`rotateIndex=${rotateIndex}, left=${left}, right=${right}`);
    if (target === nums[rotateIndex]) return rotateIndex;
    if (target === nums[0]) return 0;
    if (target === nums[right]) return right;
    if (target < nums[0]) {
        left = rotateIndex;
    } else {
        right = rotateIndex || nums.length - 1;
    }
    console.log(`rotateIndex=${rotateIndex}, left=${left}, right=${right}`);
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle;
        if (target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};

console.log(search([8,9,2,3,4], 9));