var distributeCandies = function (candyType) {
    let candySet = new Set(candyType);
    return candySet.size > candyType.length / 2 ? candyType.length / 2 : candySet.size;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]))