/**
 * This program takes in an array of two strings and the order of the alphabet to be used. It returns whether or not the strings are in lexicophric order.
 * 
 * @param {string[]} words - The two words to check sorting order of
 * @param {string} order - The order of the alphabet to use for lexicographic sorting
 * 
 * @return {bool} - Whether or not the words are in order according to the order provided
 */


/**
 * Very close. Could not figure out logic of while loop. I knew I needed to continue checking each pair of strings until they had a letter that wasn't equal. I did get it working when each list only had two words, but I couldn't figure it out with multiple words. Answer from discussion mostly.
 */

function isSorted(words, order) {

    for (let i = 0; i < words.length - 1; i++) {
        if (order.indexOf(words[i][0]) > order.indexOf(words[i + 1][0])) {
            return false;
        } else if (words[i][0] === words[i + 1][0]) {
            let idx = 1;
            while (words[i][idx] === words[i + 1][idx] &&
                idx < Math.max(words[i].length - 1, words[i + 1].length - 1)) idx++;
            if (words[i + 1][idx] === undefined) return false;
            if (order.indexOf(words[i][idx]) > order.indexOf(words[i + 1][idx])) return false;

        }
    }
    return true;
}


let ex1 = [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"]; //true h is before l
let ex2 = [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"]; //false, d is after l
let ex3 = [["apple", "app"], "abcdefghijklmnopqrstuvwxyz"]; //false because the second word is shorter and thus must come before
let ex4 = [["mtkwpj", "wlaees"], "evhadxsqukcogztlnfjpiymbwr"]; //true
let ex5 = [["hello", "hello"], "abcdefghijklmnopqrstuvwxyz"]; //true
let ex6 = [["ubg", "kwh"], "qcipyamwvdjtesbghlorufnkzx"]; //true
let ex7 = [["kxvyx", "ts"], "tiwjpbemkhalsqzdvucorfgxyn"]; //false
let ex8 = [["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"]; //true


console.log(isSorted(ex8[0], ex8[1]));