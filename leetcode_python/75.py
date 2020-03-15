"""
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
"""


class Solution:
    def sortColors(self, nums):
        zero_index = 0
        two_index = len(nums) - 1
        index = 0
        while index <= two_index:
            if nums[index] == 0:
                nums[index], nums[zero_index] = nums[zero_index], nums[index]
                zero_index += 1
                index += 1
            elif nums[index] == 1:
                index += 1
            elif nums[index] == 2:
                nums[index], nums[two_index] = nums[two_index], nums[index]
                two_index -= 1


# nums = [2, 0, 2, 1, 1, 0]
nums = [1, 2, 0]
Solution().sortColors(nums)
print(nums)
