var plusOne = function (digits) {
  let i = digits.length - 1;

  while (digits[i] == 9) {
    digits[i] = 0;
    i--;
  }

  if (i == -1) {
    digits.unshift(1);
  } else {
    digits[i] += 1;
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 3, 9]));
console.log(plusOne([1, 8, 9, 9]));
console.log(plusOne([9, 9]));
console.log(plusOne([9]));
