/**
 * This program takes in an array of numbers. These numbers must be used to determine the perimeter of the largest triangle possible with any three of the numbers in the array. The total length of the perimetre is returned, iIf it is not possible to form a triangle then 0 is returned.
 * 
 * @param {int[]} sides - an array containing all possible side lengths for the triangles.
 * 
 * @return {int} - The total length of the perimeter of the largest possible triangle or 0 if a triangle is not possible.
 */

let ex1 = [2, 1, 2];
let ex2 = [1, 2, 1];
let ex3 = [3, 2, 3, 4];

//***Stack overflow error ***
//Should've sorted and then taken first set of three that is a triangle.
/* function largestPerimeter(lengths) {
    let possibilities = combosThree(lengths);
    let triangles = [];
    for (let attempt of possibilities) {
        if (isTriangle(attempt)) {
            triangles.push(attempt.reduce((total, curr) => total + curr));
        }
    }
    return (triangles.length !== 0) ? Math.max(...triangles) : 0;
} */

function isTriangle(sides) {
    let a = sides[0];
    let b = sides[1];
    let c = sides[2];
    return (a + b > c) && (a + c > b) && (b + c > a);
}



function combosThree(arr) {
    return arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [
        []
    ]).filter(item => item.length === 3);
}

//***Solution found through discussion
function largestPerimeter(nums) {
    nums.sort((a, b) => b - a);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < (nums[i + 1] + nums[i + 2])) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }
    return 0;
}

console.log(largestPerimeter(ex3));