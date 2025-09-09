var thirdMax = function (nums) {
    let max = second = third = -Infinity;
    for (let num of [...new Set(nums)]) {
        if (num > max) {
            third = second;
            second = max;
            max = num;
        }
        else if (num > second) {
            third = second;
            second = num;
        }
        else if (num > third) {
            third = num;
        }
    }
    if (third > -Infinity) {
        return third;
    }
    return max;
};

console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
console.log(thirdMax([5, 2, 2]))