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
    console.log(result);
});
