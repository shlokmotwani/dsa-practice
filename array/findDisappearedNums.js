var findDisappearedNumbers = function (nums) {
    const upperLimit = nums.length;
    const numsSet = new Set(nums);
    const result = [];

    for (let i = 1; i <= upperLimit; i++) {
        if (!numsSet.has(i)) {
            result.push(i);
        }
    }
    return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))