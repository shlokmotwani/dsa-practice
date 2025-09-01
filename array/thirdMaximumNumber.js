var thirdMax = function (nums) {
    let sortedInDesc = [...new Set(nums.sort((a, b) => a - b))];
    if(sortedInDesc.length > 2){
        return sortedInDesc[sortedInDesc.length-3];
    }
    else{
        return sortedInDesc[sortedInDesc.length-1];
    }
};

console.log(thirdMax([1,2]))
console.log(thirdMax([2,2,3,1]))