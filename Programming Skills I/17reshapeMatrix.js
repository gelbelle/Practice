/**
 * This program taks in a matrix and reshapes it while maintaining the original data in the correct order.
 * 
 * @param {int[][]} mat - The matrix to reshape
 * @param {int} r - The new number of rows for the matrix
 * @param {int} c - The new number of columns for the matrix
 * 
 * @return {int[][]} - The newly reshaped matrix
 */

const { RoleContext } = require("twilio/lib/rest/chat/v1/service/role");

//TODO Handle if just one row required. Produces a 1D array, needs to be 2D still.
function matrixReshape(mat, r, c) {
    let arr = mat.flat();
    console.log(arr);
    let newMat = [];
    let idx = 0;

    if (arr.length !== r * c) return mat;
    while (newMat.length < r) {
        let temp = [];

        while (temp.length < c) {
            temp.push(arr[idx]);
            console.log(`i ${idx} r: ${arr.length} arr: ${arr[idx]} temp: ${temp}`);
            idx++;
        }

        newMat.push(temp);
        console.log({ newMat });
    }
    return newMat;
}

let ex1 = [
    [[1, 2], [3, 4]], 2, 4]; //[[1,2], [3,4]] **Not possible

let ex2 = [[[1, 2], [3, 4]], 1, 4]; //[[1,2,3,4]]

let ex3 = [[[1, 2], [3, 4]], 4, 1]; //[[1,2,3,4]]

console.log(matrixReshape(ex2[0], ex2[1], ex2[2]));

/* **** Faster version from discussion

var matrixReshape = function (nums, r, c) {
  var arr = nums.flat();
  if (r * c != arr.length) return nums;

  var res = [];
  while (arr.length) res.push(arr.splice(0, c));
  return res;
};

*/