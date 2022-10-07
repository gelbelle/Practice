/**
 * This prgoram takes in an array of ints and returns the longestimum number of consecutive 1's in the array.
 * 
 * @param {int[]} nums - The integer array to search for 1's
 * 
 * @return {int} - The counter run of 1's in the array.
 */

function longest1s(nums) {
    let counter = 0;
    let longest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            counter++;
            console.log({ counter });

        } else if (nums[i] === 0 || i === nums.length) {
            longest = Math.max(longest, counter);
            counter = 0;
        }
    }
    longest = Math.max(longest, counter);
    return longest;
}

let ex1 = [1, 1, 0, 1, 1, 1];
let ex2 = [1, 0, 1, 1, 0, 1];

console.log(longest1s(ex2));