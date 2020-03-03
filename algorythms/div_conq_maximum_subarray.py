# doesnt work. I tried to implement sliding window. Seems not suitable for this class of problem


class Solution:
    def maxSubArray(self, nums):
        if len(nums) == 1:
            return nums[0]
        if len(nums) == 2:
            return max(nums[0], nums[1], sum(nums))

        left = 0
        right = 1
        maxSum = nums[0]
        while left < len(nums):
            print(nums[left:right+1])
            maxSum = max(maxSum, nums[right], sum(nums[left:right+1]))

            if sum(nums[left:right+1]) < maxSum:
                left += 1
            else:
                right += 1

            if sum(nums[left:right+1]) > maxSum:
                if right < len(nums) - 1:
                    right += 1
                else:
                    left += 1

        return maxSum


inst = Solution()
print('result = ', inst.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
