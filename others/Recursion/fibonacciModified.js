function fibonacciModified(n) {
  if (n < 0) {
    return -1;
  }

  // fib(0) = fib(1) = 1
  if (n <= 1) {
    return 1;
  }

  if (n == 2) {
    return 2;
  }

  return (
    fibonacciModified(n - 1) * 5 +
    fibonacciModified(n - 2) * 10 +
    fibonacciModified(n - 3)
  );
}

console.log(fibonacciModified(-10));
console.log(fibonacciModified(0));
console.log(fibonacciModified(1));
console.log(fibonacciModified(2));
console.log(fibonacciModified(3));
console.log(fibonacciModified(4));
console.log(fibonacciModified(5));
console.log(fibonacciModified(10));
