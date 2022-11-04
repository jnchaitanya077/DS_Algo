// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let counter = 1;

    let startRow = 0;
    let endRow = n-1;
    let startCol = 0;
    let endCol = n-1;

    let spiral = [];

    for (let index = 0; index < n; index++) {
        spiral.push([]);
    };

    while (startRow <= endRow && startCol <= endCol) {
        
        // for first row
        for (let i = startCol; i <= endCol; i++) {
            spiral[startRow][i] = counter;
            counter++; 
        };
        startRow++;

        // last col
        for (let j = startRow; j <= endRow; j++) {
            spiral[j][endCol] = counter;
            counter++;
        };
        console.log(spiral);
        endCol--;

        //last row
        for (let k = endCol; k >= startCol; k--) {
            spiral[endRow][k] = counter;
            counter++;
        };
        endRow--;

        // middle colums
        for (let l = endRow; l >= startRow; l--) {
            spiral[l][startCol]= counter;
            counter++;
        }
        startCol++;
    }
    return spiral;
}

module.exports = matrix;
