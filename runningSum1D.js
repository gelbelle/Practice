/**
 * This function takes in a 1D array and returns an array of a running sum. A running sum is where you add the previous entry to the current entry. The new array will be the same length as the original array.
 * [1,2,3,4] -> [1,3,6,10].
 * 
 * @param {array} nums The original 1D array to be summed.
 * 
 * @return {array} - The new array obtained by adding the previous value to the current value.
 */

let ex1 = [1, 2, 3, 4];

function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    return nums;
}

console.log(runningSum(ex1));

//    Runtime: 114 ms, faster than 15.20% of JavaScript online submissions for Running Sum of 1d Array.
//    Memory Usage: 41.7 MB, less than 99.28% of JavaScript online submissions for Running Sum of 1d Array.


function altSolution(nums) {
    let summed = 0;
    return nums.map(num => summed += num);
}

console.log(altSolution(ex1));

//Seems to be the same as the original solution in terms of runtime and memory. Better because it doesn't mutate the original array.

function altSolution2(nums) {
    let summed = [];
    nums.reduce((prev, curr) => {
        summed.push(prev += curr);
        return prev;
    }, 0);
    return summed;
}

console.log(altSolution2(ex1));

//Seems to be about the same as the others.