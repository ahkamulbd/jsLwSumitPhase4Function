// /* Type 1 */
// function display(some) {
//     console.log(some);
// }

// function calculator(num1, num2) {
//     let sum = num1 + num2;

//     return sum;
// }

// let result = calculator(5, 7);
// display(result);

// /* Type 2 */
// function display(some) {
//     console.log(some);
// }

// function calculator(num1, num2) {
//     let sum = num1 + num2;

//     display(sum);
// }

// calculator(5, 8);


// // /* Type 3 */

// function display(some) {
//     console.log(some);
// }

// function calculator(num1, num2, callback) {
//     let sum = num1 + num2;

//     callback(sum);
// }

// calculator(15, 8, display);


/* Type 4 */

function calculator(num1, num2, callback) {
    let sum = num1 + num2;

    if (callback) callback(sum);

    return sum;
}

calculator(10, 30, function (result) {
    //console.log(result);
});

const myNumbers = [4, 1, -20, -7, 5, 9, -6, 7, 10, -11, 3];

const posNumbers = removeNeg(myNumbers, (x) => x >= 0);
// const posNumbers = removeNeg(myNumbers, function (x) {
//     return x => 0;
// });

console.log(posNumbers);

function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}