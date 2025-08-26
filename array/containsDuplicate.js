var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], i + 1) !== -1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3]))