'''
124 Valid palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

'''

class Solution:
  def isPalindrome(self, s):
    letters = []
    
    for i in range(len(s)):
      if ((ord(s[i]) <= ord('Z') and ord(s[i]) >= ord('A')) or
         (ord(s[i]) <= ord('z') and ord(s[i]) >= ord('a')) or
         (ord(s[i]) <= ord('9') and ord(s[i]) >= ord('0'))):
          letters.append(s[i].lower())

    for i in range(round(len(letters)/2)):
      if letters[i] != letters[len(letters)-i-1]:
        return False
    
    return True



app = Solution()
print(app.isPalindrome('0P'))