// Normal
function sumOfDigits(num){
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
    }
    return sum;
}

//via String conversion
function sumOfDigitsViaString(num){
    num = String(num);
    let sum = 0;
    for(let i=0; i<num.length; i++){
        sum += Number(num[i]);
    };
    return sum;
}

//via recursion
function sumOfDigitsRecursive(num){
    if(num <= 0) return 0;
    return num%10 + sumOfDigitsRecursive(Math.floor(num/10));
}

console.log(sumOfDigits(123456))
console.log(sumOfDigitsViaString(123456))
console.log(sumOfDigitsRecursive(123456))