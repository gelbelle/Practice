/** 
 * This program takes in an array of integers and a single integer value. It removes all entries that contain that value in-place. It does not create a new array.
 * 
 * @param {int[]} nums - The array containing the integers to search and alter
 * @param {int} val - The value to remove from the array.
 * 
 * @return {int[]} - The original array with each instance of val removed.
 */

//Works here, doens't work on website
function expectedNums(nums, val) {
    let k = nums.filter(num => num !== val);
    return k;
}

function expectedNums2(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums;
}

let ex1 = [[3, 2, 2, 3], 3]; //2
let ex2 = [[0, 1, 2, 2, 3, 0, 4, 2], 2]; //5

console.log(expectedNums(ex2[0], ex2[1]));
console.log(expectedNums2(ex2[0], ex2[1]));