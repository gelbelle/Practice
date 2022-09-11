/**
 * Takes in an integer to determine where to stop counting. If a number is divisible by 3 and 5 you must replace it with "FizzBuzz". If a number is divisible by 3 you must replace it with "Fizz". If a number is divisible by 5 you must replace it with "Buzz".
 * 
 * @param {int} length - The number to stop counting at, inclusive.
 * 
 * @return {string[]} - An array counting from 1 to the length with word replacements as required.
 * 
 * All three strategies received similar benchmarks. The other two are simply for scalability.
 */

let ex1 = 3;
let ex2 = 5;
let ex3 = 19;

function fizzBuzz(length) {
    let counting = [];
    for (let i = 1; i <= length; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            counting.push("FizzBuzz");
        } else if (i % 3 === 0) {
            counting.push("Fizz");
        } else if (i % 5 === 0) {
            counting.push("Buzz");
        } else {
            counting.push(i.toString());
        }
    }
    return counting;
}

console.log(fizzBuzz(ex3));

//For scalability to more number replacements
function fizzBuzz2(length) {
    let counting = [];
    for (let i = 1; i <= length; i++) {
        let divBy3 = (i % 3 === 0);
        let divBy5 = (i % 5 === 0);
        let divBy7 = (i % 7 === 0);

        let ans = "";

        if (divBy3) ans += "Fizz";
        if (divBy5) ans += "Buzz";
        if (divBy7) ans += "Jazz";

        if (ans === "") ans = i.toString();

        counting.push(ans);
    }
    return counting;
}

console.log(fizzBuzz2(ex3));

//Further Scalability for extremely large numbers of replacements. 
function fizzBuzz3(length) {
    let dict = {
        3: "Fizz",
        5: "Buzz",
        7: "Jazz"
    };
    let counting = [];
    let divisors = [3, 5, 7];

    for (let i = 1; i <= length; i++) {
        let ans = [];
        // console.log(`Checking ${i}`);
        divisors.forEach(num => {
            // console.log({ num });
            if (i % num === 0) {
                //  console.log(dict[num]);
                ans.push(dict[num]);
            }
        });
        if (ans.length === 0) ans.push(i.toString());

        // console.log({ ans });
        counting.push(ans.join(""));
    }
    return counting;
}

console.log(fizzBuzz3(ex3));