function closestDivisor(n, m){
    for(let i=1; i<=Math.abs(n)**(1/2); i++){
        let rightDivisor = (n+i)%m === 0 ? (n+i) : 0;
        let leftDivisor = (n-i)%m === 0 ? (n-i) : 0;
        if(leftDivisor && rightDivisor){
            return Math.abs(leftDivisor) > Math.abs(rightDivisor) ? leftDivisor : rightDivisor;
        }
        else if(leftDivisor){
            return leftDivisor;
        }
        else if(rightDivisor){
            return rightDivisor;
        }

    }
}

console.log(closestDivisor(13, 4));
console.log(closestDivisor(-15, 6));