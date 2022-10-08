/**
 * This program takes in the head of a linked list and returns the middle node along with the remainder of the list. If there are two middle nodes it takes the second one. The length of the list is between 1 - 100 and the values could be 1 - 100 inclusive.
 * 
 * @param {node} head - The flatteneday containing the linked list.
 * 
 * @return {int[]} - Returns the middle value of the node and the remainder of the linked list.
 */



function middleNode(head) {
    console.log({ head });
    let flattened = flatten(head);
    let mid;
    if (flattened.length % 2 !== 0) {
        mid = Math.ceil(flattened.length / 2);
    } else {
        mid = Math.ceil((flattened.length / 2) + 1);
    }

    //console.log(flattened.slice(mid - 1));
    return getRemainder(head, mid);
}

function getRemainder(node, start) {
    //node["val"] = start;
   // console.log( {node} );
    console.log("Get Remainder");
    //console.log(typeof node);
    //console.log(node);
    //node.next = start.next;
    //console.log(`Node ${node}`);

/*     for (const [key, value] of Object.entries(node)) {
        console.log({ key, value });
        if (key === "val" && value !== start) {
            console.log(node["val"], start);

            console.log("Deleting...");
                node.next = start.next;
        }
        if (key === "next" && value !== null) {
            return getRemainder(value, start);
        }
    } */
    //console.log(`Final ${node}`);
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
    let flattened = [];
    //console.log(obj);
    for (const [, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
            flattened = [...flattened, ...flatten(value)];
        } else if (value !== null) {
            flattened = [...flattened, value];
        }
    }
    return flattened;
}

//Video Solution from LeetCode
function middleNode2(head) {
    let middleNode = head;
    let endNode = head;

    while(endNode != null && endNode.next !== null) {
        middleNode = middleNode.next;
        endNode = endNode.next.next;
    }
    return middleNode;    
}
let ex1 = {
    "val": 1,
    "next": {
        "val": 2,
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
    "val": 1,
    "next": {
        "val": 2,
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

//console.log(middleNode(ex1));
console.log(middleNode2(ex1));