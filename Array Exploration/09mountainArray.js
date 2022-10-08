/**
 * This function takes an array and returns true if it is a mountain array. This means that its values ascend until some point and then descend.
 * 
 * @param {int[]} arr - The array to check
 * 
 * @return {bool} - Whether or not it means the definition of a mountain array, values ascend until some point then descend.
 */

//TODO Check logic of if statements
function isMountain(arr) {
    if (arr.length < 3) return false;
    let idx = arr.indexOf(Math.max(...arr));

    return isAscending(arr.slice(0, idx + 1)) && isDescending(arr.slice(idx));
}

function isAscending(arr) {
    let ascending = false;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i]) {

            ascending = true;
        } else {

            return false;
        }
    }

    return ascending;
}

function isDescending(arr) {
    let descending = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {

            descending = true;

        } else {
            return false;
        }
    }
    return descending;
}

let ex1 = [2, 1]; //false
let ex2 = [3, 5, 5]; //false
let ex3 = [0, 3, 2, 1]; //true

console.log(isMountain(ex1));