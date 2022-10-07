/**
 * This function takes in an array of integers and removes all duplicate values;
 * 
 * @param {int[]} nums - The array to check for duplicates
 * 
 * @return {int[]} - The original array with duplicates removed
 */

//Built in functions do not work
function removeDup(nums) {
    let seen = [];
    for (let i = 0; i < nums.length; i++) {
        if (seen.indexOf(nums[i]) !== -1) {
            nums.splice(i, 1);
            i--;
        } else {
            seen.push(nums[i]);
        }
    }
    return nums;
}

let ex1 = [1, 1, 2]; // [1,2]
let ex2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; //[0,1,2,3,4]

console.log(removeDup(ex2));