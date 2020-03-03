/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let leftBoundary = 0;
  let rightBoundary;
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (rightBoundary = 1; rightBoundary < nums.length; rightBoundary++) {
    currentSum += nums[rightBoundary];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      continue;
    } else {
      currentSum -= nums[leftBoundary];
      leftBoundary++;
    }
  }
  if (currentSum - nums[leftBoundary] > maxSum) {
    return currentSum - nums[leftBoundary];
  } else {
    return maxSum;
  }
};

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//console.log(maxSubArray([-2, 1]));
console.log(maxSubArray([-2, -1]));
