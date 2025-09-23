function twoSum(nums, target) {
    let map = new Map();
    let result = [];
    for (let index = 0; index < nums.length; index++) {
        let required = target - nums[index];
        if (map.has(required)) {
            result.push(map.get(required));
            result.push(index);
            break;
        }
        else {
            map.set(nums[index], index);
        }
    };
    return result;
}

nums = [3, 4, 5, 6], target = 7
console.log(twoSum(nums, target));
nums = [4, 5, 6], target = 10
console.log(twoSum(nums, target));
nums = [5, 5], target = 10
console.log(twoSum(nums, target));