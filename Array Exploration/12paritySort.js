/**
 * This program takes an array of integersand moves all even values to the begining of the array and all odd values to the end.
 * 
 * @param {int[]} nums - The array to rearrange
 * 
 * @return {int[]} - The original array with even integers at the beginning and odd ones at the end.
 */

//Easy after I reread the problem and it said we could return any array, that it didn't have to be in-place even though that's the section this was in.
function paritySort(nums) {
    let result = [];
    for (const num of nums) {
        if (num % 2 === 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }
    return result;
}

let ex1 = [3, 1, 2, 4];
let ex2 = [0];
let ex3 = [1, 3, 5, 0];

console.log(paritySort(ex3));

//Example from discussion of in-place
/* var sortArrayByParity = function(nums) {
    let len = nums.length;
    
    let i = 0;
    for (let j = 0; j < len; j++) {
        // if already is even, skip exchange
        if (nums[i] % 2 == 0) {
            i++;
        // if is odd & next j is even, exchange
        } else if (nums[j] % 2 == 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    
    return nums;
};

//Better example
const sortArrayByParity = A => A.filter(e=>e%2==0).concat(A.filter(e=>e%2==1))
//Slightly more readable version
var sortArrayByParity = function(A) {
    let even = A.filter(a => a % 2 === 0);
    let odd = A.filter(a => a % 2 === 1);
    return even.concat(odd);
}; */