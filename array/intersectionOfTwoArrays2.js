var intersect = function (nums1, nums2) {
    let smaller;
    let larger;
    const common = [];
    if (nums1.length < nums2.length) {
        smaller = nums1;
        larger = nums2;
    }
    else {
        smaller = nums2;
        larger = nums1;
    }
    let reachedIdx = new Set();
    for(let i=0; i<smaller.length; i++){
        for(let j=0; j<larger.length; j++){
            if(smaller[i] === larger[j] && !reachedIdx.has(j)){
                common.push(smaller[i]);
                reachedIdx.add(j);
                break;
            }
        }
    }
    return common;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2], [1, 1]));
console.log(intersect([4,9,5], [9,4,9,8,4]));