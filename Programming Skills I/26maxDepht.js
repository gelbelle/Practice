/**
 * This program takes in a binary tree and returns its maximum depth.
 * 
 * @param {treeNode} root - The root value of the binary tree leading to the rest of the tree.
 * 
 * @return {int} - The deepest depth of the tree.
 */

//TODO If statement for decrement. Should decrement when going back to parent (when parent seen). Right now checking parent and left seen, but fails when left is null. Maybe just when parent is seen?
//Got outer while loop from GeeksforGeeks. I had that logic, but it was ending after one pass. The tutorial gave me the nested loops to use both conditions.
function maxDepth(root) {
    let currNode = root;
    let currDepth = 0;
    let stack = [];
    let seen = new Set();

    if (root === null) return 0;
    let depth = 1;


    while (currNode !== null || stack.length > 0) {
        console.log("*****Back to top*****");
        console.log({ currNode });
        while (currNode !== null) {
            console.log("*****Not null*****");
            console.log(currNode.val);
            stack.push(currNode);
            seen.add(currNode);
            currDepth++;
            seen.add(currNode);
            currNode = currNode.left;
            console.log({ currDepth });
            depth = Math.max(currDepth, depth);
            console.log({ seen });
        }

        if (currNode === null && stack.length !== 0) {
            console.log("*****Null*****");
            let parent = stack.pop();
            console.log(`Parent is`);
            console.log(parent);
            console.log("left");
            console.log(parent.left);
            currNode = parent.right;
            if ((seen.has(parent) && parent.right === currNode)) currDepth--;



            console.log("Next node to check");
            console.log({ currNode });
            console.log({ currDepth });
        }
    }
    return depth;
}

let ex1 = { //3
    "val": 3,
    "left": {
        "val": 9,
        "left": null,
        "right": null
    },
    "right": {
        "val": 20,
        "left": {
            "val": 15,
            "left": null,
            "right": null
        },
        "right": {
            "val": 7,
            "left": null,
            "right": null
        }
    }
}
let ex2 = { //2
    "val": 1,
    "left": null,
    "right": {
        "val": 2,
        "left": null,
        "right": null
    }
}
let ex3 = { //4
    "val": 0,
    "left": {
        "val": 2,
        "left": {
            "val": "1a",
            "left": {
                "val": 5,
                "left": null,
                "right": null
            },
            "right": {
                "val": "1b",
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "val": 4,
        "left": {
            "val": 3,
            "left": null,
            "right": {
                "val": 6,
                "left": null,
                "right": null
            }
        },
        "right": {
            "val": -1,
            "left": null,
            "right": {
                "val": 8,
                "left": null,
                "right": null
            }
        }
    }
}
let ex4 = { //4
    "val": -8,
    "left": {
        "val": -6,
        "left": {
            "val": 6,
            "left": null,
            "right": {
                "val": 5,
                "left": null,
                "right": null
            }
        },
        "right": null
    },
    "right": {
        "val": 7,
        "left": null,
        "right": null
    }
}
console.log(`The depth is ${maxDepth(ex3)}`);