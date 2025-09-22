function gcd(x, y){
    let higher = Math.max(x, y);
     let smaller = Math.min(x, y);
    while(higher > smaller){
        let diff = higher - smaller;
        higher = Math.max(diff, smaller);
        smaller = Math.min(diff, smaller);
    }
    return smaller;
}

console.log(gcd(60, 36));
console.log(gcd(5, 1));
console.log(gcd(500, 250));