/** This program takes in an unsigned integer and returns the number of "1" bits. This is known as the Hamming weight.
 * 
 * @param {int} binary - This is the binary number in string format
 * 
 * @return {int} - The number of ones the input string contains.
 * 
 * Multiple versions, all taken from discussion. Could not figure out how to get the number input properly, it kept converting it to scientific notation.
 */

let ex1 = 00000000000000000000000000001011;
let ex2 = 11111111111111111111111111111101;

function num1s(binary) {
    let count = 0;
    let arr = binary.toString(2);
    //console.log(arr);
    for (let digit of arr) {
        if (digit === "1") count++;
    }
    return count;
}

console.log(num1s(ex1));

function num1s2(binary) {
    return (binary.toString(2).split("0").join("").length);
}

console.log(num1s2(ex1));

function num1s3(binary) {
    return (binary.toString(2).split("1").length - 1);
}

console.log(num1s3(ex1));