/**
 * This program takes in an array and determines if there is a double of any number in the array.
 * 
 * @param {int[]} arr - The array to check for a value and its double
 * 
 * @return {bool} - Whether or not the double exists.
 */

//Deliberately not using built in methods
function checkDouble(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (2 * arr[j] === arr[i] && i !== j) {
                return true;
            }
        }
    }
    return false;
}

let ex1 = [10, 2, 5, 3]; //True 10 is double 5
let ex2 = [3, 1, 7, 11]; //False, no doubles
let ex3 = [-2, 0, 10, -19, 4, 6, -8]; // False

console.log(checkDouble(ex3));