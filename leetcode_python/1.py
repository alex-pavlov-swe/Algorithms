class Solution:
    def twoSum(self, nums: 'List[int]', target: 'int') -> 'List[int]':
        hashMap = {}
        complement = 0
        for i in range(0, len(nums)):
            complement = target - nums[i]
            if complement in hashMap:
                return [hashMap[complement], i]
            hashMap[nums[i]] = i
