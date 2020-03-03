# 3. Longest Substring Without Repeating Characters
class Solution:
    def lengthOfLongestSubstring(self, s):
        def noRepeats():
            for i in letterCount.values():
                if i > 1:
                    return False
            return True

        if len(s) <= 1:
            return len(s)

        longest = 1
        letterCount = {s[0]: 1}
        left = 0
        right = 1

        while right < len(s):

            if s[right] not in letterCount:
                letterCount[s[right]] = 0

            if letterCount[s[right]] > 0:
                letterCount[s[right]] += 1
                letterCount[s[left]] -= 1
                left += 1
                right += 1

            elif letterCount[s[right]] == 0:
                if (len(s[left:right+1]) > longest and noRepeats()):
                    longest = len(s[left:right+1])
                if not noRepeats():
                    letterCount[s[left]] -= 1
                    left += 1
                letterCount[s[right]] = 1
                right += 1

        return longest


inst = Solution()
print(inst.lengthOfLongestSubstring('pwwkew'))
#print(f'left = {left}, right = {right}, s[right] = {s[right]}, longest = {longest}, s[left:right+1] = {s[left:right+1]}, letterCount = {letterCount}')
