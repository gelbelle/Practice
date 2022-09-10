/**
 * This function takes in two integers, low and high. It returns the number of odd integers between the two values.
 * 
 * @param {int} low - The low end of the range, inclusive
 * @param {int} high - The high end of the range, inclusive
 * 
 * @return {int} - The number of odd integers within the range given.
 */

let ex1 = [3, 7];
let ex2 = [8, 10];

function numOdds(low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        console.log({ i });
        (i % 2 !== 0) ? count++ : count += 0;

    }
    return count;
}

console.log(numOdds(ex1[0], ex1[1]));