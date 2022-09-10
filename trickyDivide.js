/**
 * Takes two numbers a dividend and a divisor and truncates them at the decimal. It then divides the dividend by the divisor without using the divide, multiply, or modulous operators.
 * 
 * @param {number} dividend - the number the divisor must be divided into.
 * @param {number} divisor - the number to divide into the dividend
 * 
 * @return {int} - the result of the division truncated at the decimal point
 */

let ex1 = [10, 3];
let ex2 = [7, -3];
let ex3 = [1, 1];
let ex4 = [-1, 1];
let ex5 = [7, -3];
let ex6 = [-1, -1];
let ex7 = [-2147483648, -1];

function divide(dividend, divisor) {
    let count = 0;

    let divNeg = ((dividend >= 0 && divisor > 0) || (dividend < 0 && divisor < 0)) ? true : false;

    if (divNeg && (dividend > Math.pow(2, 31) - 1) && (divisor === 1 || divisor === -1)) return (Math.pow(2, 31) - 1);
    if (!divNeg && (dividend <= Math.pow(-2, 31)) && (divisor === 1 || divisor === -1)) {
        return Math.pow(-2, 31);
    } else if (divNeg && (dividend <= Math.pow(-2, 31)) && (divisor === 1 || divisor === -1)) {
        return Math.pow(2, 31) - 1;
    }

    while (Math.abs(dividend) >= Math.abs(divisor)) {
        count++;
        dividend = (dividend > 0) ? dividend - Math.abs(divisor) : dividend + Math.abs(divisor);
    }

    return (divNeg) ? count : -count;
}
console.log(divide(ex4[0], ex4[1]));