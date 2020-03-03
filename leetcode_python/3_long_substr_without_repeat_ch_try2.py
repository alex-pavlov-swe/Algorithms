# 3. Longest Substring Without Repeating Characters
class Solution:
    def lengthOfLongestSubstring(self, s):
        if len(s) <= 1:
            return len(s)

        def repeatsExist(count):
            for i in count.values():
                if i > 1:
                    return True
            return False

        countLetters = {s[0]: 1}
        left = 0
        right = 1
        longest = 1

        while right < len(s):

            if s[right] not in countLetters:
                countLetters[s[right]] = 0

            if countLetters[s[right]] > 0 or repeatsExist(countLetters):
                countLetters[s[left]] -= 1
                countLetters[s[right]] += 1
                left += 1
                right += 1
            else:
                countLetters[s[right]] += 1
                if len(s[left:right+1]) > longest:
                    longest = len(s[left:right+1])
                    right += 1

        return longest


inst = Solution()
print(inst.lengthOfLongestSubstring('pwwkew'))
