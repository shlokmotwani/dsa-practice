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
    let numSet = Array.from(new Set(nums));
    let highest = 0;
    for (let i = 0; i < numSet.length; i++) {
        for (let j = i + 1; j < numSet.length; j++) {
            if (Math.abs(numSet[i] - numSet[j]) === 1) {
                let pairSum = freqMap[numSet[i]] + freqMap[numSet[j]];
                if (pairSum > highest) {
                    highest = pairSum;
                }
            }
        }
    }
    return highest;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));