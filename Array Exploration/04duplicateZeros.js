/**
 * This program takes in an array of integers and inserts a zero after each zero it finds. The length of the returning array is the same as the original.
 * 
 * @param {int[]} arr - The array to insert zeroes into.
 * 
 * @return {int[]} - The array with the additional zeroes inserted.
 */

function dupZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i++;

        }
    }
    return arr;
}

let ex1 = [1, 0, 2, 3, 0, 4, 5, 0]; //[1,0,0,2,3,0,0,4]
let ex2 = [1, 2, 3]; //[1,2,3]

console.log(dupZeros(ex2));