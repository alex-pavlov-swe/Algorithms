class Solution:
    # hash map soluton O(n) time, O(n) space
    def singleNumber(self, nums: List[int]) -> int:
        table = {}
        for i in nums:
            if i not in table:
                table[i] = 1
            else:
                table[i] += 1
        for i in table:
            if table[i] == 1:
                return i
