/**
 * This program takes in an array and replaces each value with the greatest value to it's right. It then returns the original array.
 * 
 * @param {int[]} arr - The original array
 * 
 * @return {int[]} - The original array with altered values
 */

function greatestReplace(arr) {
    for (let i = 0; i < arr.length; i++) {
        let max = Math.max(...arr.slice(i + 1));
        console.log({ max });

        arr[i] = max;

    }
    arr[arr.length - 1] = -1;
    return arr;
}

let ex1 = [17, 18, 5, 4, 6, 1]; //[18,6,6,6,1,-1]
let ex2 = [400]; //[-1]

console.log(greatestReplace(ex2));