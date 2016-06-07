// Say you have an array for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction 
// (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
// 
// https://leetcode.com/discuss/97652/5-line-cpp-solution

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var len = prices.length;
    if (!len) return 0;

    var i,
        maxPro = 0,
        minPrice = Number.MAX_VALUE;

    for (i = 0; i < len; i++) {
        minPrice = Math.min(prices[i], minPrice);
        maxPro = Math.max(prices[i] - minPrice, maxPro);
    }

    return maxPro;
};