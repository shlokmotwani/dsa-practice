// TC: O(logN base 5) SC: O(1)
function trailingZeroes(num){
    if(num < 0) return -1;
    let count = 0;
    let start = 5;
    while(Math.floor(num/start) > 0){
        count += Math.floor(num/start);
        start *= 5;
    }
    return count;
}

console.log(trailingZeroes(1000));
console.log(trailingZeroes(5));
console.log(trailingZeroes(10));