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
let ex5 = [-2147483648, 1];
let ex6 = [-1, -1];
let ex7 = [-2147483648, -1];
let ex8 = [2147483647, 1];

//Takes too long, but seems to work. Solution available if desired.
function divide(dividend, divisor) {
    console.log({ dividend, divisor });
    let count = 0;
    let dividendNeg = isNegative(dividend);
    console.log({ dividendNeg });
    let divisorNeg = isNegative(divisor);
    console.log({ divisorNeg });
    let isNeg = dividendNeg !== divisorNeg;

    console.log({ isNeg });

    if (divideByOne(divisor) && outsideBounds(dividend, divisor)) {
        console.log(`Divide by ${divisor}`);
        if (isNeg) {
            console.log({ isNeg });
            if (dividend >= Math.pow(2, 31) - 1) {
                return (Math.pow(2, 31)) - 1;
            } else if (dividend <= Math.pow(-2, 31)) {
                return Math.pow(-2, 31);
            }
        } else if ((dividend >= Math.pow(2, 31) - 1) || (dividend <= Math.pow(-2, 31))) {
            console.log({ isNeg });
            return Math.pow(2, 31) - 1;
        }
    } else {
        console.log("While");
        while (Math.abs(dividend) >= Math.abs(divisor)) {
            count++;
            console.log({ count });
            dividend = (dividend > 0) ? dividend - Math.abs(divisor) : dividend + Math.abs(divisor);
            console.log({ dividend });
        }
    }
    return isNeg ? -count : count;
}

function outsideBounds(num1, num2) {
    return (num1 >= Math.pow(2, 31) - 1) ||
        (num1 <= Math.pow(-2, 31));
}

function isNegative(num) {
    return num < 0 ? true : false;
}

function divideByOne(num) {
    return num === 1 || num === -1;
}

console.log(divide(ex7[0], ex7[1]));