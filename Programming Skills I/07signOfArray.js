/**
 * This program takes in an array of positive and negative integers. It returns whether the product of the numbers will be positive (1), negative (-1), or zero (0).
 * 
 * @param {int[]} values - The array of integers to be multiplied.
 * 
 * @return {int} - An integer value indicating whether the final product of the array will be positive or negative.
 */

let ex1 = [-1, -2, -3, -4, 3, 2, 1]; //1
let ex2 = [1, 5, 0, 2, -3]; //0
let ex3 = [-1, 1, -1, 1, -1]; //-1
let ex4 = [1, 5, 0, 2, -3]; //0

function arraySign(nums) {
    let negatives = 0;
    if (nums.find(num => num === 0) === 0) return 0;

    nums.forEach((num) => {
        console.log(num);
        if (num < 0) negatives++
    })
    return (negatives % 2 === 0) ? 1 : -1;
}

console.log(arraySign(ex4));