/**
 * This program takes in a string and returns the same string with all captial letters as lowercase letters.
 * 
 * @param {string} s - The string to alter
 * 
 * @return {string} - Original string in lowercase
 */

function toLower(s) {
    const regex = /[A-Z]/g;
    for (let ch of s) {
        if (ch.match(regex)) {
            let code = s.charCodeAt(s.indexOf(ch));
            console.log({ ch, code });
            s = s.replace(ch, String.fromCodePoint(code + 32));
        }
        //return s.toLowerCase();
    }
    return s;
}

let ex1 = "Hello"; //hello
let ex2 = "here"; //here
let ex3 = "LOVELY"; //lovely

console.log(toLower(ex1));