/**
 * This program takes in an array of coordinates for an XY plane. It must determine if they form a straight line when plotted on a standard graph.
 * 
 * @param {int[][]} coordinates - The array containing the coordinates for the line.
 * 
 * @return {bool} - Returns whether or not the coordinates will form a straight line.
 */

function isStraightLine(coordinates) {

    let slope = (coordinates[0][1] - coordinates[1][1]) / (coordinates[0][0] - coordinates[1][0]);
    let b = -(coordinates[0][0] * slope - coordinates[0][1]);
    console.log({ slope, b });

    if (coordinates.every(num => num[0] === coordinates[0][0]) ||
        (coordinates.every(num => num[1] === coordinates[0][1]))) return true;

    for (let coord of coordinates) {

        console.log({ coord });
        console.log(slope * coord[0] + b, coord[1]);
        if ((slope * coord[0] + b !== coord[1])) return false;
    }
    return true;
    /*     const x = [];
        const y = [];

        for (const element of coordinates) {
            x.push(element[0]);
            y.push(element[1]);
        }
        console.log({ x });
        x.sort();
        console.log({ x });

        console.log({ y });
        y.sort();
        console.log({ y });

        let xDiff = Math.abs(x[1] - x[0]);
        console.log({ xDiff });
        let yDiff = Math.abs(y[1] - y[0]);
        console.log({ yDiff });
        let xStatus;
        let yStatus;

        for (let i = 0; i < x.length - 1; i++) {
            console.log(`Xs ${x[i + 1]} - ${x[i]} = ${Math.abs(x[i + 1] - x[i])}`);
            xStatus = Math.abs((x[i + 1] - x[i]) === xDiff) ? true : false;
            console.log({ xStatus });
            if (!xStatus) return false;
        }

        for (let i = 0; i < y.length - 1; i++) {
            console.log(`Ys ${y[i + 1]} - ${y[i]} = ${Math.abs(y[i + 1] - y[i])}`);
            yStatus = Math.abs((y[i + 1] - y[i]) === yDiff) ? true : false;
            console.log({ yStatus });

            if (!yStatus) return false;

        }

        return xStatus && yStatus; */
}
let ex1 = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7]
]; //true
let ex2 = [
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7]
]; //false

let ex3 = [
    [0, 0],
    [0, 1],
    [0, -1]
]; //true

let ex4 = [
    [2, 4],
    [2, 5],
    [2, 8]
]; //true

let ex5 = [
    [0, 1],
    [2, 4],
    [3, 3]
]; //false

let ex6 = [
    [2, 1],
    [4, 2],
    [6, 3]
]; //true

let ex7 = [
    [0, 1],
    [1, 3],
    [-4, -7],
    [5, 11]
]; //true
console.log(isStraightLine(ex7));

//Majorly overcomplicated everything until I realized I should just use the math equation mx+b to determine if each point is on the line. I thought it would be easier to check the xs and then the ys, but this is not work and was O(n^3).