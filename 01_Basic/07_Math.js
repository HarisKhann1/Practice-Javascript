// ------------------------------Number===============================

// let balance = 400
// console.log(balance.toFixed(2));

// let num1 = 23.95843
// const num2 = 123.95843
// console.log(num1.toPrecision(3));
// console.log(num2.toPrecision(2));

// const hundreds = 10000000
// console.log(hundreds.toLocaleString());

// ------------------------------Math===============================

// write a program that will give random values between 10 to 20

let min = 10
let max = 20

let random_value = Math.floor((Math.random() * (max - min + 1)) + min)

console.log(random_value);
