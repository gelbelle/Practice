/**
 * This program takes in two strings and determines with character was added to the second one that is not in the first one.
 * 
 * @param {string} s - Original string
 * @param {string} t - String created from s with one additional letter
 * 
 * @return {string} - The letter that was added to t
 */

function findDiff(s, t) {
    if (t.length === 1) return t;
    [...s].forEach(ch => t = t.replace(ch, "")); //This way MUCH faster
    /*     for (let ch of s) {
            console.log({ ch });
            t = t.replace(ch, "");
        } */
    return t;
}

let ex1 = ["abcd", "abcde"]; //e
let ex2 = ["", "y"]; //y

console.log(findDiff(ex1[0], ex1[1]));