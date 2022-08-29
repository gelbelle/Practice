/** 
 * This program takes in a roman numeral between 1 and 3999 and returns the number as an integer.
 * @param {string} roman - The roman numeral to be transformed
 * @return {int} converted - The integer version of the roman numeral input.
 **/

let ex1 = "III";
let ex2 = "LVIII";
let ex3 = "MCMXCIV";
let ex4 = "I";
let ex5 = "IX";
let ex6 = "IV";
let ex7 = "XL";

const dict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

function toInt(roman) {
    let sum = 0;
    let arr = roman.split("");
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "I" && (arr[i + 1] === "V" || arr[i + 1] === "X")) ||
            (arr[i] === "X" && (arr[i + 1] === "L" || arr[i + 1] === "C")) ||
            (arr[i] === "C" && (arr[i + 1] === "D" || arr[i + 1] === "M"))) {

            sum -= dict[arr[i]];
        } else {
            sum += dict[arr[i]];
        }
    }
    console.log(`The roman numeral ${roman} is equivalent to the integer ${sum}`);
}

toInt(ex7);