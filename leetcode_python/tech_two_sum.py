class Solution:
  def two_sum(self, l, k):
    hash = {}
    for i in range(len(l)):
      if not k-l[i] in hash:
        hash[k-l[i]] = i

      if l[i] in hash:
        return [i, hash[k-l[i]]]
    return False



app = Solution()
print(app.two_sum([4, 7, 1, -3, 2], 5))