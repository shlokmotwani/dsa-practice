var canPlaceFlowers = function (flowerbed, n) {
    let len = flowerbed.length;
    if(len === 0 && flowerbed[0] === 0) return true;
    let count = 0;
    for (let i = 0; i < len - 2; i++) {
        if ((flowerbed[0] === 0 && flowerbed[1] === 0) || (flowerbed[i] === 0 && flowerbed[i + 1]=== 0 && flowerbed[i + 2] === 0)) {
            count++;
            i += 1;
        }
    }
    if(flowerbed[len-2] === 0 && flowerbed[len-1] === 0){
        count++;
    }
    return n <= count ? true : false;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));
console.log(canPlaceFlowers([0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0], 2)); //false