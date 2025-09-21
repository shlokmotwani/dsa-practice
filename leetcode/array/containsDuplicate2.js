var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (map[currentNum] !== undefined) {
      if (i - map[currentNum] <= k) {
        return true;
      }
    }
    map[currentNum] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 9], 3));
