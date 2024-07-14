let number = "33"
console.log(typeof(number))

let valueInNumber = Number(number)
console.log(typeof(valueInNumber))

let num = "33abc"
let valueInNumber1 = Number(num)
console.log(valueInNumber1)
console.log(typeof(valueInNumber1))

console.log()
let num1 = 33
let valueInNumber2 = String(num1)
console.log(valueInNumber2)
console.log(typeof(valueInNumber2))

// "33" => 33
// "33ad" => NaN
// true => 1; false => 0 
// 33 => "33"  using (String)
// 1 => True; 0 => False using (Boolean)
// "" => Ture; "Haris" => True using (Boolean)

console.log()
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof(booleanIsLoggedIn))
