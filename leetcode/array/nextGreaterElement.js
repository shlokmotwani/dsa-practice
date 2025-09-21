var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    let map = new Map();
    let contestants = [];
    for (let i = 0; i < nums2.length - 1; i++) {
        if (nums2[i + 1] > nums2[i]) {
            for (const item of contestants) {
                map.set(item, nums2[i + 1]);
            }
            contestants = [];
            map.set(nums2[i], nums2[i + 1]);
        }
        else {
            contestants.push(nums2[i]);
        }
    }
    map.set(nums2[nums2.length - 1], -1);
    console.log(map);
    for (let i = 0; i < nums1.length; i++) {
        result.push(map.get(nums1[i]) || -1);
    }
    return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])) // [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])) // [3, -1]
console.log(nextGreaterElement([4, 1, 2, 0], [3, 4, 2, 0, 1])) // [-1, -1, -1, 1]