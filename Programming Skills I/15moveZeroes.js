/**
 * This program takes in an array of integers and moves all the zeroes to the end without changing the ordering of the other elements.
 * 
 * @param {int[]} nums - The array to rearrange.
 * 
 * @return {void} - The original array must be reordered so the zeroes have moved to the end.
 */

//TODO find an end point to ensure that every position is checked until all the zeroes are at the end.
function moveZeroes(nums) {
    let numZeroes = nums.filter(num => num === 0).length;
    let zeroStart = nums.length - numZeroes;
    let zeroInx = nums.findIndex(num => num === 0);
    //console.log({ zeroStart });
    while (zeroInx < zeroStart && zeroInx !== -1) {
        console.log(`Index of 0 ${zeroInx}`);

        for (let i = 0; i < nums.length; i++) {
            console.log(`in for loop ${nums[i]}`);
            if (nums[i] === 0) {
                nums.splice(i, 1);
                nums.push(0);
                zeroInx = nums.findIndex(num => num === 0);

                console.log({ nums, zeroInx, zeroStart });
                if (zeroInx !== zeroStart) {
                    console.log("Recursion");
                    moveZeroes(nums);
                } else {
                    console.log("breaking");
                    break;
                }
            }
            //console.log({ nums });
        }
    }
    console.log(`Final array ${nums}`);
}

let ex1 = [0, 1, 0, 3, 12]; //[1,3,12,0,0]
let ex2 = [0]; //[0]
let ex3 = [0, 0, 1]; //[1,0,0]

moveZeroes(ex3);

/* Simplified version of my code found in discussion
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * /
 let moveZeroes = function(nums) {
    for(let i= nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.push(0) 
            nums.splice(i,1)
        }
    }
    return nums
};*/

/* Created my own simplified version nearly identical to discussion, but generated on my own
function moveZeroes(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums; 
}*/