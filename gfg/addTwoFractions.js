// TC: O(log(min(a,b))) SC: O(1)
function addTwoFractions(a, b){
    let sum = [a[1]*b[0] + a[0]*b[1], a[1] * b[1]];
    let divisor = gcd(sum[0], sum[1]);
    return [sum[0]/divisor, sum[1]/divisor];
}

function gcd(a, b){
    if(a === 0) return b;
    if(b === 0) return a;
    return gcd(b, a%b);
}

console.log(addTwoFractions([1,2], [3,2]));
console.log(addTwoFractions([1,3],[3,9]));
console.log(addTwoFractions([1,5],[3,15]));