/**
 * This program takes in an array of integers. It returns whether or not the array can be an arithmetic sequence.
 * 
 * @param {int[]} nums - The array of integers
 * 
 * @return {bool} - Returns true if the values in the array can be considered an arithmetic sequence. Otherwise it's false.
 */

let ex1 = [3, 5, 1]; //True
let ex2 = [1, 2, 4]; //False
let ex3 = [-68, -96, -12, -40, 16]; //True
let ex4 = [1, 10, 10, 10, 10, 19]; //False

function arithmeticProgression(nums) {
    nums.sort((a, b) => b - a);
    if (nums.length <= 2) return true;
    let diff = Math.abs(nums[0] - nums[1]);
    for (let i = 1; i < nums.length - 1; i++) {
        if (Math.abs(nums[i] - nums[i + 1]) !== diff) {
            return false;
        }
    }
    return true;
}

console.log(arithmeticProgression(ex4));