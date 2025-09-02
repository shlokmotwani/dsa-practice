var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let found = false;
        let k = Infinity;
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                k = j;
            }
            if (nums2[j] > nums2[k]) {
                result.push(nums2[j]);
                found = true;
                break;
            }
        }
        if (k === Infinity || !found) {
            result.push(-1);
        }
    }
    return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))