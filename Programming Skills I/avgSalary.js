/**
 * This program takes an array of salaries. It returns the average salary of all employees excluding the lowest and highest.
 * 
 * @param {int[]} salaries - The array containing all the salaries.
 * 
 * @return {number} - The average of all the salaries given excluding the lowest and highest.
 */

let ex1 = [4000, 3000, 1000, 2000];
let ex2 = [1000, 2000, 3000];

function averageSalary(salaries) {
    salaries.sort((curr, prev) => curr - prev);
    salaries.shift();
    salaries.pop();

    return salaries.reduce((sum, num) => (sum + num), 0) / salaries.length;
}

console.log(averageSalary(ex1));