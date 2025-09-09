var islandPerimeter = function (grid) {
    let result = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1) {
                let perimeter = 4;
                if (row > 0 && grid[row - 1][col] === 1) {
                    perimeter -= 2;
                }
                if (col > 0 && grid[row][col - 1] === 1) {
                    perimeter -= 2;
                }
                result += perimeter;
            }
        }
    }
    return result;
};

grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
console.log(islandPerimeter(grid)); // 16

grid = [[1, 1]]
console.log(islandPerimeter(grid)); // 6

grid = [[1], [1]]
console.log(islandPerimeter(grid)); // 6