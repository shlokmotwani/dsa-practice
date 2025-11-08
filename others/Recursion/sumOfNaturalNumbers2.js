function sumOfNaturalNumbers2(n) {
  if (n <= 0) {
    return 0;
  }
  return sumOfNaturalNumbers2(n - 1) + n;
}

console.log(sumOfNaturalNumbers2(5));
console.log(sumOfNaturalNumbers2(10));
console.log(sumOfNaturalNumbers2(0));
console.log(sumOfNaturalNumbers2(1));
console.log(sumOfNaturalNumbers2(100));
