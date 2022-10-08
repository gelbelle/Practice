/**
 * This program takes an array of integers. It is supposed to be in non-decreasing order. It returns the number of integers that are out of place.
 * 
 * @param {int[]} heights - The array of integers
 * 
 * @return {int} - The number of integers that are out of order
 */

//This is based on the hint in the question. It feels like it takes too much memory though.
function checkHeight(heights) {
    let counter = 0;
    let temp = Array.from(heights);
    temp.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== temp[i]) counter++;
    }
    return counter;
}

let ex1 = [1, 1, 4, 2, 1, 3]; //3
let ex2 = [5, 1, 2, 3, 4]; //5
let ex3 = [1, 2, 3, 4, 5]; //0

console.log(checkHeight(ex2));