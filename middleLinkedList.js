/**
 * This program takes in the head of a linked list and returns the middle node along with the remainder of the list. If there are two middle nodes it takes the second one. The length of the list is between 1 - 100 and the values could be 1 - 100 inclusive.
 * 
 * @param {array} head - The array containing the linked list.
 * 
 * @return {array} - Returns the middle value of the node and the remainder of the linked list.
 */

let ex1 = {
    val: 1,
    "next": {
        val: 2,
        "next": {
            "val": 3,
            "next": {
                "val": 4,
                "next": {
                    "val": 5,
                    "next": null
                }
            }
        }
    }
}

let ex2 = {
    val: 1,
    "next": {
        val: 2,
        "next": {
            "val": 3,
            "next": {
                "val": 4,
                "next": {
                    "val": 5,
                    "next": {
                        "val": 6,
                        "next": null
                    }
                }
            }
        }
    }
}

function middleNode(head) {
    let arr = flatten(head);
    let mid;
    if (arr.length % 2 !== 0) {
        mid = Math.ceil(arr.length / 2);
    } else {
        mid = Math.ceil((arr.length / 2) + 1);
    }

    console.log(arr.slice(mid - 1));
    return getRemainder(head, mid);
}

// TODO Figure out how to delete entries that aren't necessary
function getRemainder(node, start) {
    console.log("Get Remainder");
    //console.log(typeof node);
    //console.log(node);
    for (const [key, value] of Object.entries(node)) {
        console.log({ key, value });
        //console.log(node[item], start);
        while (key === "val" && value !== start) {
            console.log("Deleting...");
            delete(node[key]);
        }
        if (key === "next" && value !== null) {
            return getRemainder(value, start);
        }
    }
    //console.log(node);
    return node;
}

function countItems(head, count = 0) {
    for (const key in head) {
        if (key === "next") {
            return countItems(head[key], count + 1);
        }
    }
    return count;
}

function flatten(obj) {
    let arr = [];
    //console.log(obj);
    for (const [, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
            arr = [...arr, ...flatten(value)];
        } else if (value !== null) {
            arr = [...arr, value];
        }
    }
    return arr;
}

console.log(middleNode(ex1));