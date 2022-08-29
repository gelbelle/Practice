/**
 * Takes a matrix containing rivers of various lengths. Find the length of each river. Rivers are connected horizontally and vertically. Return the length of each river you find. Rivers are marked as 1 and land is 0.
 * 1. Look through elements
 * 2. check if element is a one
 * 3. start looking for the rest of the river
 * 4. determine length of river
 * 5. Store length of river
 * 
 * param: 2d array {matrix}
 * length {int} length of each river to be stored
 * lengths {array} Array to be returned containing the length of each river
 **/

function riverSize(rivers) {
    //console.log(`original ${rivers}`);
    for (const row in rivers) {
        //console.log(`row ${rivers[row]}`);
        for (const col in rivers[row]) {
            used.push([row, col]);
            if (rivers[row][col] === 1 && !isUsed(row, col)) {
                if (getLength(parseInt(row), parseInt(col))) {
                    sizes.push(getLength(parseInt(row), parseInt(col)));
                    length = 0;
                }
            }
        }
    }
    console.log(`There are ${sizes.length} rivers of sizes: ${sizes}.`);
}

/**
 * determine the length of the river and return it
 * 
 * param {int} col
 * param {int} row
 * return {int} length: length of the river
 **/

function getLength(row = 0, col = 0) {
    console.log({ row, col });
    console.table(river1);
    if (river1[row][col] === 1) {
        length++;
        river1[row][col] = 0;
    }

    let top = row - 1;
    let bottom = row + 1;
    let left = col - 1;
    let right = col + 1;

    top = validate(top, bottom, left, right, row)[0];
    bottom = validate(top, bottom, left, right, row)[1];
    left = validate(top, bottom, left, right, row)[2];
    right = validate(top, bottom, left, right, row)[3];

    if (top >= 0 && river1[top][col] === 1) {
        getLength(top, col);

    }
    if (left >= 0 && river1[row][left] === 1) {
        getLength(row, left);
        //used.push([row, left]);
    }
    if (bottom >= 0 && river1[bottom][col] === 1) {
        getLength(bottom, col);
        //used.push([bottom, col]);
    }
    if (right >= 0 && river1[row][right] === 1) {
        getLength(row, right);
        //used.push([row, right]);
    }

    return length;
}

function validate(top, bottom, left, right, col) {
    if (top < 0 && !isUsed(top)) {
        top = -1;
    }
    if (bottom > river1.length - 1 && !isUsed(bottom)) {
        bottom = -1;
    }
    if (left < 0 && !isUsed(left)) {
        left = -1;
    }
    if (right > river1[col].length - 1 && !isUsed(right)) {
        right = -1;
    }
    return [top, bottom, left, right];
}

function isUsed(row, col) {
    return used.find(place => place === [row, col]);
}

let length = 0;
let river1 = [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 1]
];
let sizes = [];
console.table(river1);
let used = [];

riverSize(river1);