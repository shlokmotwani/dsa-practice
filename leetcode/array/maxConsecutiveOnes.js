var findMaxConsecutiveOnes = function (nums) {
    let highest = 0;
    let current = 0;
    for (const num of nums) {
        if (num === 1) {
            current++;
        }
        else {
            highest = Math.max(highest, current);
            current = 0;
        }
    }
    return Math.max(highest, current);
};

nums = [1, 1, 0, 1, 1, 1]
console.log(findMaxConsecutiveOnes(nums));

nums = [1, 0, 1, 1, 0, 1]
console.log(findMaxConsecutiveOnes(nums));