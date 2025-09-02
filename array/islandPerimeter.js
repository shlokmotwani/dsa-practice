var islandPerimeter = function (grid) {
    let flatGrid = [...grid].flat();
    let perimeterSum = flatGrid.reduce((sum, num) => sum + 4 * num, 0);
    let adjacentCount = 0;

    // check for adjacent lands on X-axis
    for (let row = 0; row < grid.length; row++) {
        let currentRow = grid[row];
        console.log(`Current Row = ${currentRow}`);
        for (let col = 0; col < currentRow.length - 1; col++) {
            if (grid[row][col] === 1 && grid[row][col + 1] === 1) {
                adjacentCount++;
            }
        }
    }

    console.log(`adjacent on X-axis = ${adjacentCount}`);

    // check for adjacent lands on Y-axis
    for (let col = 0; col < grid[0].length; col++) {
        for (let row = 0; row < grid.length-1; row++) {
            if (grid[row][col] === 1 && grid[row+1][col] === 1) {
                adjacentCount++;
            }
        }
    }
    console.log(`adjacent on X-axis and Y-axis = ${adjacentCount}`);

    let overlappingEdgesCount = 2 * adjacentCount;

    return (perimeterSum - overlappingEdgesCount)
};

grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
console.log(islandPerimeter(grid)); // 16

grid = [[1,1]]
console.log(islandPerimeter(grid)); // 6

grid = [[1], [1]]
console.log(islandPerimeter(grid)); // 6