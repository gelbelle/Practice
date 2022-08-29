/**
 * This program takes in an array of integers and a target value. It returns the indices of the two numbers that add up to the target value.
 * 
 * @param {array[int]} nums The array of numbers to search.
 * @param {int} target The target value the numbers must add up to
 * 
 * @return {array[int]} result An array containing the indices of the two numbers used to add up to the target value.
 **/

let ex1 = {
    numbers: [3, 2, 4],
    target: 6
}

let ex2 = {
    numbers: [3, 3],
    target: 6
}

let ex3 = {
    numbers: [2, 7, 11, 15],
    target: 9
}

function newNum(result, first, second) {
    return {
        [result]: {
            firstNum: first,
            secondNum: second
        }
    };
}

function sums(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];
        if (sum === target) {
            result.push(i, i + 1);
            break;
        }
    }
    console.log(`The numbers at ${result} add up to the target value ${target}`);
}

sums(ex1.numbers, ex1.target);