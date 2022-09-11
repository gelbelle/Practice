/**
 * This program takes in an integer and returns the different between the product of its digits and the sum of its digits.
 * ex: 2*3*4 = 24, 2+3+4 = 9; 24-9 = 15.
 * 
 * @param {int} num - Number to multiply and add
 * 
 * @return {int} - Difference between product and sum of number's digits.
 */

let ex1 = 234;
let ex2 = 4421;

function diffProdSum(num) {
    let multiply = [...num.toString()].reduce((total, digit) => total * digit, 1);

    let add = [...num.toString()].reduce((total, digit) => parseInt(total) + parseInt(digit), 0);

    return multiply - add;
}

console.log(diffProdSum(ex1));