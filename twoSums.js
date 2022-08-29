/**
 * This program takes in two arrays of integers and a target value. It then finds the indices of one integer from each array that adds up to the target.
 * 
 * @param {int} nums1 The first array of integers.
 * @param {int} nums2 The second array of integers.
 * @param {int} target The value the number from nums1 + nums2 should add up to
 * 
 * @return {int} Returns the array and index for each value used to add up to the target. If there are no values that add up to the target then it returns the closest total and the difference between it and the target.
 **/

let ex1 = {
    nums1: [-1, 3, 8, 2, 9, 5],
    nums2: [4, 1, 2, 10, 5, 20],
    target: 24
}

let ex2 = {
    nums1: [-1, 3, 8, 2, 9, 4],
    nums2: [4, 1, 2, 10, 5, 20],
    target: 24
}

//****Brute force solution O(n^2)****
function twoSumsBruteForce(nums1, nums2, target) {
    console.log({ nums1, nums2, target });
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            if (num2 === target - num1) {
                return {
                    "nums1": num1,
                    "nums2": num2,
                    "difference": target - (num1 + num2)
                };
            }
        }

    }
}
console.log("Brute force");
console.log(twoSumsBruteForce(ex2.nums1, ex2.nums2, ex2.target));

//****Improved version O(n)****
//Set.has() is fasther than array.includes()

function twoSumsBetter(nums1, nums2, target) {
    console.log({ nums1, nums2, target });
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(Math.abs(target - nums1[i] - i))) {
            return {
                "nums1": nums1[i],
                "nums2": nums2.find(num => num === Math.abs(target - nums1[i] - i)),
                "difference": target - (nums1[i] + Math.abs(target - nums1[i] - i))
            }
        }
    }

    console.log(result);
}

console.log(`
Better`);
console.log(twoSumsBetter(ex1.nums1, ex1.nums2, ex1.target));