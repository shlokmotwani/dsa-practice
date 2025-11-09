function fibonacci(n) {
  if (n < 0) {
    return -1;
  }

  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// 0 1 1 2 3 5 8 13 21 34 55
