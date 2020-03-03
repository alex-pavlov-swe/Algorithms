class Solution:
  def maxProfit(self, prices):
    if prices:
      minPrice = prices[0]
    maxProfit = 0
    for i in range(1,len(prices)):
      if prices[i] < minPrice:
        minPrice = prices[i]
      if prices[i] - minPrice > maxProfit:
        maxProfit = prices[i] - minPrice
    return maxProfit

app = Solution()
print(app.maxProfit([7,1,5,3,6,4]))