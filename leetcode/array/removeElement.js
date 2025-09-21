/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0; // index of non-val element
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(nums);
  return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, [ 0, 0, 1, 3, 4 ]
console.log(removeElement([3, 2, 2, 3], 3)); // 3, [2, 2]
