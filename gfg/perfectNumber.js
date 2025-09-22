// TC: O(N^1/2) SC: O(1)
function perfectNumber(num){
    let sum = 0;
    for(let i=1; i*i <= num; i++){
        if(num%i === 0){
            //add both the factors to sum
            sum += i + num/i;
        }
    }
    // subtract num from sum, because it was added to it when i=1
    return sum-num === num;
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(10));
console.log(perfectNumber(16));