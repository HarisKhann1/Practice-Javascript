// all about Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleString())
// console.log(typeof(myDate))

let myCreatedDate = new Date("01-03-2020")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp) // in mili-secs
// console.log(Math.floor(Date.now()/1000))

let todayDate = new Date()
console.log(todayDate.getDay())
console.log(todayDate.getTime())
console.log(todayDate.getHours())
console.log(todayDate.getMonth()+1)







