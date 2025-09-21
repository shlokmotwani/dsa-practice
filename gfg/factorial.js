// using iteration (TC: O(n) SC: O(1))
function factorial(num){
    if(num < 0) return null;
    if(num <= 1) return 1;
    let result = 1;
    while(num>1){
        result *= num;
        num -= 1;
    }
    return result;
}

// using recursion (TC: O(n) SC: O(n))
function factorialRecursive(num){
    if(num < 0) return null;
    if(num <= 1) return 1;
    return num * factorialRecursive(num-1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(-1));

console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(5));
console.log(factorialRecursive(10));
console.log(factorialRecursive(-1));