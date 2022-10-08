/**
 * This program takes in an array of integers and returns an array of any integers that are missing based on counting in base 10.
 * 
 * @param {int[]} nums - The counting array
 * 
 * @return {int[]} - Any integers that are missing from the counting array
 */


function findMissing(nums) {
    let missing = [];
    let contains = new Set(nums);
    console.log({ contains });
    for (let i = 1; i <= nums.length; i++) {
        if (!contains.has(i)) missing.push(i);
    }
    return missing;
}

let ex1 = [4, 3, 2, 7, 8, 2, 3, 1]; //[5,6]
let ex2 = [1, 1]; //[2]

console.log(findMissing(ex2));