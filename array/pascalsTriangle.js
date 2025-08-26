var generate = function (numRows) {
  let i = 0;
  let pascal = [];
  while (i < numRows) {
    console.log(`i = ${i}`);

    if (i == 0) {
      pascal.push([1]);
    } else if (i == 1) {
      pascal.push([1, 1]);
    } else {
      let item = [];
      for (let j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          item.push(1);
        } else {
          item.push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
        }
      }
      pascal.push(item);
    }
    i++;
  }
  return pascal;
};

console.log(generate(5));
