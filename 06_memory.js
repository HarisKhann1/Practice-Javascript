// Stack (primitive, provide copy of data) and Heap (non-primitive, direct access to data)

// Stack:
let userName = "Haris"

let anotherUser = userName
anotherUser = "Umer"

console.log(userName)
console.log(anotherUser)

// The change is done in copy not in actual variable
// ------------------------------------------------------------------------ 

// Heap

let UserOne = {
    email: "Haris@abc.com",
    Name: "Haris"
}

let UserTwo = UserOne

UserTwo.email = "Haris@yahoo.com"

console.log(UserOne.email)
console.log(UserTwo.email)

// The change in original variable as both variable refrencing to the data in heap



