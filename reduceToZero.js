/**
 * This program takes in an integer and counts the number of steps it takes to reduce it to zero.
 * 
 * @param {int} num - The number to be reduced to zero.
 * 
 * @param {int} - The number of steps it takes to reduce it to zero.
 */

let ex1 = 14;
let ex2 = 8;
let ex3 = 123;

//Got answer from discussion. Originally tried to use recursion, but kept getting undefined.
function reduceToZero(num, count = 0) {
    if (num % 2 !== 0) return reduceToZero(num - 1, count + 1);
    return (num > 1) ? reduceToZero(num / 2, count + 1) : count;
}

console.log(reduceToZero(ex1));

function reduceToZero2(num) {
    let count = 0;
    while (num > 0) {
        count++;
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num--;
        }

    }
    return count;
}

console.log(reduceToZero2(ex1));