var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    var sum;

    while (left !== right) {
        sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        if (sum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }
};