/**
 * This program takes in two arrays of integers. The first is a subset of the second. It determines if there is a larger integer in the second array when the first and second array are equal in value. It returns -1 if there is no higher number otherwise return the number that is higher.
 * 
 * @param {int[]} nums1 -The first array, contains integers and is a subset of nums2.
 * @param {int[]} nums2 - The second array. Contains everything in nums1 plus more. This also contains only integers.
 * 
 * @return {int[]} - The array containing the numbers higher than the current number or -1 to indicate no higher number.
 */

let ex1 = [
    [4, 1, 2],
    [1, 3, 4, 2]
]; //[-1,3,-1]
let ex2 = [
    [2, 4],
    [1, 2, 3, 4]
]; //[3, -1]

let ex3 = [
    [1, 3, 5, 2, 4],
    [6, 5, 4, 3, 2, 1, 7]
]; //[7,7,7,7,7]

function nextGreater(nums1, nums2) {
    let greaterNums = [];

    for (const element of nums1) {
        for (let j = 0; j < nums2.length; j++) {
            if (element === nums2[j]) {
                if (nums2.slice(j).find(num2 => num2 > nums2[j])) {
                    console.log(nums2.slice(j + 1));
                    greaterNums.push(nums2.slice(j + 1).find(num2 => num2 > nums2[j]));
                } else {
                    greaterNums.push(-1);
                }
            }
        }
    }
    return greaterNums;
}

//** Alternative solution adapted from discussion forum
function nextGreater2(nums1, nums2) {
    const greaterNums = [];
    for (let num of nums1) {
        const idx = nums2.indexOf(num);
        if (nums2.slice(idx).find(num2 => num2 > nums2[idx])) {
            greaterNums.push(nums2.slice(idx + 1).find(num2 => num2 > nums2[idx]));
        } else {
            greaterNums.push(-1)
        }
    }
    return greaterNums;
}

console.log(nextGreater(ex3[0], ex3[1]));

console.log(nextGreater2(ex3[0], ex3[1]));