/**
 * This program takes in two strings and merge them in alternating order. If one is longer than the other the extra letters are appended to the end of the resulting string
 * 
 * @param {string} word1 The first word
 * @param {string} word2 The second word
 * 
 * @return {string} - The merged string
 */

function alternateMerge(word1, word2) {
    let str = "";
    let longer = word1.length > word2.length ? word1 : word2;
    let shorter = word1.length > word2.length ? word2 : word1;

    const length = Math.max(word1.length, word2.length);
    for (let i = 0; i < length; i++) {
        if (shorter[i]) {
            str += [...word1[i]] + [...word2[i]];
        } else {
            str += [...longer[i]];
        }
    }
    return str;

}

let ex1 = ["abc", "pqr"]; //apbqcr
let ex2 = ["ab", "pqrs"]; //apbqrs

console.log(alternateMerge(ex2[0], ex2[1]));

/** *** Example
 * Operator I was looking for ??
 * 
 *   for (let i = 0; i < maxLength; i++) {
    result += (a[i] ?? '') + (b[i] ?? '')
  }
*/

