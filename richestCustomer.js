/** 
 * This function takes in a 2D array containing information for customers' wealth. Each nested array represents the values of their money.
 * 
 * @param {int[int[]]} accounts - The 2D array containing the customers and how much money they have in multiple accounts.
 * 
 * @return {int} - The amount of money the richest customer has.
 */

let ex1 = [
    [1, 2, 3],
    [3, 2, 1]
];
let ex2 = [
    [1, 5],
    [7, 3],
    [3, 5]
];

function maximumWealth(accounts) {
    let newArr = [];
    accounts.map(account => newArr.push(account.reduce((sum, curr) => {
        return sum + curr
    }, 0)));
    return Math.max(...newArr);
}

console.log(maximumWealth(ex1));