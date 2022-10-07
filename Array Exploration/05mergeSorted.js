/**
 * This program takes in two arrays of integers and the length of each array. It will will return the first array merged with the second and sorted.
 * 
 * @param {int[]} nums1 - The first array. This one must be the one that is return, nums2 must be merged into this one.
 * @param {int[]} nums2 - The second array. This one will be merged into the first one.
 * @param {int} m - the length of nums1.
 * @param {int} n - the length of nums2.
 * 
 * @return {int[]} nums1 - The final version of nums1 one with nums2 added and then sorted.
 */

function mergeSort(nums1, m, nums2, n) {
    nums1 = nums1.concat(nums2);
    return nums1.filter(num => num > 0).sort((a, b) => a - b);
}

//From discussion, seems to require that answers use m and n and insert and overwrite rather than built in methods.
function mergeSort2(nums1, m, nums2, n) {
    while (n > 0) {
        console.log({ m, n });
        console.log(nums1[m - 1], nums2[n - 1]);
        if ((nums1[m - 1] > nums2[n - 1]) || n < 0) {
            nums1[m + n - 1] = nums1[m - 1];
            console.log(nums1[m + n]);
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
        console.log({ nums1 });
    }
    return nums1;
}

let ex1 = [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3]; //[1,2,2,3,5,6]
let ex2 = [[1], 1, [], 0]; //[1]

//console.log(mergeSort(ex1[0], ex1[1], ex1[2], ex1[3]));
console.log(mergeSort2(ex1[0], ex1[1], ex1[2], ex1[3]));