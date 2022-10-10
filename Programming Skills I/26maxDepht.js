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
            console.log({ seen });
            console.log({ currNode });
            /*             if (seen.has(currNode)) {
                            console.log("seen current node");
                            console.log({ currNode });
                            currDepth--;
                        } */
            stack.push(currNode);
            seen.add(currNode);
            console.log({ stack });

            currNode = currNode.left;
            currDepth++;

            depth = Math.max(currDepth, depth);
            console.log({ currDepth, depth });
            console.log("Checking");
            console.log({ currNode });
        }

        if (currNode === null && stack.length !== 0) {
            console.log("******Checking null*******");

            console.log({ currDepth, depth });
            console.log("Popping");
            console.log(stack[stack.length - 1]);

            currNode = stack.pop().right;
            if (seen.has(stack[stack.length - 1])) {
                console.log("Seen parent node");
                console.log(stack[stack.length - 1]);
                currDepth--;
            }
            console.log("New current");
            console.log({ currNode });

            console.log({ stack });
            console.log(`Length: ${stack.length}`);
            console.log({ currDepth, depth });


        }
        //Right checking for right of node, not node we've seen, but there's multiple null nodes. Won't work with multiple values the same either.

        console.log({ currDepth, depth });

        depth = Math.max(currDepth, depth);
        console.log({ seen });
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