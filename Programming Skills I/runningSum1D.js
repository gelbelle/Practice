/**
 * This function takes in a 1D array and returns an array of a running sum. A running sum is where you add the previous entry to the current entry. The new array will be the same length as the original array.
 * [1,2,3,4] -> [1,3,6,10].
 * 
 * @param {array} nums The original 1D array to be summed.
 * 
 * @return {array} - The new array obtained by adding the previous value to the current value.
 */

let ex1 = [1, 2, 3, 4];

function runningSum(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    return nums;
}

console.log(runningSum(ex1));

// nums[i] = nums[i] + nums[i-1] is faster than nums[i] += nums[i-1] Storage virtually the same.