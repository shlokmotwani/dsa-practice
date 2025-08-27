// leetcode #283

var moveZeroes = function (nums) {
  let z = -1; // pointer to the first zero element
  let nz = -1; // pointer to the first non-zero element to be swapped
  let count = 0; //counter of zero elements

  for (let i = 0; i < nums.length; i++) {
    console.log(`Iteration count: ${i}`);
    if (nums[i] === 0) {
      //check whether it is first zero
      if (count === 0) {
        z = i;
        console.log(`z = ${z}`);
      }
      count++;
    } else if (count > 0) {
      nz = i;
      console.log(`nz = ${nz}`);
    }

    if (z >= 0 && nz >= 0) {
      //swap the first zero and non-zero elements
      console.log(`swapping ${nums[z]} and ${nums[nz]}`);
      let temp = nums[z];
      nums[z] = nums[nz];
      nums[nz] = temp;

      z = nz - count + 1; // move the z pointer to the next zero element
      nz = -1;
      console.log(`z is now ${z}`);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); //[0]
