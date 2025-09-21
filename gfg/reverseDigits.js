// normal ( TC: O(logN base 10)  SC: O(1))
function reverse(num) {
    let revNum = 0;
    while (num > 0) {
        let remainder = num % 10;
        num = Math.floor(num / 10);
        revNum = revNum * 10 + remainder;
    }
    return revNum;
}

function reverseViaRecursion(num, accumulator = 0){
    if(num === 0) return accumulator;
    accumulator = accumulator * 10 + num % 10;
    return reverseViaRecursion(Math.floor(num/10), accumulator);
}

// via string conversion ( TC: O(logN base 10)  SC: O(logN base 10))
function reverseViaString(num) {
    num = String(num).split("");
    let i = 0;
    let j = num.length - 1;
    while (i < j) {
        let temp = num[i];
        num[i] = num[j];
        num[j] = temp;
        i++;
        j--;
    }
    return Number(num.join(""));
}

console.log(reverse(12345));
console.log(reverseViaRecursion(12345));
console.log(reverseViaString(12345));