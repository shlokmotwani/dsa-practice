var intersection = function (nums1, nums2) {
    let common = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j] && !common.includes(nums1[i])) {
                common.push(nums1[i]);
            }
        }
    }
    return common;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));

//nums1 = [1,2,2,1], nums2 = [2,2]
// nums1 = [4,9,5], nums2 = [9,4,9,8,4]