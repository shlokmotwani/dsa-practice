var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat;
    let flattened = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            flattened.push(mat[i][j]);
        }
    }
    let x = 0;
    let result = [];
    for (let row = 0; row < r; row++) {
        let temp = [];
        for (let col = 0; col < c; col++) {
            temp.push(flattened[x]);
            x++;
        }
        result.push(temp);
    }
    return result;
};

console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
console.log(matrixReshape([[1,2],[3,4]], 2, 4));