function hasDuplicate(nums) {
    let frequencyMap = new Map();
    for (const num of nums) {
        if (frequencyMap.has(num)) {
            return true;
        }
        else {
            frequencyMap.set(num, 1);
        }
    };
    return false;
}

console.log(hasDuplicate([1,2,3,3]))