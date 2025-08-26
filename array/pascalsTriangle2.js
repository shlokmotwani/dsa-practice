var getRow = function (rowIndex) {
  let row = [1];
  for (let i = 0; i < rowIndex; i++) {
    row = row.map((item, index) => (row[index - 1] || 0) + (row[index] || 0));
    row.push(1);
  }
  return row;
};

console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(7));