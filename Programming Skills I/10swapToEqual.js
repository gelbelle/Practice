/**
 * This program takes in two strings and checks to see whether ot not a single swap of two letters can make them equal.
 * 
 * @param {string} word1 - The first word to check
 * @param {string} word2 - The word to check the first against
 * 
 * @return {bool} - Returns whether or not the strings can be made equal or not.
 */

let ex1 = ["bank", "kanb"]; //true
let ex2 = ["attack", "defend"]; //false
let ex3 = ["kelb", "kelb"]; //true
let ex4 = ["lxt", "ltx"]; //true
let ex5 = ["caa", "aza"]; //false

//For loop and first if were mine. Most of the rest of the logic was gotten from discussion.
function areAlmostEqual(word1, word2) {
    if (word1 === word2) return true;

    let differences = [];
    for (let i = 0; i < word1.length; i++) {
        console.log(word1[i], word2[i]);
        if (word1[i] !== word2[i]) differences.push(i);
        console.log({ differences });
    }
    if (differences > 2) return false;
    let oneSwap = (differences.length === 2) &&
        (word1[differences[0]] === word2[differences[1]]) &&
        (word1[differences[1]] === word2[differences[0]]);

    return differences.length === 0 || oneSwap;

}

console.log(areAlmostEqual(ex1[0], ex1[1]));