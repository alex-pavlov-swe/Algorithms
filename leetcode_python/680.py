"""
680 valid palindrome
Given a non-empty string s, you may delete at most one character.
Judge whether you can make it a palindrome.
"""


class Solution:
    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1
        while left < right:
            if s[left] != s[right]:
                return self.isPalindrome(s, left + 1, right) or self.isPalindrome(s, left, right - 1)
            left += 1
            right -= 1
        return True

    def isPalindrome(self, s, left, right):
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True


# print(Solution().validPalindrome('afrbcba'))

# print(Solution().isPalindrome('abbxa'))
