/**
 * This program takes in a binary tree and returns its maximum depth.
 * 
 * @param {treeNode} root - The root value of the binary tree leading to the rest of the tree.
 * 
 * @return {int} - The deepest depth of the tree.
 */

//TODO Trace out ex4 to ensure everything is in the right place. Returning 6 when it should be 4
//Got outer while loop from GeeksforGeeks. I had that logic, but it was ending after one pass. The tutorial gave me the nested loops to use both conditions.
function maxDepth(root) {
    let currNode = root;
    let depth = 0;
    let currDepth = 0;
    let stack = [];
    let seen = new Set();
    while (currNode !== null || stack.length > 0) {
        console.log("*****Back to top*****");
        while (currNode !== null) {
            console.log("*****Not null*****");
            stack.push(currNode);
            currNode = currNode.left;
        }

        if (currNode === null && stack.length !== 0) {
            console.log("******Checking null*******");
            currNode = stack.pop().right;
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
console.log(`The depth is ${maxDepth(ex4)}`);