/**
 * This program takes in an array containing the values for an n-ary tree. It must return the preorder traversal of its nodes' values. Each group of children is separated by a null value.
 * 
 * @param {int[]} root - the array containing the tree.
 * 
 * @return {int[]} - Returns an array containing the values passed in preorder traversal of the given nodes.
 */

let ex1 = [1, null, 3, 2, 4, null, 5, 6]; //[1,3,5,6,2,4]
let ex2 = [1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]; //[1,2,3,6,7,11,14,4,8,12,5,9,13,10]


//***Needed to use solution from Leet. Partially due to misunderstood input and partially due to logic.
/* const preOrder = (node, list) => {
    list.push(node.val);
    if(node.children) {
        for(let i = 0; i < node.children.length; i++) {
            preOrder(node.children[i], list);
        }
    }
    return list;
}


var preorder = function(root) {
    if(root === null) return [];
    return preOrder(root, []);
}; */
function preorderTranverse(root) {
    let nodes = {};
    let names = 1;
    let preorder = [];


    for (const element of root) {
        if (element) {
            if (Object.keys(nodes).includes(names.toString())) {
                nodes[names].push(element);
            } else {
                nodes[names] = [element];
            }
        } else {
            names++;
        }
    }
    /*     while (Object.keys(nodes).length !== 0) {
            Object.keys(nodes).forEach(node => {
                preorder.push(nodes[node].shift());
                if (nodes[node].length === 0) {
                    delete nodes[node];
                }
            });
        } */

    let fullLength = Object.keys(nodes).length;

    while (Object.keys(nodes).length !== 0) {

        for (let i = 1; i <= Object.keys(nodes).length; i++) {
            console.log(nodes[i], i);
            if (i === fullLength) {
                console.log("check if bottom row");

                while (nodes[i].length !== 0) {
                    /*console.log("removing bottom row");
                    console.log(`Pushing ${nodes[i][0]}`); */
                    preorder.push(nodes[i].shift());
                }
                delete nodes[i];
            } else if (i in nodes) {
                console.log(`Pushing ${nodes[i][0]}`);
                preorder.push(nodes[i].shift());
                if (nodes[i].length === 0) delete nodes[i];
            }
            /* else if (nodes[i].length === 0) {
                           console.log("***deleting***");
                           delete nodes[i];
                       } */

        }
        console.log(`Current nodes ${Object.keys(nodes)}`);
        console.log(`Preorder ${preorder}`);
    }

    console.log(nodes);
    return preorder;
}

console.log(preorderTranverse(ex1));