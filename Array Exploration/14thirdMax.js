/**
 * This program takes an array of integers and returns the third highest distinct number, otherwise it returns the maximum.
 * 
 * @param {int[]} nums - The array to examine
 * 
 * @return {int} - The third highest ditsinct number or the maximum if none exist.
 */

function thirdMax(nums) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length - 1; i++) {
        console.log({ nums });
        if (nums[i] === nums[i + 1]) {
            console.log(i, nums[i], nums[i + 1]);
            nums.splice(i, 1);
            i--;
        }
    }
    if (nums[2] === 0) return 0;
    return nums[2] || Math.max(...nums);
}

let ex1 = [3, 2, 1]; //1
let ex2 = [1, 2]; //2
let ex3 = [2, 2, 3, 1]; //1
let ex4 = [2, 2, 2, 1]; //2
let ex5 = [3, 3, 4, 3, 4, 3, 0, 3, 3]; //0

console.log(thirdMax(ex5));

//Clever example from discussion
/* nums = [...new Set(nums)];
nums = nums.sort((a, b) => b - a);
if (nums.length < 3) {
    return nums[0];
}
return nums[2]; */