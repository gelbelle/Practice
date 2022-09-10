/**
 * Takes in a binary tree and determines if it is balanced. Balanced is defined as the left and right subtrees of every node differ in height by no more than 1.
 * 
 * @param {array} tree - The tree in array form
 * 
 * @return {bool} whether or not the tree is balanced
 */

let ex1 = [3, 9, 20, null, null, 15, 7];
let ex2 = [1, 2, 2, 3, 3, null, null, 4, 4];
let ex3 = [];

function balancedTree(tree) {
    return tree.length === 0 ? true : false;
}

console.log(balancedTree(ex3));