const accountId = 12345                // it is static value and cannot be changed later on
let accountEmail = "haris@gmail.com"
var accountPassword = "123@pass"
accountCity = "Karachi"               // bad practice
let accountState;

// accountId  = 123 // not allowed
console.log(accountId)

// prefer not to use var, because of issue in block scope and functional scope

accountEmail = "changed@gmail.com"
accountPassword = "changed123"
accountCity = "Multan"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

console.log(typeof(accountEmail), typeof(accountId))
