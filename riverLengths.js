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
            //console.log({ col });
            if (rivers[row][col] === 1) {
                if (getLength(parseInt(row), parseInt(col))) {
                    sizes.push(getLength(parseInt(row), parseInt(col)));
                    length = 0;
                }
            }
        }
    }
    console.log(`Sizes ${sizes}`);
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
    }
    if (bottom >= 0 && river1[bottom][col] === 1) {
        getLength(bottom, col);
    }
    if (right >= 0 && river1[row][right] === 1) {
        getLength(row, right);
    }

    return length;
}


function validate(top, bottom, left, right, col) {
    if (top < 0) {
        top = -1;
    }
    if (bottom > river1.length - 1) {
        bottom = -1;
    }
    if (left < 0) {
        left = -1;
    }
    if (right > river1[col].length - 1) {
        right = -1;
    }
    return [top, bottom, left, right];
}

let length = 0;
let river1 = [
    [1, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 1]
];
let sizes = [];
console.table(river1);

riverSize(river1);