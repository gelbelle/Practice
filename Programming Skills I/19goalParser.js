/**
 * This program that takes a string and interprets it into goal based on an alphabet G -> G, () -> o, (al) -> al.
 * 
 * @param {string} commonad - The command to interpret
 * 
 * @return {string} - The interpretted string.
 */

function interpret(command) {
    const dict = new Map();
    dict.set("G", "G");
    dict.set("()", "o");
    dict.set("(al)", "al");
    let interpretted = "";
    let temp = "";

    console.log(dict);
    [...command].forEach(ch => {
        temp += ch;
        console.log({ ch, temp });

        if (dict.has(temp)) {
            interpretted += dict.get(temp);
            temp = "";
        }
        console.log({ interpretted });
    });

    return interpretted;
}

let ex1 = "G()(al)"; //Goal
let ex2 = "G()()()()(al)" //Gooooal
let ex3 = "(al)G(al)()()G" //alGalooG

console.log(interpret(ex3));

/** *** Examples from discussion
 * return command.split("()").join("o").split("(al)").join("al");
 * 
 * return command.replaceAll('()','o').replaceAll('(al)','al')
 * 
 * const interpret = command => command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al')
 */