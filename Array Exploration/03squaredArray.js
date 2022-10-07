/**
 * This program takes in an array of integers in non-descending order and returns the squares of each number also sorted in non-descending order.
 * 
 * @param {int[]} nums - The array to be squared and resorted
 * 
 * @return {int[]} - The array resorted after squaring each number
 */

function squareArray(nums) {
    return nums.map(num => num * num).sort((a, b) => a - b);
}

let ex1 = [-4, -1, 0, 3, 10]; //[0,1,9,16,100]
let ex2 = [-7, -3, 2, 3, 11]; //[4,9,9,49,121]

console.log(squareArray(ex2));
