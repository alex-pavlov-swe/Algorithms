class Solution:
  def isPalindrome(self, str):
    for i in range(round(len(str)/2)):
      if str[i] != str[len(str) - i - 1]:
        return False
    return True

  def action(self):
    print(self.isPalindrome('bcb'))

app = Solution()
app.action()