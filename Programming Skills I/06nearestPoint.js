/**
 * This program takes in an array of coordinates and the x and y value of your current location. It returns the index of the set of coordinates from the array that has the smallest Manhattan distance from your location. Manhattan distance = abs(x1-x2)+abs(y1-y2).
 * 
 * @param {int} x - The x coordinate of your current location
 * @param {int} y - The y coordinate of your current location
 * @param {int[][]} points - The array of sets of coordinates to test
 * 
 * @return {int} - The index of the location of the set of points within the array that has the smallest Manhattan distance from your current location.
 */

let ex1 = [3, 4, [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4]
]];
let ex2 = [3, 4, [
    [3, 4]
]];

function nearestValidPoint(x, y, points) {
    let distance = Infinity; //Initialized to 999, should've done infinity first.
    let index = -1;

    for (let point of points) {
        console.log(point);
        if (x === point[0] || y === point[1]) {
            let manhattan = Math.abs(x - point[0]) + Math.abs(y - point[1]);
            if (manhattan < distance) index = points.indexOf(point);
            distance = Math.min(manhattan, distance);
        }
    }
    return index;
}

console.log(nearestValidPoint(ex1[0], ex1[1], ex1[2]));