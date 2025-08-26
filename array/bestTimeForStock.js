// leetcode #121
// url: https://leetcode.com/problems/best-time-to-buy-and-sell-stock

var maxProfit = function (prices) {
  let highest = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (diff > highest) {
        highest = diff;
      }
    }
  }
  return highest;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))