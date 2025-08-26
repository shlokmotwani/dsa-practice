// leetcode #121
// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let highestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > highestProfit) {
      highestProfit = prices[i] - minPrice;
    }
  }
  return highestProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 1000, 1, 5]));
