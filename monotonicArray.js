/**
 * Takes an array of numbers and returns whether or not the arary is monotonic, increasing or decreasing by one, or stays the same.
 * 
 * @param {array} nums - An array of integers
 * 
 * @return {bool} Returns true or false
 */

const { NumberInstance } = require("twilio/lib/rest/pricing/v2/voice/number");

let ex1 = [1, 2, 2, 3];
let ex2 = [6, 5, 4, 4];
let ex3 = [2, 3, 1];

function isMonotonic(nums) {
    let testArr = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            testArr.push("less");
        } else if (nums[i] > nums[i + 1]) {
            testArr.push("more");
        } else {
            testArr.push("same");
        }
    }
    return testArr.every(val => val === "less" || val === "same") || testArr.every(val => val === "more" || val === "same");
}

console.log(isMonotonic(ex1));