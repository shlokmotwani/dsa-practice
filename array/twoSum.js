var twoSum = function (nums, target) {
  let indices = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let required = target - nums[i];
    const found = nums.slice(i + 1).findIndex((temp) => temp === required);
    if (found >= 0) {
      indices = indices.concat([i, found + i + 1]);
      break;
    }
  }
  return indices;
};

console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]





/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/