/**
 * This program takes in an array of integers and moves all the zeroes to the end of the array.
 * 
 * @param {int[]} nums - The array to manipulate
 * 
 * @return {int[]} - The original array with all the zeroes at the end
 */

function moveZeroes(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
}

let ex1 = [0, 1, 0, 3, 12]; //[1,3,12,0,0]
let ex2 = [0]; //[0]

console.log(moveZeroes(ex2));