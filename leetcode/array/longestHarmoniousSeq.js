var findLHS = function (nums) {
    let freqMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (freqMap[nums[i]]) {
            freqMap[nums[i]]++;
        }
        else {
            freqMap[nums[i]] = 1;
        }
    }
    let highest = 0;
    for (const key in freqMap) {
        let currentNum = parseInt(key);
        if (freqMap[currentNum + 1]) {
            let sum = freqMap[currentNum] + freqMap[currentNum + 1];
            if (sum > highest) {
                highest = sum;
            }
        }
    };
    return highest;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));