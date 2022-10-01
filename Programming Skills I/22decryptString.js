/**
 * This program takes in a string comprised of integers and "#". It decrypts the numerical string to return a alphabetic string.
 * 
 * @param {string} s - The string containing numbers and "#"
 * 
 * @return {string} - The decoded string containing only letters
 */

function decrypt(s) {
    const dict = new Map();
    dict.set("1", "a");
    dict.set("2", "b");
    dict.set("3", "c");
    dict.set("4", "d");
    dict.set("5", "e");
    dict.set("6", "f");
    dict.set("7", "g");
    dict.set("8", "h");
    dict.set("9", "i");

    dict.set("10#", "j");
    dict.set("11#", "k");
    dict.set("12#", "l");
    dict.set("13#", "m");
    dict.set("14#", "n");
    dict.set("15#", "o");
    dict.set("16#", "p");
    dict.set("17#", "q");
    dict.set("18#", "r");
    dict.set("19#", "s");
    dict.set("20#", "t");
    dict.set("21#", "u");
    dict.set("22#", "v");
    dict.set("23#", "w");
    dict.set("24#", "x");
    dict.set("25#", "y");
    dict.set("26#", "z");

    let interpretted = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === "#") {
            interpretted += dict.get(s[i] + s[i + 1] + s[i + 2]);
            i += 2;
        } else {
            interpretted += dict.get(s[i]);
        }

    }
    return interpretted;
}

let ex1 = "10#11#12"; //jkab
let ex2 = "1326#"; //acz

console.log(decrypt(ex1));

//Found out that unicode offset is 96 from discussion
//More scalable than map version, although slower

function decrypt2(s) {
    let interpretted = "";
    const charOffset = 96;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === "#") {
            interpretted += String.fromCodePoint(parseInt(s[i] + s[i + 1]) + charOffset);
            i += 2;
        } else {
            interpretted += String.fromCodePoint(parseInt(s[i]) + charOffset);
        }
    }
    return interpretted;
}

console.log(decrypt2(ex1));





/** *** Simpler regex solution from discussion
 * const freqAlphabets = s => s.replace(/(\d\d#|\d)/g, t => map[t.length === 3 ? t[0] + t[1] : t]);
 * 
 * var freqAlphabets = function(s) {
    return s
        .match(/\d{2}(?=#)|\d/g)
        .map(num => String.fromCharCode(96 + +num))
        .join('')
};
 */