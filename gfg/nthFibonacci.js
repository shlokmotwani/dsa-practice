// using recursion TC: O(2^N) SC: O(N)
function fibRecursive(n){
    if(n<2) return n;
    return fibRecursive(n-1) + fibRecursive(n-2);
}

// using memoization | TC: O(N) SC: O(N)
function fibMemo(n, memo){
    if(n<2) return n;
    if(memo.has(n)) return memo.get(n);
    memo.set(n, fibMemo(n-1, memo)+fibMemo(n-2, memo));
    return memo.get(n);
}

// using dynamic programming | TC: O(N) SC: O(N)
function fibUsingDP(num){
    if(num<2) return num;
    let memo = [0, 1];
    for(let i=2; i<num+1; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[num]
}

// console.log(fibRecursive(45));
// console.log(fibRecursive(8));

let memo = new Map();
console.log(fibMemo(90, memo));
console.log(fibMemo(8, memo));

console.log(fibUsingDP(90, memo));
console.log(fibUsingDP(8, memo));