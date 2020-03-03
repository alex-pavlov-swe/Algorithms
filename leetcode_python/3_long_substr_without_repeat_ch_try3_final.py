# 3. Longest Substring Without Repeating Characters
class Solution:
    def lengthOfLongestSubstring(self, s):
      tail = 0
      head = 0
      letters = {}
      longest = 0

      while head < len(s):
        if s[head] in letters:
          tail = max(tail, letters[s[head]] + 1)       
        longest = max(longest, head - tail + 1)
        letters[s[head]] = head
        head += 1
        
      return longest

    def lengthOfLongestSubstringDebug(self, s):
      tail = 0
      head = 0
      letters = {}
      longest = 0
      i = 1
      before =''
      print (s)
      while head < len(s):
        before = s[tail:head+1]
        if s[head] in letters:
          tail = max(tail, letters[s[head]]+1)       
        longest = max(longest, head - tail + 1)
        letters[s[head]] = head
        print(f'iteration {i}: adding letter {s[head]}: {before} --> {s[tail:head+1]}, longest={longest}')
        head += 1
        i += 1
      return longest

inst = Solution()
print(inst.lengthOfLongestSubstringDebug('pwwkew'))
#print(inst.lengthOfLongestSubstring('abcabcbb'))