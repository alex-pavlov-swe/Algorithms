/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxAmount = 0, left = 0, right = height.length - 1;
    while (left < right) {
        maxAmount = Math.max(maxAmount, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return maxAmount;
};
