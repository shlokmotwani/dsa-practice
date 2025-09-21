// TC: O(N^2/3) SC: O(1)
function pairCubeCount(num){
    let count = 0;
    let pairs = [];
    for(let i=1; i<=parseInt(Math.pow(num, 1/3)); i++){
        let temp = [];
        for(let j=1; j<Math.pow(num, 1/3); j++){
            if(Math.pow(i, 3) + Math.pow(j, 3) === num){
                count++;
                temp.push(i);
                temp.push(j);
            }
        }
        if(temp.length){
            pairs.push(temp);
        }
    }
    console.log(pairs);
    return count;
}

// Optimised approach
// TC: O(N^1/3) SC: O(1)
function pairCubeCountOptimised(num){
    let count = 0;
    let pairs = [];
    for(let i=1; i<=parseInt(Math.pow(num, 1/3)); i++){
        let temp = [];
        let cube = i*i*i;
        let diff = num - cube;  
        let cbrtDiff = Math.round(Math.pow(diff, 1/3));
        if(Math.pow(cbrtDiff, 3) === diff){
            count++;
            temp.push(i, cbrtDiff)
        }
        if(temp.length){
            pairs.push(temp);
        }
    }
    console.log(pairs);
    return count;
}
    
console.log(pairCubeCount(341));
console.log(pairCubeCountOptimised(341));