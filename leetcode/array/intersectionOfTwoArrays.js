var intersection = function (nums1, nums2) {
    const setOfNums1 = new Set(nums1);
    const result = nums2.filter(num => setOfNums1.has(num));
    return [...new Set(result)];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));

//nums1 = [1,2,2,1], nums2 = [2,2]
// nums1 = [4,9,5], nums2 = [9,4,9,8,4]