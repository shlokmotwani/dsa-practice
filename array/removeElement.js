/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // sort the array
  nums.sort((a, b) => a - b);

  let start = -1;
  let found = false;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!found && nums[i] === val) {
      start = i;
      found = true;
    }
    if (found && nums[i] !== val) {
      count = i - start;
      nums.splice(start, count);
      start = -1;
      break;
    }
  }

  //check if the value to be removed exists in the end of the array
  if (start !== -1) {
    nums.splice(start);
  }
  console.log(nums);
  return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, [ 0, 0, 1, 3, 4 ]
console.log(removeElement([3, 2, 2, 3], 3)); // 5, [2, 2]