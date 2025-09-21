var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // pointer of last element of nums1
  let j = n - 1; // pointer of last element of nums2
  let k = m + n - 1; // pointer of last placement position of nums1

  //traverse while there are elements in nums2
  while (j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
};

console.log(merge([1, 2, 3, 4, 0, 0], 4, [2, 5], 2));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
