/** 
 * This program takes in a square matrix and returns the sum of the diagonals.
 * 
 * @param {int[][]} mat - The matrix to perform the sums on
 * 
 * @return {int} - The sum of all the diagonals
 */

function diagonalSum(mat) {
    let sum = 0;
    for (let i = 0, j =mat[i].length-1; i < mat.length; i++,j--) {
        console.log(`Row: ${i}, el ${mat[i][i]} ${mat[j][j]}`);
        sum+=mat[i][i]+mat[i][j];
    }
    let mid = Math.floor(mat.length/2);
    console.log(mid);
    if(mat.length %2 !== 0) {
        console.log(mat[mid]);
        sum-=mat[mid][mid];
    }
    return sum;
}

let ex1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; //25

let ex2 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
]; //8

let ex3 = [
    [5]
]; //5

let ex4 = [
    [7, 3, 1, 9],
    [3, 4, 6, 9],
    [6, 9, 6, 6],
    [9, 5, 8, 5]
]; //55

console.log(diagonalSum(ex3));