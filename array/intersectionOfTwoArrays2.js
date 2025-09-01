var intersect = function (nums1, nums2) {
    const common = [];
    let nums1Map = new Map();
    for (let num of nums1) {
        if (nums1Map[num]) {
            nums1Map[num]++;
        }
        else {
            nums1Map[num] = 1;
        }
    }
    for(let num of nums2){
        if(nums1Map[num]){
            common.push(num);
            nums1Map[num]--;
        }
    }
    return common;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));