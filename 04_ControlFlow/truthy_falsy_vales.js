const userEmail = "Haris@meta.ai"

if (userEmail) {
    console.log(`True`); 
} else {
    console.log(`False`); 
}

// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values:
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
// val1 = undefined ?? 10 // 10
val1 = null ?? 10 ?? 15  // 10
console.log(val1);

// Terniary Operator

// condition ? true : false

const teaPrice = 100

teaPrice <= 120 ? console.log("True") : console.log("false");;