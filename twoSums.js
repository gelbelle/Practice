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

let ex3 = {
    nums1: [7, 4, 1, 10],
    nums2: [4, 5, 8, 7],
    target: 14
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

//****Matrix Solution****
function sumMatrix(nums1, nums2, target) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let mid = Math.round(nums1.length / 2);
    console.log({ nums1, nums2, target, mid });


    let numbers = [];

    let sum = null;

    while (sum !== target && !isNaN(sum)) {
        let index1 = 0;
        let index2 = nums2.length - 1;
        let num1 = nums1.length > 2 ? nums1[index1] : nums1[0];
        let num2 = nums2.length > 2 ? nums2[index2] : nums2[0];

        sum = nums1[index1] + nums2[index2];
        console.log({ sum, num1, num2 });


        if (sum > target) {
            console.log(`${sum} > ${target}`);
            nums1 = nums1.slice(0, index1);
            nums2 = nums2.slice(0, index2);
            console.log({ index1, index2 });
            console.log({ nums1, nums2, num1, num2 });
        } else {
            console.log(`${sum} < ${target}`);

            nums1 = nums1.slice(index1 + 1, nums1.length);
            nums2 = nums2.slice(index2 + 1, nums2.length);
            console.log({ index1, index2 });
            console.log({ nums1, nums2, num1, num2 });

        }
        numbers.push(nums1[index1], nums2[index2]);
    }

    return {
        "First number": numbers[0],
        "Second number": numbers[1],
        "Target": target
    };

}

console.log(`
Matrix Solution`);
console.log(sumMatrix(ex1.nums1, ex1.nums2, ex1.target));