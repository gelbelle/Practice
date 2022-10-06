/**
 * This program takes in a binary number as a linked list and returns the integer equivalent.
 * 
 * @param {linkedList} head - The pointer to the head node of the linked list to be converted
 * 
 * @param {int} - the base 10 equivalent of the binary number
 */


/**
 * Some help from middleLinkedList and answers from Leet for looping the linkedlist. reduce is all mine.
 */
//Everyone in the answers used bitwise manipulation or 2*2 plus current value.

function getDecimalVal(head) {
    let arr = [];

    while (head !== null) {
        arr.unshift(head["val"])
        head = head.next;
    }
    return arr.reduce((total, val, i) => (val !== 0) ? total + (2 ** i) : total, 0);
}

let ex1 = {
    "val": 1,
    "next": {
        "val": 0,
        "next": {
            "val": 1,
            "next": null
        }
    }
};

let ex2 = {
    "val": 0,
    "next": null
};

let ex3 = {
    "val": 1,
    "next": {
        "val": 0,
        "next": {
            "val": 0,
            "next": {
                "val": 1,
                "next": {
                    "val": 0,
                    "next": {
                        "val": 0,
                        "next": {
                            "val": 1,
                            "next": {
                                "val": 1,
                                "next": {
                                    "val": 1,
                                    "next": {
                                        "val": 0,
                                        "next": {
                                            "val": 0,
                                            "next": {
                                                "val": 0,
                                                "next": {
                                                    "val": 0,
                                                    "next": {
                                                        "val": 0,
                                                        "next": {
                                                            "val": 0,
                                                            "next": null
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

console.log(getDecimalVal(ex3));
/* let binary = [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0];

function testBinary(binary) {
    let total = 0;
    binary.reverse();
    for (let i = 0; i < binary.length; i++) {
        console.log(binary[i]);
        if (binary[i] === 1) {
            console.log({ i, total });
            total += (2 ** (i));
            console.log({ total });
        }
    }
    console.log(total);
}

testBinary(binary); */
