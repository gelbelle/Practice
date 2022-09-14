/**
 * This program reads in an integer and returns whether it is happy or not. A happy number is a number that results in 1 after replacing the number with the squares of its digits. This continues until it results in 1 or finds an endless loop.
 * 19 = 1^2 + 9^2 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 *
 * @param {int} num - The number passed to the function to check
 * 
 * @return {bool} - Whether or not the number is happy.
 */

let ex1 = 19; //True
let ex2 = 2; //False

function isHappy(n, numsSeen = []) {
    let total = 0;
    for (let digit of n.toString()) {
        total += Math.pow(digit, 2);
    }
    if (n === 1) {
        return true;
    } else if (numsSeen.find(num => num === total)) {
        return false;
    } else {
        numsSeen.push(total);
        return isHappy(total, numsSeen);
    }
}

console.log(isHappy(ex2));