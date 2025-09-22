function lcm(x, y){
    let smaller = Math.min(x, y);
    let larger = Math.max(x, y);
    let i = 1;
    while(i <= smaller){
        if((larger * i) % smaller === 0){
            return larger * i;
        }
        i++;
    }
}

console.log(lcm(5, 11));
console.log(lcm(10, 5));