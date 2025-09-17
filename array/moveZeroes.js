// leetcode #283

var moveZeroes = function (nums) {
  let lastNonZero = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== lastNonZero) {
        let temp = nums[lastNonZero];
        nums[lastNonZero] = nums[i];
        nums[i] = temp;
      }
      lastNonZero++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); //[0]
console.log(moveZeroes([0, 0, 1])); //[0]
