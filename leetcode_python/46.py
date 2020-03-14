
class Solution:
    def permute(self, nums):
        result = []

        def permuteHelper(start):
            if start == len(nums) - 1:
                result.append(nums.copy())
            for i in range(start, len(nums)):
                nums[start], nums[i] = nums[i], nums[start]
                permuteHelper(start + 1)
                nums[start], nums[i] = nums[i], nums[start]
        permuteHelper(0)
        return result


print(Solution().permute([1, 2, 3, 4]))
