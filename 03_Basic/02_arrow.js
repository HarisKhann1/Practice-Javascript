// const user = {
//     username: "Haris",
//     price: 99.99,
//     message: function Hello() {
//         // this keyword refers to the current context
//         console.log(`${this.username}, Welocme to website`);
//     }
// }

// console.log(user.message());
// user.username = "sam"
// console.log(user.message());
// ========================================
// function chai() {
//     let username = "Haris"
//     // this keyword only works in object
//     console.log(this.username); //undefined
// }

// chai()
// ===========================================
// arraow fuction
// () => {}
// const addTwo = () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return (no need to write return)
// const addTwo = (num1, num2) => (num1 + num2)

// what if want to return an object
const addTwo = (num1, num2) => ({name: "Haris"})

console.log(addTwo(3,4));

