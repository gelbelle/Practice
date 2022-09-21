/**
 * This program takes in an array and returns the sum of all possible odd-length subarrays.
 * 
 * @param {int[]} arr - Array to be subdivided
 * 
 * @return {int} - The total of all the odd length sub arrays.
 */

//My original algorithm has the extra lines commented out. The simplified version was obtained from the discussion, but was very close to my own. But testing was slightly slower
function sumOddSubararys(arr) {
    let total = 0;
    //This line returns the result of all of the sub arrays of length 1
    //total += arr.reduce((sum, cur) => sum + cur, 0);
    //If the length of the array is odd then the sum of the array is added again.
    // total = (arr.length % 2 !== 0) && arr.length >= 3 ? total * 2 : total;

    //if (arr.length > 3) {
    let subLength = 1;

    while (arr.length >= subLength) {
        for (let i = 0; i < arr.length - subLength + 1; i++) {
            console.log(arr.slice(i, i + subLength));
            total += arr.slice(i, i + subLength).reduce((sum, cur) => sum + cur, 0);
            console.log({ total });
        }
        subLength += 2;
    }
    //}
    return total;

}

let ex1 = [1, 4, 2, 5, 3]; //58
let ex2 = [1, 2]; //3
let ex3 = [10, 11, 12]; //66
let ex4 = [1]; //1

console.log(sumOddSubararys(ex1));