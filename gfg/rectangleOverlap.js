class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

function overlap(l1, l2, r1, r2){
    if(l1.x > r2.x || l2.x > r1.x){
        return false;
    }

    if(l1.y < r2.y || l2.y < r1.y){
        return false;
    }
    return true;
}


const l1 = new Point(0, 10);
const r1 = new Point(10, 0);
const l2 = new Point(5, 5);
const r2 = new Point(15, 0);

console.log(overlap(l1, l2, r1, r2));