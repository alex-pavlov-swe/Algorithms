/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    var minValue = prices[0], maxProfit = 0;

    for (var i = 1; i < prices.length; i++) {
        minValue = Math.min(minValue, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minValue);
    }
    return maxProfit;
};

console.log(maxProfit([2,1,2,1,0,1,2]));