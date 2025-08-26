// leetcode #136
// url: https://leetcode.com/problems/single-number

var singleNumber = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    start ^= nums[i];
  }
  return start;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
