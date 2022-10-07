/**
 * This program takes an array of integers and returns how many of them have an even number of digits.
 * 
 * @param {int[]} nums - The array of integers to assess
 * 
 * @return {int} - The number of ints that have an even number of digits.
 */

function numEvens(nums) {
    let counter = 0;
    nums.forEach(num => {
        if (num.toString().length % 2 === 0) {
            counter++;
        }
    });
    return counter;
}

//This version takes longer, but follows the method suggested in the second hint
function numEvens2(nums) {
    let counter = 0;
    nums.forEach(num => {
        let length = 0;
        while (num >= 1) {
            num = num / 10;
            length++;
        }
        if (length % 2 === 0) {
            counter++;
        }
    });
    return counter;
}

let ex1 = [12, 345, 2, 6, 7896]; //2
let ex2 = [555, 901, 482, 1771]; //1

console.log(numEvens(ex1));
console.log(numEvens2(ex1));