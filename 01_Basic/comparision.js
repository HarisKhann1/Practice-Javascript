let num1 = 5
let num2 = 6

// console.log(num1 > num2)
// console.log(num1 >= num1)
// console.log(num1 == num2)
// console.log(num1 != num2)

// ------------------------------------------

// console.log("2" < num1)
// console.log("02" < num1)
// console.log("04" > num1)
// --------------------------------------------
/* We avoide such comparisions, code must be clean*/
/* 
The reason is that an equality check == and comparisions > <>= <= workd differently.
Comparisons convert null to a number treating it as 0. That's is why (line 20) null >= is true and (line 18) null > 0 is flase 
*/
console.log(null > 0) // 0 >  0 ==> false
console.log(null == 0)  // empty > 0 ==> false
console.log(null >= 0) // 0 >= 0 ==> true
// ---------------------------------------------------
// In all cases it will give false
console.log()

console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
// ----------------------------------------------------

// === checks strickly as it checks datatypes as well
console.log()

console.log("2" === 2) // false
console.log("2" == 2) // true, not checking its data type.
