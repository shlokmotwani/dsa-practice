// leetcode #136
// url: https://leetcode.com/problems/single-number

var singleNumber = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i += 2) {
    if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
