/**
 * This program takes in two strings, {ransomNote} and {magazine}. It returns true if {ransomNote} can be created from the letters contained in {magazine}
 * 
 * @param {string} ransomNote - The note to be created
 * @param {string} magazine - The source of characters to be used to create the note
 * 
 * @return {bool} - Whether or not the note can be created using the characters in magazine
 */

function canCreate(ransomNote, magazine) {
    let create = true;
    let mag = [...magazine];
    [...ransomNote].forEach(char => {
        const idx = mag.findIndex(ltr => ltr === char);
        (idx=== -1) ? create = false : mag[idx] = 0;
    })
    return create;
}

//Alternative from discussion simplified - bigO better than 69%
function canCreate2(ransomNote, magazine) {

    //Doesn't work because false doesn't break the forEach
  /*   [...ransomNote].forEach(ch => {
        if(magazine.includes(ch)) {
            magazine = magazine.replace(ch,"");
        } else {
            return false;
        }
    }) */
    for(let ch of ransomNote) {
        if(magazine.includes(ch)) {
            magazine = magazine.replace(ch, 0);
        } else {
            return false;
        }
    }
    return true;
}

let ex1 = ["a", "b"]; //false
let ex2 = ["aa", "ab"]; //false
let ex3 = ["aa", "aab"]; //true

console.log(canCreate(ex1[0], ex1[1]));

console.log(canCreate2(ex3[0], ex3[1]));