function closestDivisor(n, m){
   let q = Math.floor(n/m);
   let n1 = m*q;
   let n2;
   if(n*m < 0){
    //signs of n and m are opposite
    n2 = m * (q-1);
   }
   else{
    n2 = m * (q+1);
   }
   let diff1 = Math.abs(n - n1);
   let diff2 = Math.abs(n - n2);
   return diff1<diff2? n1 : n2;
}

console.log(closestDivisor(13, 4));
console.log(closestDivisor(-15, 6));