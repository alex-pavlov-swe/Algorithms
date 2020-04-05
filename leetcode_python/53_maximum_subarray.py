class Solution:
    def maxSubarray(self, nums):
        if not nums:
            return 0
        res = nums[0]
        currMax = 0
        for n in nums:
            if currMax + n < 0:
                currMax = 0
                res = max(n, res)
            else:
                currMax += n
                res = max(currMax, res)
        return res


#print(Solution().maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
#print(Solution().maxSubarray([-2, 1]))
# print(Solution().maxSubarray([-1]))
print(Solution().maxSubarray([-2, -1]))
