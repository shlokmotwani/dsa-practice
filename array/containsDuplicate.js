var containsDuplicate = function (nums) {
  let found = new Set(nums);
  return found.size !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3]));
