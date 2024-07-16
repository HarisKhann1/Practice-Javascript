let name = "Haris Khan"
console.log(name.split(" "))

console.log(name.replace("Haris", "Umer"))

// includes(searchString[, position]): Checks whether a string contains the specified string or characters.
console.log(name.includes("Khan"))

let fullName = new String("       Haris Khan      ")
console.log(fullName.trim())

let email = new String("haris@gmail.com")
console.log(email.substring(2,5))

console.log(email.slice(2,5))

console.log(email.indexOf('@'))

let firstName = "Haris"
let lastName = "Khan"
console.log(firstName.concat(" ",lastName))


